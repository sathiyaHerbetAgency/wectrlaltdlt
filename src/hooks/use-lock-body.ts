"use client"

import { useEffect } from "react"

export function useLockBody(locked: boolean) {
  useEffect(() => {
    const original = document.body.style.overflow
    if (locked) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = original
    }
    return () => {
      document.body.style.overflow = original
    }
  }, [locked])
}
