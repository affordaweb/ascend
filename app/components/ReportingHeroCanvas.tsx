'use client'
import { useEffect, useRef } from 'react'

// Reporting Hero — Data & Insight
// Animated bar chart columns and a flowing line graph drawn in real-time,
// looping continuously. Thin strokes in soft blue and green at low opacity.

export default function ReportingHeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, t = 0, raf = 0

    const BAR_COUNT = 14
    const BAR_W     = 18
    const BAR_GAP   = 10

    // Each bar has its own animated height driven by a sine wave
    const bars = Array.from({ length: BAR_COUNT }, (_, i) => ({
      phase: (i / BAR_COUNT) * Math.PI * 2,
      freq:  0.25 + Math.random() * 0.35,
      baseH: 0.25 + Math.random() * 0.35,   // fraction of chart height
      ampH:  0.08 + Math.random() * 0.18,
      blue:  i % 3 !== 1,   // most blue, some green
    }))

    // Line graph: two overlapping paths
    const lines = [
      { phase: 0,    freq: 0.18, amp: 0.14, color: 'rgba(122,176,232,0.18)', width: 1.2 },
      { phase: 1.4,  freq: 0.22, amp: 0.11, color: 'rgba(109,184,158,0.15)', width: 1.0 },
    ]

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width = p.clientWidth; cv.height = p.clientHeight
      W = cv.width; H = cv.height
    }

    function drawGrid() {
      const rows = 5
      const chartTop    = H * 0.20
      const chartBottom = H * 0.82
      const chartH      = chartBottom - chartTop

      for (let i = 0; i <= rows; i++) {
        const y = chartTop + (i / rows) * chartH
        ctx.beginPath()
        ctx.moveTo(W * 0.08, y)
        ctx.lineTo(W * 0.92, y)
        ctx.strokeStyle = 'rgba(122,176,232,0.07)'
        ctx.lineWidth   = 0.6
        ctx.stroke()
      }
    }

    function drawBars() {
      const totalW     = BAR_COUNT * (BAR_W + BAR_GAP) - BAR_GAP
      const startX     = (W - totalW) / 2
      const chartTop   = H * 0.22
      const chartBottom = H * 0.80
      const chartH     = chartBottom - chartTop

      bars.forEach((b, i) => {
        const h    = (b.baseH + b.ampH * Math.sin(t * b.freq + b.phase)) * chartH
        const x    = startX + i * (BAR_W + BAR_GAP)
        const y    = chartBottom - h
        const color = b.blue ? `rgba(122,176,232,0.13)` : `rgba(109,184,158,0.13)`

        ctx.fillStyle = color
        ctx.fillRect(x, y, BAR_W, h)

        // Top cap line
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + BAR_W, y)
        ctx.strokeStyle = b.blue ? 'rgba(122,176,232,0.28)' : 'rgba(109,184,158,0.28)'
        ctx.lineWidth   = 1.2
        ctx.stroke()
      })
    }

    function drawLines() {
      const chartTop    = H * 0.22
      const chartBottom = H * 0.80
      const midY        = (chartTop + chartBottom) / 2

      lines.forEach(l => {
        const pts = 60
        ctx.beginPath()
        for (let i = 0; i <= pts; i++) {
          const x = W * 0.08 + (W * 0.84) * (i / pts)
          const y = midY + (chartBottom - chartTop) * 0.4
              * Math.sin(l.freq * i + t * 0.4 + l.phase)
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = l.color
        ctx.lineWidth   = l.width
        ctx.stroke()

        // Dot at latest point
        const lx = W * 0.92
        const ly = midY + (chartBottom - chartTop) * 0.4
            * Math.sin(l.freq * pts + t * 0.4 + l.phase)
        ctx.beginPath()
        ctx.arc(lx, ly, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = l.color.replace(/[\d.]+\)$/, '0.55)')
        ctx.fill()
      })
    }

    function render(anim: boolean) {
      t += 0.016
      ctx.clearRect(0, 0, W, H)
      drawGrid()
      drawBars()
      drawLines()
      if (anim) raf = requestAnimationFrame(() => render(true))
    }

    const ro = new ResizeObserver(() => { resize(); render(false) })
    if (cv.parentElement) ro.observe(cv.parentElement)
    resize()
    reducedMotion ? render(false) : render(true)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
