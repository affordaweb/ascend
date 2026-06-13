'use client'
import { useEffect, useRef } from 'react'

// Aivan Alvarez Hero — Personal Story & Leadership
// Particles drift inward from edges toward centre, converging like a life of
// gathered experiences. Warm sepia-gold tones on deep charcoal.

interface P {
  x: number; y: number
  tx: number; ty: number   // target (centre with scatter)
  speed: number
  r: number
  opacity: number
  color: string
  fading: boolean
}

const PALETTE = ['#c9a55a','#d4b483','#b8957a','#e0c87a','#a07840','#d9c08a']

export default function FounderCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, t = 0, raf = 0
    let pts: P[] = []

    function edgePoint() {
      const side = Math.floor(Math.random() * 4)
      if (side === 0) return { x: Math.random() * W, y: -10 }
      if (side === 1) return { x: W + 10, y: Math.random() * H }
      if (side === 2) return { x: Math.random() * W, y: H + 10 }
      return { x: -10, y: Math.random() * H }
    }

    function make(): P {
      const ep = edgePoint()
      // target: centre ± small scatter
      const tx = W / 2 + (Math.random() - 0.5) * 60
      const ty = H / 2 + (Math.random() - 0.5) * 60
      return {
        x: ep.x, y: ep.y, tx, ty,
        speed: 0.18 + Math.random() * 0.28,
        r: 1.2 + Math.random() * 2.2,
        opacity: 0,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        fading: false,
      }
    }

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width = p.clientWidth; cv.height = p.clientHeight
      W = cv.width; H = cv.height
      const n = Math.min(90, Math.max(50, Math.floor((W * H) / 10000)))
      pts = Array.from({ length: n }, () => { const p = make(); p.opacity = Math.random() * 0.12; return p })
    }

    function drawVignette() {
      const pulse = 0.62 + 0.15 * Math.sin(t * 0.5)
      const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.15,
        W / 2, H / 2, Math.max(W, H) * 0.75)
      g.addColorStop(0, 'rgba(28,28,36,0)')
      g.addColorStop(1, `rgba(28,28,36,${pulse})`)
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)
    }

    function drawParticles() {
      pts.forEach(p => {
        // glow
        const glowR = p.r * 5
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR)
        g.addColorStop(0,   hexA(p.color, p.opacity * 0.5))
        g.addColorStop(0.5, hexA(p.color, p.opacity * 0.15))
        g.addColorStop(1,   hexA(p.color, 0))
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2)
        ctx.fill()

        // core
        ctx.globalAlpha = p.opacity
        ctx.fillStyle   = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })
    }

    function hexA(hex: string, a: number) {
      const r = parseInt(hex.slice(1,3),16)
      const g = parseInt(hex.slice(3,5),16)
      const b = parseInt(hex.slice(5,7),16)
      return `rgba(${r},${g},${b},${a})`
    }

    function update() {
      pts.forEach((p, i) => {
        if (p.fading) {
          p.opacity -= 0.008
          if (p.opacity <= 0) pts[i] = make()
          return
        }
        const dx = p.tx - p.x, dy = p.ty - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 25) { p.fading = true; return }
        const speed = p.speed * (1 + (1 - dist / Math.max(W, H)) * 1.5)
        p.x += (dx / dist) * speed
        p.y += (dy / dist) * speed
        p.opacity = Math.min(0.13, p.opacity + 0.004)
      })
    }

    function render(anim: boolean) {
      t += 0.016
      ctx.clearRect(0, 0, W, H)
      // base charcoal
      ctx.fillStyle = '#1c1c24'
      ctx.fillRect(0, 0, W, H)
      drawParticles()
      drawVignette()
      if (anim) update()
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
