'use client'
import { useState } from 'react'
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
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/">
          <Image src="/images/ads-logo.webp" alt="Ascend Development Solutions" width={160} height={40} className="h-10 w-auto object-contain" />
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[#474747] hover:text-[#3A3C51] text-sm font-medium transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
          <a href="/contact" className="bg-[#3A3C51] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#A9D6B6] hover:text-[#3A3C51] transition-all">
            Contact Us
          </a>
        </nav>
        <button className="lg:hidden text-[#3A3C51]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block py-2 text-[#474747] hover:text-[#3A3C51] text-sm font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/contact" className="block mt-3 bg-[#3A3C51] text-white text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-[#A9D6B6] hover:text-[#3A3C51] transition-all">
            Contact Us
          </a>
        </div>
      )}
    </header>
  )
}
