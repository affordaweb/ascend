import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, Clock, Facebook } from 'lucide-react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — Ascend Development Solutions',
  description: 'Get in touch with Ascend Development Solutions. We\'re ready to partner with you on strategic consulting, training, and organizational reporting.',
}

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[40vh] bg-gradient-to-br from-[#3A3C51] to-[#292733] flex items-center py-24 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-4">Reach Out</p>
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-[family-name:var(--font-playfair)] italic">
              Let&apos;s Build Meaningful Change, Together
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-6">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-[#474747] leading-relaxed mb-8">
                Whether you&apos;re exploring our services, seeking a partnership, or simply want to learn more about how ADS can support your organization, we&apos;re here to listen and respond.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A9D6B6]/20 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#3A3C51]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3A3C51] mb-1">Email</p>
                    <a href="mailto:info@ascenddevelopmentsolutions.org" className="text-[#474747] hover:text-[#3A3C51] transition-colors text-sm">
                      info@ascenddevelopmentsolutions.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A9D6B6]/20 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#3A3C51]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3A3C51] mb-1">Phone</p>
                    <a href="tel:+639123456789" className="text-[#474747] hover:text-[#3A3C51] transition-colors text-sm">
                      +63.912.345.6789
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A9D6B6]/20 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[#3A3C51]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3A3C51] mb-1">Business Hours</p>
                    <p className="text-[#474747] text-sm">Monday &ndash; Friday<br />9:00 AM &ndash; 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A9D6B6]/20 flex items-center justify-center shrink-0">
                    <Facebook size={16} className="text-[#3A3C51]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3A3C51] mb-1">Facebook</p>
                    <a href="https://www.facebook.com/100080045962662/?locale=tl_PH" target="_blank" rel="noopener noreferrer" className="text-[#474747] hover:text-[#3A3C51] transition-colors text-sm">
                      Ascend Development Solutions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F8F8F8] rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Image Banner */}
        <section className="relative h-[350px] overflow-hidden">
          <Image src="/images/f7238718fa7f40.png" alt="Empowering Progress" width={1200} height={500} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3A3C51]/70 flex items-center justify-center">
            <p className="text-white text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] text-center px-4 max-w-2xl">
              Empowering Progress Through Connection
            </p>
          </div>
        </section>

        {/* Partner With Us */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Partner With Us</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-6">
              Together, We Can Create Sustainable Impact
            </h2>
            <p className="text-[#474747] leading-relaxed mb-10 text-lg max-w-2xl mx-auto">
              ADS is committed to building long-term partnerships rooted in trust, transparency, and shared purpose. Let&apos;s start a conversation about how we can support your organization&apos;s journey toward meaningful growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-[#474747]">
              <a href="mailto:info@ascenddevelopmentsolutions.org" className="flex items-center gap-2 hover:text-[#3A3C51] transition-colors">
                <Mail size={16} className="text-[#A9D6B6]" />
                info@ascenddevelopmentsolutions.org
              </a>
              <a href="tel:+639123456789" className="flex items-center gap-2 hover:text-[#3A3C51] transition-colors">
                <Phone size={16} className="text-[#A9D6B6]" />
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
