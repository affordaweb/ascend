'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Aivan Castillo Alvarez', href: '/aivan-alvarez' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'Trainings & Seminars', href: '/trainings-and-seminars' },
  { label: 'Reporting', href: '/reporting' },
  { label: 'Contact', href: '/contact' },
  { label: 'Exclusive IMG Perks', href: '/exclusive-img-perks' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl' : 'bg-white/10 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/">
          <Image src="/images/ads-logo.webp" alt="Ascend Development Solutions" width={160} height={40} className={`h-10 w-auto object-contain transition-all ${scrolled ? '' : 'brightness-0 invert'}`} />
        </a>
        <nav className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors whitespace-nowrap ${scrolled ? 'text-[#1a1a2e]/70 hover:text-[#1e3a5f]' : 'text-white/80 hover:text-white'}`}>
              {l.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary text-sm px-5 py-2">
            Contact Us
          </a>
        </nav>
        <button className={`lg:hidden ${scrolled ? 'text-[#1e3a5f]' : 'text-white'}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block py-2 text-[#1a1a2e] hover:text-[#1e3a5f] text-sm font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/contact" className="block mt-3 btn-primary text-sm text-center">
            Contact Us
          </a>
        </div>
      )}
    </header>
  )
}
