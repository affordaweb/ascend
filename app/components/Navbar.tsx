'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Aivan Alvarez', href: '/aivan-alvarez' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'Trainings & Seminars', href: '/trainings-and-seminars' },
  { label: 'Reporting', href: '/reporting' },
  { label: 'Contact', href: '/contact' },
  { label: 'IMG Perks', href: '/exclusive-img-perks' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f2744] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/">
          <Image
            src="/images/ads-logo.webp"
            alt="Ascend Development Solutions"
            width={160}
            height={40}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary text-sm px-5 py-2 ml-2">
            Get in Touch
          </a>
        </nav>
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0f2744] border-t border-white/10 px-4 pb-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-white/70 hover:text-white text-sm font-medium border-b border-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/contact" className="block mt-4 btn-primary text-sm text-center">
            Get in Touch
          </a>
        </div>
      )}
    </header>
  )
}
