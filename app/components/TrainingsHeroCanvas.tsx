'use client'
import { useEffect, useRef } from 'react'

// Trainings & Seminars Hero — Energy & Empowerment
// Starburst pulses radiate from multiple focal points in staggered rhythm —
// like ideas sparking across a room. Warm yellow-orange on rich dark background.

interface Burst { r: number; maxR: number; opacity: number }
interface Focal { x: number; y: number; color: string; corePhase: number; bursts: Burst[]; nextBurst: number }

export default function TrainingsHeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, t = 0, raf = 0
    let focals: Focal[] = []

    const COLORS = ['rgba(251,191,36,', 'rgba(249,115,22,', 'rgba(245,158,11,', 'rgba(252,211,77,']

    function buildFocals() {
      focals = [
        pos(0.18, 0.30, 0, 0.0),
        pos(0.50, 0.20, 1, 0.9),
        pos(0.82, 0.35, 2, 1.7),
        pos(0.28, 0.70, 3, 0.4),
        pos(0.70, 0.65, 0, 2.1),
        pos(0.52, 0.50, 1, 3.0),
      ]
    }

    function pos(fx: number, fy: number, ci: number, phase: number): Focal {
      return {
        x: fx * W,
        y: fy * H,
        color: COLORS[ci],
        corePhase: phase,
        bursts: [],
        nextBurst: phase * 0.8,
      }
    }

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width = p.clientWidth; cv.height = p.clientHeight
      W = cv.width; H = cv.height
      buildFocals()
    }

    function spawnBurst(f: Focal) {
      f.bursts.push({ r: 0, maxR: 55 + Math.random() * 80, opacity: 0.42 })
    }

    function drawCore(f: Focal) {
      const pulse = 0.5 + 0.5 * Math.sin(t * 1.8 + f.corePhase)
      const cR    = 3 + 2 * pulse
      const glowR = cR * 6

      const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, glowR)
      g.addColorStop(0,   `${f.color}${0.20 * pulse})`)
      g.addColorStop(0.4, `${f.color}${0.07 * pulse})`)
      g.addColorStop(1,   `${f.color}0)`)
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(f.x, f.y, glowR, 0, Math.PI * 2)
      ctx.fill()

      ctx.globalAlpha = 0.45 + 0.35 * pulse
      ctx.fillStyle   = f.color.replace('rgba', 'rgb').replace(',', '').slice(0, -1) + ')'
      ctx.beginPath()
      ctx.arc(f.x, f.y, cR, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1
    }

    function drawBursts(f: Focal) {
      f.bursts.forEach((b, i) => {
        ctx.beginPath()
        ctx.arc(f.x, f.y, b.r, 0, Math.PI * 2)
        ctx.strokeStyle = `${f.color}${b.opacity})`
        ctx.lineWidth   = 0.8
        ctx.stroke()

        b.r       += 0.7
        b.opacity -= b.opacity * 0.022

        if (b.opacity < 0.005 || b.r > b.maxR) f.bursts.splice(i, 1)
      })
    }

    function render(anim: boolean) {
      t += 0.016
      ctx.clearRect(0, 0, W, H)

      focals.forEach(f => {
        if (anim && t > f.nextBurst) {
          spawnBurst(f)
          f.nextBurst = t + 0.6 + Math.random() * 1.2
        }
        drawBursts(f)
        drawCore(f)
      })

      if (anim) raf = requestAnimationFrame(() => render(true))
    }

    function renderStatic() {
      t = 1
      ctx.clearRect(0, 0, W, H)
      focals.forEach(f => {
        f.bursts = [{ r: 30, maxR: 80, opacity: 0.18 }, { r: 55, maxR: 80, opacity: 0.10 }]
        drawBursts(f); drawCore(f)
      })
    }

    const ro = new ResizeObserver(() => { resize(); reducedMotion ? renderStatic() : render(true) })
    if (cv.parentElement) ro.observe(cv.parentElement)
    resize()
    reducedMotion ? renderStatic() : render(true)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
