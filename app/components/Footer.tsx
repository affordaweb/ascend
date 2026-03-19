import { Mail, Phone, Clock, Facebook } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Strategic Consulting', href: '/consulting' },
  { label: 'Customized Trainings & Seminars', href: '/trainings-and-seminars' },
  { label: 'Organizational Reporting', href: '/reporting' },
  { label: 'Contact Us', href: '/contact' },
]

const usefulLinks = [
  { label: 'Be an IMG Member', href: 'https://1204jf.imgcorp.com/' },
  { label: 'Attend Webinar', href: 'https://1204jf.imgcorp.com/buildingyourfuture/register.html' },
  { label: 'About IMG', href: 'https://img-corp.com/about-us.html' },
  { label: 'Kaiser Health Builder', href: 'https://img.com.ph/quote/UKHB/?agentcode=1204jf' },
  { label: 'Members Login', href: 'https://img-corp.net/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#292733] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Image src="/images/ads-logo.webp" alt="Ascend Development Solutions" width={140} height={35} className="h-10 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-[#7A7A7A] text-sm leading-relaxed mb-4">
              Ascend Development Solutions (ADS) is a growth-focused consultancy dedicated to empowering organizations through strategic guidance, capacity building, and values-driven development.
            </p>
            <a href="https://www.facebook.com/100080045962662/?locale=tl_PH" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full hover:bg-[#A9D6B6] hover:text-[#3A3C51] hover:border-[#A9D6B6] transition-all">
              <Facebook size={14} /> Facebook
            </a>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#D7C4E3] hover:text-white text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[#D7C4E3] hover:text-white text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-[#7A7A7A]">
              <div className="flex items-start gap-3">
                <Mail size={14} className="text-[#A9D6B6] mt-0.5 shrink-0" />
                <a href="mailto:info@ascenddevelopmentsolutions.org" className="hover:text-white transition-colors">info@ascenddevelopmentsolutions.org</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#A9D6B6] shrink-0" />
                <span>+63.912.345.6789</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-[#A9D6B6] mt-0.5 shrink-0" />
                <span>Monday &ndash; Friday<br />9:00 AM &ndash; 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#7A7A7A] text-xs">
          <p>&copy; 2026 Ascend Development Solutions (ADS). All Rights Reserved.</p>
          <a href="https://affordawebsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Affordable Web Design Company
          </a>
        </div>
      </div>
    </footer>
  )
}
