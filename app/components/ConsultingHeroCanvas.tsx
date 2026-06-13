'use client'
import { useEffect, useRef } from 'react'

// Consulting Hero — Direction & Clarity
// Particles flow along curved Bézier paths that converge toward a central
// focal point then branch outward again — like strategy clarifying from
// complexity into direction. Deep charcoal with gold accent streams.

interface PathDef {
  p0x: number; p0y: number   // start (fraction of W/H)
  p1x: number; p1y: number   // control 1
  p2x: number; p2y: number   // control 2
  p3x: number; p3y: number   // end
  gold: boolean
}

interface Particle {
  path: PathDef
  t: number       // 0–1 position along path
  speed: number
  r: number
  opacity: number
}

export default function ConsultingHeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, t = 0, raf = 0
    let paths: PathDef[] = []
    let particles: Particle[] = []

    // Cubic Bézier point at parameter t
    function bezier(p: PathDef, t: number) {
      const mt = 1 - t
      return {
        x: mt*mt*mt*p.p0x + 3*mt*mt*t*p.p1x + 3*mt*t*t*p.p2x + t*t*t*p.p3x,
        y: mt*mt*mt*p.p0y + 3*mt*mt*t*p.p1y + 3*mt*t*t*p.p2y + t*t*t*p.p3y,
      }
    }

    function buildPaths() {
      // All paths converge near centre (0.5, 0.5) then diverge
      // Fractions are multiplied by W/H at draw time
      paths = [
        // Left-side inputs converging right
        { p0x:0.00, p0y:0.15,  p1x:0.20, p1y:0.20,  p2x:0.38, p2y:0.45,  p3x:0.52, p3y:0.50, gold:false },
        { p0x:0.00, p0y:0.40,  p1x:0.18, p1y:0.40,  p2x:0.36, p2y:0.48,  p3x:0.52, p3y:0.50, gold:false },
        { p0x:0.00, p0y:0.65,  p1x:0.20, p1y:0.60,  p2x:0.38, p2y:0.54,  p3x:0.52, p3y:0.50, gold:false },
        { p0x:0.00, p0y:0.88,  p1x:0.22, p1y:0.78,  p2x:0.40, p2y:0.58,  p3x:0.52, p3y:0.50, gold:true  },
        { p0x:0.25, p0y:0.00,  p1x:0.30, p1y:0.20,  p2x:0.42, p2y:0.38,  p3x:0.52, p3y:0.50, gold:false },
        { p0x:0.55, p0y:0.00,  p1x:0.52, p1y:0.18,  p2x:0.51, p2y:0.34,  p3x:0.52, p3y:0.50, gold:true  },
        // Right-side outputs diverging from centre
        { p0x:0.52, p0y:0.50,  p1x:0.62, p1y:0.46,  p2x:0.78, p2y:0.22,  p3x:1.00, p3y:0.12, gold:true  },
        { p0x:0.52, p0y:0.50,  p1x:0.64, p1y:0.48,  p2x:0.80, p2y:0.44,  p3x:1.00, p3y:0.42, gold:false },
        { p0x:0.52, p0y:0.50,  p1x:0.64, p1y:0.54,  p2x:0.80, p2y:0.62,  p3x:1.00, p3y:0.68, gold:false },
        { p0x:0.52, p0y:0.50,  p1x:0.62, p1y:0.58,  p2x:0.76, p2y:0.76,  p3x:1.00, p3y:0.88, gold:true  },
        { p0x:0.52, p0y:0.50,  p1x:0.54, p1y:0.66,  p2x:0.56, p2y:0.80,  p3x:0.60, p3y:1.00, gold:false },
        { p0x:0.52, p0y:0.50,  p1x:0.70, p1y:0.38,  p2x:0.84, p2y:0.18,  p3x:0.85, p3y:0.00, gold:false },
      ]
    }

    function spawnParticle(): Particle {
      const path  = paths[Math.floor(Math.random() * paths.length)]
      return {
        path,
        t:       Math.random(),
        speed:   0.0008 + Math.random() * 0.0012,
        r:       path.gold ? 2.2 + Math.random() * 1.2 : 1.2 + Math.random() * 1.4,
        opacity: 0,
      }
    }

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width  = p.clientWidth
      cv.height = p.clientHeight
      W = cv.width; H = cv.height
      buildPaths()
      const n = Math.min(120, Math.max(60, Math.floor((W * H) / 8000)))
      particles = Array.from({ length: n }, spawnParticle)
    }

    function drawStreamLines() {
      paths.forEach(p => {
        ctx.beginPath()
        const steps = 60
        for (let i = 0; i <= steps; i++) {
          const pos = bezier(p, i / steps)
          const x = pos.x * W, y = pos.y * H
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = p.gold
          ? 'rgba(240,165,0,0.07)'
          : 'rgba(255,255,255,0.04)'
        ctx.lineWidth = p.gold ? 0.8 : 0.5
        ctx.stroke()
      })
    }

    function drawFocalGlow() {
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.9)
      const fx = 0.52 * W, fy = 0.50 * H
      const g = ctx.createRadialGradient(fx, fy, 0, fx, fy, Math.min(W, H) * 0.18)
      g.addColorStop(0,   `rgba(240,165,0,${0.12 + 0.06 * pulse})`)
      g.addColorStop(0.5, `rgba(240,165,0,${0.04 + 0.03 * pulse})`)
      g.addColorStop(1,   'rgba(240,165,0,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W, H)
    }

    function drawParticles() {
      particles.forEach(p => {
        const pos = bezier(p.path, p.t)
        const x = pos.x * W, y = pos.y * H

        // Glow
        const glowR = p.r * 5
        const g = ctx.createRadialGradient(x, y, 0, x, y, glowR)
        if (p.path.gold) {
          g.addColorStop(0,   `rgba(255,220,60,${p.opacity * 0.6})`)
          g.addColorStop(1,   'rgba(240,165,0,0)')
        } else {
          g.addColorStop(0,   `rgba(200,220,255,${p.opacity * 0.45})`)
          g.addColorStop(1,   'rgba(100,160,230,0)')
        }
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, glowR, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.globalAlpha = p.opacity
        ctx.fillStyle   = p.path.gold ? '#f0a500' : '#8bb8e8'
        ctx.beginPath()
        ctx.arc(x, y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })
    }

    function update() {
      particles.forEach((p, i) => {
        p.t += p.speed

        // Fade in near start, fade out near end
        if (p.t < 0.12)      p.opacity = Math.min(0.85, p.opacity + 0.05)
        else if (p.t > 0.85) p.opacity = Math.max(0, p.opacity - 0.04)

        if (p.t >= 1) particles[i] = spawnParticle()
      })
    }

    function render(anim: boolean) {
      t += 0.016
      ctx.clearRect(0, 0, W, H)
      drawStreamLines()
      drawFocalGlow()
      drawParticles()
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
