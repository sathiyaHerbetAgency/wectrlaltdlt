"use client"

import React from "react"

type Props = {
  target?: Date
}

function pad2(n: number) {
  return n.toString().padStart(2, "0")
}

export function Countdown({ target }: Props) {
  const [now, setNow] = React.useState(() => Date.now())

  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const end = target?.getTime() ?? Date.now() + 6 * 24 * 60 * 60 * 1000
  const diff = Math.max(0, end - now)

  const totalMinutes = Math.floor(diff / (60 * 1000))
  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes - days * 24 * 60) / 60)
  const minutes = totalMinutes % 60

  return (
    <div className="mt-6 flex flex-col items-center">
      <div
        className="flex items-center gap-4 font-[inter] text-white md:gap-6"
        aria-live="polite"
        aria-label={`Countdown ${days} days ${hours} hours ${minutes} minutes`}
      >
        <Digit value={pad2(days)} />
        <Colon />
        <Digit value={pad2(hours)} />
        <Colon />
        <Digit value={pad2(minutes)} />
      </div>

      <div className="mt-2 grid grid-cols-3 gap-6 font-[inter] text-[10px] tracking-[0.22em] text-white uppercase md:text-xs">
        <span className="text-center mr-8">DAYS</span>
        <span className="text-center">HOURS</span>
        <span className="text-center">MINUTES</span>
      </div>
    </div>
  );
}

function Digit({ value }: { value: string }) {
  return (
    <span className="font-extrabold font-[inter] text-white text-5xl md:text-7xl leading-none tabular-nums">{value}</span>
  )
}

function Colon() {
  return (
    <span className="text-hero-foreground/95 font-[inter] text-5xl leading-none text-white md:text-7xl">
      :
    </span>
  );
}
