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
    <footer className="bg-[#123d2d] pt-0 pb-8">
      <div className="h-1 w-full bg-[#b78b58]" />
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Image
              src="/images/ads-logo.webp"
              alt="Ascend Development Solutions"
              width={140}
              height={35}
              className="mb-4 h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Ascend Development Solutions (ADS) is a growth-focused consultancy dedicated to empowering organizations through strategic guidance, capacity building, and values-driven development.
            </p>
            <a
              href="https://www.facebook.com/ascenddevelopmentsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-social inline-flex items-center gap-2 border border-white/25 px-4 py-2 text-sm font-medium text-white/70 transition-all hover:border-[#b78b58] hover:bg-[#b78b58] hover:text-white"
            >
              <Facebook size={14} /> Facebook
            </a>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/55 transition-colors hover:text-[#e5d5b8]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Useful Links</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/55 transition-colors hover:text-[#e5d5b8]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-3.5 text-sm text-white/55">
              <div className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 shrink-0 text-[#e5d5b8]" />
                <a href="mailto:info@ascenddevelopmentsolutions.org" className="hover:text-white transition-colors">
                  info@ascenddevelopmentsolutions.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-[#e5d5b8]" />
                <span>+63.912.345.6789</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="mt-0.5 shrink-0 text-[#e5d5b8]" />
                <span>Monday &ndash; Friday<br />9:00 AM &ndash; 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <p>&copy; 2026 Ascend Development Solutions (ADS). All Rights Reserved.</p>
          <span>
            Web design by:{' '}
            <a
              href="https://ascend-ochre.vercel.app/affordaweb"
              className="hover:text-white transition-colors"
            >
              AffordaWeb Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
