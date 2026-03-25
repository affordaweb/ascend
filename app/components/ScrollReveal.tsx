'use client'
import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export default function ScrollReveal({ children, className = '', stagger = 100 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const items = Array.from(container.children) as HTMLElement[]
    items.forEach((item) => item.classList.add('reveal-item'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target as HTMLElement)
            setTimeout(() => {
              ;(entry.target as HTMLElement).classList.add('reveal-visible')
            }, idx * stagger)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
