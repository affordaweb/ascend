'use client'
import { useEffect, useRef } from 'react'

// Homepage Hero — Constellation / Kapwa (Shared Humanity)
// Soft glowing dots drift upward and connect, symbolising collective ascent.

interface P {
  ox: number   // horizontal oscillation centre
  y:  number
  vy: number   // upward velocity (negative = up)
  vox: number  // slow horizontal drift of ox
  r:  number
  phase: number
  freq:  number
  amp:   number
  gold:  boolean
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const CONNECT = 130
    let W = 0, H = 0, t = 0, raf = 0
    let pts: P[] = []

    function make(yInit?: number): P {
      const gold = Math.random() < 0.13
      return {
        ox:    Math.random() * W,
        y:     yInit ?? Math.random() * H,
        vy:    -(0.12 + Math.random() * 0.28),
        vox:   (Math.random() - 0.5) * 0.08,
        r:     gold ? 2.8 + Math.random() * 1.8 : 1.4 + Math.random() * 1.8,
        phase: Math.random() * Math.PI * 2,
        freq:  0.35 + Math.random() * 0.55,
        amp:   12 + Math.random() * 28,
        gold,
      }
    }

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width  = p.clientWidth
      cv.height = p.clientHeight
      W = cv.width; H = cv.height
      const n = Math.min(110, Math.max(60, Math.floor((W * H) / 9000)))
      pts = Array.from({ length: n }, () => make())
    }

    function drawPulse() {
      const pulse = 0.034 + 0.028 * Math.sin(t * 0.55)
      const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.min(W, H) * 0.46)
      g.addColorStop(0,   `rgba(245,158,11,${pulse})`)
      g.addColorStop(0.45,`rgba(30,58,95,${pulse * 0.55})`)
      g.addColorStop(1,   'rgba(7,24,41,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)
    }

    function drawLines() {
      for (let i = 0; i < pts.length; i++) {
        const x1 = pts[i].ox + pts[i].amp * Math.sin(t * pts[i].freq + pts[i].phase)
        for (let j = i + 1; j < pts.length; j++) {
          const x2 = pts[j].ox + pts[j].amp * Math.sin(t * pts[j].freq + pts[j].phase)
          const dx = x1 - x2, dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d > CONNECT) continue
          const a = (1 - d / CONNECT) * 0.28
          const gold = pts[i].gold || pts[j].gold
          ctx.beginPath()
          ctx.moveTo(x1, pts[i].y)
          ctx.lineTo(x2, pts[j].y)
          ctx.strokeStyle = gold ? `rgba(240,165,0,${a * 1.3})` : `rgba(122,176,232,${a})`
          ctx.lineWidth   = gold ? 0.65 : 0.45
          ctx.stroke()
        }
      }
    }

    function drawDots() {
      pts.forEach(p => {
        const x = p.ox + p.amp * Math.sin(t * p.freq + p.phase)
        const glowR = p.r * 4.5
        const g = ctx.createRadialGradient(x, p.y, 0, x, p.y, glowR)
        if (p.gold) {
          g.addColorStop(0,   'rgba(255,220,60,0.38)')
          g.addColorStop(0.5, 'rgba(240,165,0,0.12)')
          g.addColorStop(1,   'rgba(240,165,0,0)')
        } else {
          g.addColorStop(0,   'rgba(180,215,255,0.22)')
          g.addColorStop(0.5, 'rgba(100,160,230,0.07)')
          g.addColorStop(1,   'rgba(100,160,230,0)')
        }
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, p.y, glowR, 0, Math.PI * 2)
        ctx.fill()

        ctx.globalAlpha = p.gold ? 0.92 : 0.72
        ctx.fillStyle   = p.gold ? '#f0a500' : '#7ab0e8'
        ctx.beginPath()
        ctx.arc(x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })
    }

    function update() {
      pts.forEach(p => {
        p.ox += p.vox
        p.y  += p.vy
        if (p.ox < -p.amp - 20) p.ox = W + p.amp + 20
        if (p.ox > W + p.amp + 20) p.ox = -p.amp - 20
        if (p.y < -20) { p.ox = Math.random() * W; p.y = H + 20 }
      })
    }

    function render(anim: boolean) {
      t += 0.016
      ctx.clearRect(0, 0, W, H)
      drawPulse()
      drawLines()
      drawDots()
      if (anim) update()
      if (anim) raf = requestAnimationFrame(() => render(true))
    }

    const ro = new ResizeObserver(() => { resize(); if (reducedMotion) render(false) })
    if (cv.parentElement) ro.observe(cv.parentElement)
    resize()
    reducedMotion ? render(false) : render(true)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
