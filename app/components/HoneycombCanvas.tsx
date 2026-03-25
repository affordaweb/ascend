'use client'
import { useEffect, useRef } from 'react'

// IMG Perks Hero — Community & Shared Benefit
// Honeycomb grid with a ripple of gold illumination spreading cell by cell,
// representing collective membership and belonging.

export default function HoneycombCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, raf = 0

    const HEX_R = 28            // hex circumradius (tip to centre)
    const GAP   = 2             // gap between hexes

    interface Cell { cx: number; cy: number; brightness: number }
    let cells: Cell[] = []

    // Ripple state
    let waveOrigin = { gx: 0, gy: 0 }   // grid coordinates of wave source
    let waveRadius = 0
    let waveSpeed  = 0.06
    let maxWave    = 0
    let nextWave   = 3

    function hexPath(cx: number, cy: number, r: number) {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6
        i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
                : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
      }
      ctx.closePath()
    }

    function buildGrid() {
      cells = []
      const r = HEX_R - GAP / 2
      const colW = r * Math.sqrt(3)
      const rowH = r * 1.5
      const cols = Math.ceil(W / colW) + 2
      const rows = Math.ceil(H / rowH) + 2

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const offset = (row % 2 === 0) ? 0 : colW / 2
          const cx = col * colW + offset
          const cy = row * rowH
          cells.push({ cx, cy, brightness: 0 })
        }
      }

      maxWave = Math.sqrt(W * W + H * H) / (HEX_R * Math.sqrt(3)) * 1.1
    }

    function startWave() {
      waveOrigin = {
        gx: W * (0.2 + Math.random() * 0.6),
        gy: H * (0.2 + Math.random() * 0.6),
      }
      waveRadius = 0
    }

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width = p.clientWidth; cv.height = p.clientHeight
      W = cv.width; H = cv.height
      buildGrid()
      startWave()
    }

    function render(anim: boolean) {
      ctx.clearRect(0, 0, W, H)

      const r = HEX_R - GAP / 2

      // Update brightness per cell
      cells.forEach(cell => {
        const dx = cell.cx - waveOrigin.gx
        const dy = cell.cy - waveOrigin.gy
        const d = Math.sqrt(dx * dx + dy * dy) / (HEX_R * Math.sqrt(3))
        // Ring: cells near the wavefront are lit
        const front = waveRadius
        const spread = 2.5
        if (d > front - spread && d < front + spread) {
          const fade = 1 - Math.abs(d - front) / spread
          cell.brightness = Math.max(cell.brightness, fade * 0.9)
        }
        // Decay
        if (anim) cell.brightness *= 0.975
      })

      // Draw cells
      cells.forEach(cell => {
        hexPath(cell.cx, cell.cy, r)

        if (cell.brightness > 0.01) {
          const b = cell.brightness
          // Glow fill
          const g = ctx.createRadialGradient(cell.cx, cell.cy, 0, cell.cx, cell.cy, r * 1.2)
          g.addColorStop(0,   `rgba(251,191,36,${b * 0.18})`)
          g.addColorStop(0.6, `rgba(240,165,0,${b * 0.09})`)
          g.addColorStop(1,   'rgba(240,165,0,0)')
          ctx.fillStyle = g; ctx.fill()

          // Border
          hexPath(cell.cx, cell.cy, r)
          ctx.strokeStyle = `rgba(251,191,36,${b * 0.45})`
          ctx.lineWidth   = 0.8
          ctx.stroke()
        } else {
          // Idle border
          ctx.strokeStyle = 'rgba(255,255,255,0.04)'
          ctx.lineWidth   = 0.6
          ctx.stroke()
        }
      })

      if (anim) {
        waveRadius += waveSpeed
        if (waveRadius > maxWave + 3) {
          waveRadius = maxWave + 4  // freeze briefly then restart
          nextWave -= 0.016
          if (nextWave <= 0) { startWave(); nextWave = 2.5 + Math.random() * 2 }
        }
        raf = requestAnimationFrame(() => render(true))
      }
    }

    const ro = new ResizeObserver(() => { resize(); if (reducedMotion) render(false) })
    if (cv.parentElement) ro.observe(cv.parentElement)
    resize()
    reducedMotion ? render(false) : render(true)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
