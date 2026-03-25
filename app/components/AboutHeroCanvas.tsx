'use client'
import { useEffect, useRef } from 'react'

// About Hero — Integrity & Inner Light (Loob)
// Slow breathing gradient (deep teal ↔ warm amber) with concentric ripple rings
// radiating outward from centre, like authenticity expanding from within.

export default function AboutHeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, t = 0, raf = 0

    // Ripple ring state
    interface Ring { r: number; opacity: number; gold: boolean }
    const rings: Ring[] = []
    let nextSpawn = 0

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width = p.clientWidth; cv.height = p.clientHeight
      W = cv.width; H = cv.height
    }

    function spawnRing() {
      rings.push({ r: 0, opacity: 0.38, gold: rings.length % 3 === 0 })
    }

    function drawBreath() {
      // Base deep teal
      ctx.fillStyle = '#0a2a35'
      ctx.fillRect(0, 0, W, H)

      // Breathing radial overlay: centre teal glow that expands/contracts
      const breath = 0.5 + 0.5 * Math.sin(t * 0.42)
      const bR = (0.28 + 0.12 * breath) * Math.min(W, H)

      const g1 = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, bR)
      g1.addColorStop(0,   `rgba(26,80,90,${0.55 + 0.25 * breath})`)
      g1.addColorStop(0.5, `rgba(13,52,64,${0.30 + 0.15 * breath})`)
      g1.addColorStop(1,   'rgba(10,42,53,0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, W, H)

      // Warm amber shimmer at centre on exhale
      const amber = 0.5 + 0.5 * Math.sin(t * 0.42 + Math.PI)  // opposite phase
      const aR = (0.18 + 0.08 * amber) * Math.min(W, H)
      const g2 = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, aR)
      g2.addColorStop(0,   `rgba(200,121,65,${0.09 * amber})`)
      g2.addColorStop(1,   'rgba(200,121,65,0)')
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, W, H)
    }

    function drawRings() {
      const maxR = Math.sqrt(W * W + H * H) * 0.55
      rings.forEach((ring, i) => {
        ctx.beginPath()
        ctx.arc(W / 2, H / 2, ring.r, 0, Math.PI * 2)
        ctx.strokeStyle = ring.gold
          ? `rgba(200,121,65,${ring.opacity * 0.85})`
          : `rgba(100,190,200,${ring.opacity})`
        ctx.lineWidth = ring.gold ? 1.2 : 0.8
        ctx.stroke()

        ring.r       += 0.55
        ring.opacity -= ring.opacity * 0.012

        if (ring.r > maxR || ring.opacity < 0.004) rings.splice(i, 1)
      })
    }

    function render(anim: boolean) {
      t += 0.016
      ctx.clearRect(0, 0, W, H)
      drawBreath()
      if (anim && t > nextSpawn) {
        spawnRing()
        nextSpawn = t + 1.6 + Math.random() * 0.8
      }
      drawRings()
      if (anim) raf = requestAnimationFrame(() => render(true))
    }

    function renderStatic() {
      t = 0; render(false)
      // Draw a few static rings for visual richness
      for (let i = 0; i < 4; i++) rings.push({ r: 60 + i * 70, opacity: 0.18 - i * 0.03, gold: i === 1 })
      drawRings()
    }

    const ro = new ResizeObserver(() => { resize(); reducedMotion ? renderStatic() : render(true) })
    if (cv.parentElement) ro.observe(cv.parentElement)
    resize()
    reducedMotion ? renderStatic() : render(true)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
