'use client'
import { useEffect, useRef } from 'react'

// Contact Hero — Connection & Openness
// Flowing sine wave lines undulate horizontally like open, welcoming arms.
// Warm terracotta and gold on deep navy — calm, inviting, human.

export default function ContactHeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvMaybe = ref.current
    if (!cvMaybe) return
    const cv: HTMLCanvasElement = cvMaybe
    const ctx = cv.getContext('2d')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0, H = 0, t = 0, raf = 0

    interface Wave {
      baseY:  number   // vertical position (fraction of H)
      amp:    number   // base amplitude
      freq:   number   // spatial frequency
      speed:  number   // scroll speed
      phase:  number   // initial phase offset
      breathFreq: number   // breathing cycle freq
      color:  string
      width:  number
    }

    const WAVES: Wave[] = [
      { baseY:0.25, amp:28, freq:0.0055, speed:0.28, phase:0,      breathFreq:0.38, color:'rgba(193,113,60,',  width:1.2 },
      { baseY:0.38, amp:22, freq:0.0068, speed:0.21, phase:1.1,    breathFreq:0.45, color:'rgba(240,165,0,',   width:1.0 },
      { baseY:0.50, amp:35, freq:0.0042, speed:0.35, phase:2.4,    breathFreq:0.32, color:'rgba(193,113,60,',  width:0.8 },
      { baseY:0.62, amp:18, freq:0.0078, speed:0.18, phase:0.7,    breathFreq:0.52, color:'rgba(251,191,36,',  width:1.0 },
      { baseY:0.74, amp:25, freq:0.0060, speed:0.25, phase:3.2,    breathFreq:0.41, color:'rgba(240,165,0,',   width:1.2 },
      { baseY:0.86, amp:20, freq:0.0050, speed:0.30, phase:1.8,    breathFreq:0.36, color:'rgba(193,113,60,',  width:0.7 },
    ]

    function resize() {
      const p = cv.parentElement; if (!p) return
      cv.width = p.clientWidth; cv.height = p.clientHeight
      W = cv.width; H = cv.height
    }

    function drawWave(w: Wave) {
      const breath = 0.7 + 0.3 * Math.sin(t * w.breathFreq)
      const amp    = w.amp * breath
      const alpha  = 0.10 + 0.05 * breath

      ctx.beginPath()
      for (let x = 0; x <= W; x += 4) {
        const y = H * w.baseY + amp * Math.sin(w.freq * (x + t * w.speed * 60) + w.phase)
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.strokeStyle = `${w.color}${alpha})`
      ctx.lineWidth   = w.width
      ctx.stroke()
    }

    function render(anim: boolean) {
      t += 0.016
      ctx.clearRect(0, 0, W, H)
      WAVES.forEach(w => drawWave(w))
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
