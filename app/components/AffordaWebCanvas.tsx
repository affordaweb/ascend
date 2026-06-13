'use client'
import { useEffect, useRef } from 'react'

// AffordaWeb Hero — floating node network with gold accent pulses
// Nodes drift slowly; nearby nodes connect with lines; gold nodes pulse periodically.

export default function AffordaWebCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, raf = 0

    const NODE_COUNT  = 55
    const CONNECT_DIST = 160   // max distance to draw a line
    const GOLD_COUNT   = 6     // number of gold accent nodes

    interface Node {
      x: number; y: number
      vx: number; vy: number
      r: number
      gold: boolean
      pulse: number   // 0–1 brightness of gold pulse
      pulseDir: number
    }

    let nodes: Node[] = []

    function buildNodes() {
      nodes = []
      for (let i = 0; i < NODE_COUNT; i++) {
        const gold = i < GOLD_COUNT
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: gold ? 3.5 : 2,
          gold,
          pulse: Math.random(),
          pulseDir: Math.random() > 0.5 ? 1 : -1,
        })
      }
    }

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width  = p.clientWidth
      cv.height = p.clientHeight
      W = cv.width; H = cv.height
      buildNodes()
    }

    function render(anim: boolean) {
      ctx.clearRect(0, 0, W, H)

      if (anim) {
        nodes.forEach(n => {
          n.x += n.vx; n.y += n.vy
          // Wrap around edges
          if (n.x < -20) n.x = W + 20
          if (n.x > W + 20) n.x = -20
          if (n.y < -20) n.y = H + 20
          if (n.y > H + 20) n.y = -20
          // Pulse gold nodes
          if (n.gold) {
            n.pulse += n.pulseDir * 0.012
            if (n.pulse > 1) { n.pulse = 1; n.pulseDir = -1 }
            if (n.pulse < 0.1) { n.pulse = 0.1; n.pulseDir = 1 }
          }
        })
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > CONNECT_DIST) continue

          const alpha = (1 - dist / CONNECT_DIST) * 0.18
          const isGoldLine = a.gold || b.gold
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = isGoldLine
            ? `rgba(245,158,11,${alpha * 1.6})`
            : `rgba(255,255,255,${alpha})`
          ctx.lineWidth = isGoldLine ? 0.8 : 0.5
          ctx.stroke()
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        if (n.gold) {
          // Outer glow
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 14)
          glow.addColorStop(0,   `rgba(251,191,36,${0.28 * n.pulse})`)
          glow.addColorStop(1,   'rgba(251,191,36,0)')
          ctx.beginPath()
          ctx.arc(n.x, n.y, 14, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
          // Core dot
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(251,191,36,${0.7 + 0.3 * n.pulse})`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(255,255,255,0.25)'
          ctx.fill()
        }
      })

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
