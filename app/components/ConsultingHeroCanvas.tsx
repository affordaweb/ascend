'use client'
import { useEffect, useRef } from 'react'

// Consulting Hero — Direction & Clarity
// A perspective grid of faint lines converging toward a single vanishing point
// at the canvas centre. The viewer moves forward continuously — like a strategic
// roadmap always coming into focus. Charcoal with fine gold grid lines.

export default function ConsultingHeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, t = 0, raf = 0

    // Number of lines radiating from vanishing point
    const RADIAL  = 18
    // Number of depth rings (ellipses) — we animate them scrolling toward viewer
    const RINGS   = 12
    const RING_SPD = 0.012   // ring expansion speed (fraction of screen per second)

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width = p.clientWidth; cv.height = p.clientHeight
      W = cv.width; H = cv.height
    }

    function drawGrid() {
      const vx = W / 2      // vanishing point x
      const vy = H * 0.48   // vanishing point y (slightly above centre)

      ctx.save()

      // --- Radial spokes ---
      for (let i = 0; i < RADIAL; i++) {
        const angle = (i / RADIAL) * Math.PI * 2
        // Each spoke goes from vanishing point to the canvas edge
        const cos = Math.cos(angle), sin = Math.sin(angle)
        const tMax = Math.max(W, H) * 1.5
        const ex   = vx + cos * tMax
        const ey   = vy + sin * tMax

        // Fade in from vanishing point
        const grad = ctx.createLinearGradient(vx, vy, ex, ey)
        grad.addColorStop(0,   'rgba(240,165,0,0)')
        grad.addColorStop(0.15,'rgba(240,165,0,0.07)')
        grad.addColorStop(0.6, 'rgba(240,165,0,0.10)')
        grad.addColorStop(1,   'rgba(240,165,0,0.03)')

        ctx.beginPath()
        ctx.moveTo(vx, vy)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = grad
        ctx.lineWidth   = 0.55
        ctx.stroke()
      }

      // --- Depth rings (ellipses scrolling toward viewer) ---
      for (let i = 0; i < RINGS; i++) {
        // Each ring occupies a slot; slots drift outward over time
        const slot   = ((i / RINGS) + (t * RING_SPD)) % 1   // 0 = at vp, 1 = full screen
        const easing = slot * slot                           // ease in (rings accelerate)
        const rx     = easing * W * 0.52
        const ry     = easing * H * 0.48
        if (rx < 1) continue

        const opacity = easing * (1 - easing) * 0.55    // fade in then out
        ctx.beginPath()
        ctx.ellipse(vx, vy, rx, ry, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(240,165,0,${opacity * 0.28})`
        ctx.lineWidth   = 0.7
        ctx.stroke()
      }

      ctx.restore()
    }

    function render(anim: boolean) {
      t += 0.016
      ctx.clearRect(0, 0, W, H)
      drawGrid()
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
