"use client";

import React from "react";

type Slide = { src: string; alt: string };

const BASE: Slide[] = [
  { src: "/images/lineup/klang.png", alt: "Klangkuenstler" },
  { src: "/images/lineup/lilly.png", alt: "Lilly Palmer" },
  { src: "/images/lineup/ben.png", alt: "Ben Hemsley" },
];

// Duplicate to 9 slides
const SLIDES: Slide[] = Array.from({ length: 9 }, (_, i) => BASE[i % BASE.length]);

export default function LineupSlider({
  className = "",
  autoplayMs = 3500,
}: {
  className?: string;
  autoplayMs?: number;
}) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = React.useState(0); // left-most index
  const [visible, setVisible] = React.useState(1); // 1 on mobile, 3 on md+
  const [autoplayEnabled, setAutoplayEnabled] = React.useState(true);

  const raf = React.useRef<number | null>(null);
  const timer = React.useRef<number | null>(null);
  const isHovering = React.useRef(false);
  const isPointerDown = React.useRef(false);

  const computeVisible = React.useCallback(() => {
    const m = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)");
    setVisible(m && m.matches ? 3 : 1);
  }, []);

  const slideWidth = React.useCallback(() => {
    const el = viewportRef.current;
    if (!el) return 0;
    return el.clientWidth / (visible || 1);
  }, [visible]);

  const clampIndex = (i: number) => {
    const max = SLIDES.length - 1;
    if (i < 0) return 0;
    if (i > max) return max;
    return i;
  };

  const scrollTo = React.useCallback(
    (targetSlideIndex: number) => {
      const el = viewportRef.current;
      if (!el) return;
      const w = slideWidth();
      const centerOffset = Math.floor(visible / 2); // 0 for 1-up, 1 for 3-up
      const maxLeft = Math.max(0, (SLIDES.length - visible) * w);
      const left = Math.min(Math.max((targetSlideIndex - centerOffset) * w, 0), maxLeft);
      el.scrollTo({ left, behavior: "smooth" });
    },
    [slideWidth, visible]
  );

  const handleScroll = React.useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = viewportRef.current;
      if (!el) return;
      const w = slideWidth();
      if (w <= 0) return;
      const i = Math.round(el.scrollLeft / w);
      setIndex(clampIndex(i));
    });
  }, [slideWidth]);

  const play = React.useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    if (!autoplayEnabled) return;
    timer.current = window.setInterval(() => {
      if (isHovering.current || isPointerDown.current) return;
      setIndex((prev) => {
        const nextLeft = prev + 1 >= SLIDES.length ? 0 : prev + 1;
        const centerOffset = Math.floor(visible / 2);
        scrollTo(nextLeft + centerOffset);
        return nextLeft;
      });
    }, autoplayMs);
  }, [autoplayMs, scrollTo, autoplayEnabled, visible]);

  const stop = React.useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  }, []);

  const disableAuto = React.useCallback(() => {
    setAutoplayEnabled(false);
    stop();
  }, [stop]);

  React.useEffect(() => {
    computeVisible();
    const onResize = () => {
      computeVisible();
      requestAnimationFrame(() => scrollTo(index));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    play();
    return () => {
      el.removeEventListener("scroll", handleScroll);
      stop();
    };
  }, [handleScroll, play, stop, visible]);

  const pages = Math.max(1, Math.ceil(SLIDES.length / (visible || 1)));
  const activePage = Math.round(index / (visible || 1));
  const centerIndex = clampIndex(index + Math.floor(visible / 2));

  return (
    <section
      className={`relative w-full ${className} `}
      aria-label="Artist lineup slider"
      onMouseEnter={() => {
        isHovering.current = true;
        stop();
      }}
      onMouseLeave={() => {
        isHovering.current = false;
        if (autoplayEnabled) play();
      }}
    >
      {/* Viewport */}
      <div
        ref={viewportRef}
        className="snap-x snap-mandatory overflow-x-auto scroll-smooth  [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
        onPointerDown={() => {
          isPointerDown.current = true;
          disableAuto();
        }}
        onPointerUp={() => (isPointerDown.current = false)}
        onPointerCancel={() => (isPointerDown.current = false)}
      >
        {/* Track */}
        <div className="flex gap-6 px-4 md:px-6 min-h-[420px]">
          {SLIDES.map((s, i) => {
            const active = i === centerIndex;
            return (
              <div
                key={`${s.alt}-${i}`}
                className="flex shrink-0 basis-full snap-center items-center justify-center md:basis-1/3"
              >
                <figure
                  className={[
                    "transition-all duration-300 ease-out",
                    "w-64 sm:w-72 md:w-64 lg:w-72 xl:w-80",
                    active
                      ? "scale-110 drop-shadow-[0_0_24px_rgba(0,170,255,0.55)]"
                      : "scale-95 opacity-90",
                  ].join(" ")}
                >
                  <img
                    src={s.src || "/placeholder.svg?height=320&width=260&query=artist%20card"}
                    alt={s.alt}
                    draggable={false}
                    className="block h-auto w-full"
                  />
                  <figcaption className="sr-only">{s.alt}</figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination (card-based) */}
      {/* dots now match the number of cards; clicking a dot centers that card */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {SLIDES.map((_, i) => {
          const active = i === centerIndex;
          return (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                disableAuto();
                scrollTo(i); // i is the center-target slide
              }}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all duration-200",
                active ? "scale-100 bg-white" : "bg-white/30 hover:bg-white/50",
              ].join(" ")}
            />
          );
        })}
      </div>

      {/* <div className="mt-4 flex items-center justify-end px-4 md:px-6">
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => {
            disableAuto();
            const nextLeft = index + 1 >= SLIDES.length ? 0 : index + 1;
            const centerOffset = Math.floor(visible / 2);
            scrollTo(nextLeft + centerOffset);
            setIndex(nextLeft);
          }}
          className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition select-none hover:bg-white/20 active:scale-95"
        >
          Next
        </button>
      </div> */}
    </section>
  );
}
