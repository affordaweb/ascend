'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/consulting' },
  { label: 'Trainings', href: '/trainings-and-seminars' },
  { label: 'Reporting', href: '/reporting' },
  { label: "Aivan's Wall", href: '/aivans-wall' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8d7cc]/80 bg-[#fffdf8]/95 backdrop-blur">
      <div className="site-container flex min-h-[5.25rem] items-center justify-between gap-6">
        <Link href="/" aria-label="Ascend Development Solutions home">
          <Image src="/images/ads-logo.webp" alt="Ascend Development Solutions" width={160} height={40} className="h-9 w-auto object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-bold text-[#4e5b53] transition-colors hover:text-[#1f5139]">{link.label}</Link>)}
          <Link href="/contact" className="btn-primary ml-2">Book a Consultation</Link>
        </nav>
        <button type="button" className="grid h-11 w-11 place-items-center border border-[#1f5139] text-[#1f5139] lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && <nav className="border-t border-[#d8d7cc] bg-[#fffdf8] px-4 py-5 lg:hidden" aria-label="Mobile navigation">
        <div className="site-container grid gap-1">
          {[...links, { label: 'Contact', href: '/contact' }, { label: 'IMG Perks', href: '/exclusive-img-perks' }, { label: 'Meet Aivan Alvarez', href: '/aivan-alvarez' }].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-[#d8d7cc]/70 py-3 text-base font-bold text-[#283037]">{link.label}</Link>
          ))}
        </div>
      </nav>}
    </header>
  )
}
