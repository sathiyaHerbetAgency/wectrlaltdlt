"use client"

import React from "react"

type Slide = { src: string; alt: string }

const BASE: Slide[] = [
  { src: "/images/lineup/KLANG.webp", alt: "Klangkuenstler" },
  { src: "/images/lineup/LILLY.webp", alt: "Lilly Palmer" },
  { src: "/images/lineup/MATHAME.webp", alt: "Mathame" },
  { src: "/images/lineup/BEN.webp", alt: "Ben Hemsley" },
  // { src: "/images/lineup/KEY4050.webp", alt: "BKey 4050" },
  { src: "/images/lineup/CURZON.webp", alt: "Curzon" },
  { src: "/images/lineup/DIRTY SIGNAL.webp", alt: "DIRTY SIGNAL" },
  { src: "/images/lineup/FBSJ.webp", alt: "FBSJ" },
  { src: "/images/lineup/YUSEF.webp", alt: " YUSEF" },


];

function count(){
  return BASE.length;
}

// Duplicate to 9 slides
const SLIDES: Slide[] = Array.from({ length: count() }, (_, i) => BASE[i % BASE.length]);

export default function LineupSlider({
  className = "",
  autoplayMs = 3500,
}: {
  className?: string
  autoplayMs?: number
}) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null)
  const trackRef = React.useRef<HTMLDivElement | null>(null)

  const [center, setCenter] = React.useState(0)
  const [visible, setVisible] = React.useState(1) // 1 on mobile, 3 on md+
  const [autoplayEnabled, setAutoplayEnabled] = React.useState(true)

  const raf = React.useRef<number | null>(null)
  const timer = React.useRef<number | null>(null)
  const isHovering = React.useRef(false)
  const isPointerDown = React.useRef(false)
  const didInit = React.useRef(false)

  const computeVisible = React.useCallback(() => {
    const m = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)")
    setVisible(m && m.matches ? 3 : 1)
  }, [])

  const getSlides = React.useCallback(() => {
    return Array.from(trackRef.current?.querySelectorAll<HTMLDivElement>(".js-slide") ?? [])
  }, [])

  const clampIndex = (i: number) => {
    const max = SLIDES.length - 1
    return Math.min(Math.max(i, 0), max)
  }

  const centerTo = React.useCallback(
    (targetIndex: number, smooth = true) => {
      const vp = viewportRef.current
      const slides = getSlides()
      if (!vp || !slides.length) return

      const idx = clampIndex(targetIndex)
      const el = slides[idx]
      const target = el.offsetLeft + el.clientWidth / 2 - vp.clientWidth / 2 // slide center -> viewport center

      const maxScroll = Math.max(0, (trackRef.current?.scrollWidth ?? 0) - vp.clientWidth)
      const clamped = Math.min(Math.max(target, 0), maxScroll)

      vp.scrollTo({ left: clamped, behavior: smooth ? "smooth" : "auto" })
      setCenter(idx)
    },
    [getSlides],
  )

  const handleScroll = React.useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const vp = viewportRef.current
      const slides = getSlides()
      if (!vp || !slides.length) return

      const vpCenter = vp.scrollLeft + vp.clientWidth / 2
      let nearest = 0
      let best = Number.POSITIVE_INFINITY
      for (let i = 0; i < slides.length; i++) {
        const s = slides[i]
        const c = s.offsetLeft + s.clientWidth / 2
        const d = Math.abs(c - vpCenter)
        if (d < best) {
          best = d
          nearest = i
        }
      }
      setCenter(nearest)
    })
  }, [getSlides])

  const stop = React.useCallback(() => {
    if (timer.current) window.clearInterval(timer.current)
    timer.current = null
  }, [])

  const play = React.useCallback(() => {
    if (timer.current) window.clearInterval(timer.current)
    if (!autoplayEnabled) return
    timer.current = window.setInterval(() => {
      if (isHovering.current || isPointerDown.current) return
      const next = center + 1 >= SLIDES.length ? 0 : center + 1
      centerTo(next)
    }, autoplayMs)
  }, [autoplayMs, autoplayEnabled, center, centerTo])

  const disableAuto = React.useCallback(() => {
    setAutoplayEnabled(false)
    stop()
  }, [stop])

  // init / resize
  React.useEffect(() => {
    computeVisible()
    requestAnimationFrame(() => {
      if (!didInit.current) {
        centerTo(0, false) // start on the first card and show zoom immediately
        didInit.current = true
      }
    })
    const onResize = () => {
      computeVisible()
      requestAnimationFrame(() => {
        centerTo(center, false) // keep current center consistent across breakpoints
      })
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // scroll listener + autoplay
  React.useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    el.addEventListener("scroll", handleScroll, { passive: true })
    play()
    return () => {
      el.removeEventListener("scroll", handleScroll)
      stop()
    }
  }, [handleScroll, play, stop])

  return (
    <section
      className={`relative w-full ${className}`}
      aria-label="Artist lineup slider"
      onMouseEnter={() => {
        isHovering.current = true
        stop()
      }}
      onMouseLeave={() => {
        isHovering.current = false
        if (autoplayEnabled) play()
      }}
    >
      {/* Viewport */}
      <div
        ref={viewportRef}
        className="
          overflow-x-auto scroll-smooth snap-x snap-mandatory
          [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden
        "
        onPointerDown={() => {
          isPointerDown.current = true
          disableAuto()
        }}
        onPointerUp={() => (isPointerDown.current = false)}
        onPointerCancel={() => (isPointerDown.current = false)}
      >
        {/* Track: 10% peek on mobile via px-[10vw] and basis-[80%] */}
        <div ref={trackRef} className="flex gap-6 px-[10vw] h-[420px] md:px-6">
          {SLIDES.map((s, i) => {
            const active = i === center
            return (
              <div
                key={`${s.alt}-${i}`}
                className="js-slide snap-center shrink-0 basis-[80%] md:basis-1/3 flex items-center justify-center"
              >
                <figure
                  className={[
                    "transition-all duration-300 ease-out",
                    "w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[16rem] lg:max-w-[18rem] xl:max-w-[20rem]",
                    active ? "scale-110 " : "scale-95 opacity-90",
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
            )
          })}
        </div>
      </div>

      {/* Pagination: one dot per card; clicking centers that card */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {SLIDES.map((_, i) => {
          const active = i === center
          return (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                disableAuto()
                centerTo(i)
              }}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all duration-200",
                active ? "bg-white scale-100" : "bg-white/30 hover:bg-white/50",
              ].join(" ")}
            />
          )
        })}
      </div>
    </section>
  )
}
