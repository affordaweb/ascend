import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, Clock, Facebook } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ContactHeroCanvas from '../components/ContactHeroCanvas'

export const metadata: Metadata = {
  title: 'Contact Us — Ascend Development Solutions',
  description:
    "Get in touch with Ascend Development Solutions. We're ready to partner with you on strategic consulting, training, and organizational reporting.",
}

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ascenddevelopmentsolutions.org',
    href: 'mailto:info@ascenddevelopmentsolutions.org',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+63.912.345.6789',
    href: 'tel:+639123456789',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday, 9:00 AM – 5:00 PM',
    href: null,
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Ascend Development Solutions',
    href: 'https://www.facebook.com/ascenddevelopmentsolutions',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="min-h-[50vh] bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] flex items-center py-24 px-4 pt-32 relative overflow-hidden">
          <ContactHeroCanvas />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-4">Reach Out</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-bold leading-tight mb-4">
              Contact Us
            </h1>
            <p className="font-[family-name:var(--font-fraunces)] text-xl md:text-2xl text-[#fbbf24] italic">
              Let&apos;s Build Meaningful Change, Together
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div>
              <p className="section-label mb-3">Get In Touch</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-10">
                Whether you&apos;re exploring our services, seeking a partnership, or simply want
                to learn more about how ADS can support your organization, we&apos;re here to
                listen and respond.
              </p>
              <div className="space-y-6">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#f59e0b]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-[#1a1a2e]/70 text-sm leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f0f4f8] rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-[#1e3a5f] mb-2">
                Send Us a Message
              </h3>
              <p className="text-[#1a1a2e]/60 text-sm mb-6">
                We typically respond within one business day.
              </p>
              <ContactForm />
            </div>

          </div>
        </section>

        {/* Partner With Us */}
        <section className="bg-[#0f2744] py-20 sm:py-28 px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/cta-network.png"
              alt=""
              width={900}
              height={450}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[130%] w-auto object-contain select-none"
              style={{ mixBlendMode: 'screen', opacity: 0.13 }}
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0f2744 38%, transparent 75%)' }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="section-label mb-3">Partner With Us</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Together, We Can Create Sustainable Impact
            </h2>
            <p className="text-white/65 leading-relaxed mb-10 text-lg max-w-2xl mx-auto">
              ADS is committed to building long-term partnerships rooted in trust, transparency,
              and shared purpose. Let&apos;s start a conversation about how we can support your
              organization&apos;s journey toward meaningful growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-white/60">
              <a
                href="mailto:info@ascenddevelopmentsolutions.org"
                className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors"
              >
                <Mail size={16} className="text-[#f59e0b]" />
                info@ascenddevelopmentsolutions.org
              </a>
              <a
                href="tel:+639123456789"
                className="flex items-center gap-2 hover:text-[#f59e0b] transition-colors"
              >
                <Phone size={16} className="text-[#f59e0b]" />
                +63.912.345.6789
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
