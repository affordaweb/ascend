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
    <footer className="bg-[#0a1e36] pt-0 pb-8">
      <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #f59e0b, #2563eb, #f59e0b)' }} />
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Image
              src="/images/ads-logo.webp"
              alt="Ascend Development Solutions"
              width={140}
              height={35}
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Ascend Development Solutions (ADS) is a growth-focused consultancy dedicated to empowering organizations through strategic guidance, capacity building, and values-driven development.
            </p>
            <a
              href="https://www.facebook.com/100080045962662/?locale=tl_PH"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-social inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white/70 text-sm px-4 py-2 rounded-full hover:bg-[#f59e0b] hover:border-[#f59e0b] hover:text-white transition-all font-medium"
            >
              <Facebook size={14} /> Facebook
            </a>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/55 hover:text-[#f59e0b] text-sm transition-colors">
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
                    className="text-white/55 hover:text-[#f59e0b] text-sm transition-colors"
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
                <Mail size={14} className="text-[#f59e0b] mt-0.5 shrink-0" />
                <a href="mailto:info@ascenddevelopmentsolutions.org" className="hover:text-white transition-colors">
                  info@ascenddevelopmentsolutions.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#f59e0b] shrink-0" />
                <span>+63.912.345.6789</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-[#f59e0b] mt-0.5 shrink-0" />
                <span>Monday &ndash; Friday<br />9:00 AM &ndash; 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <p>&copy; 2026 Ascend Development Solutions (ADS). All Rights Reserved.</p>
          <a
            href="https://www.empowerqueerhub.com/affordaweb"
            className="hover:text-white transition-colors"
          >
            Affordable Web Design Company
          </a>
        </div>
      </div>
    </footer>
  )
}
