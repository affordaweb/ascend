import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, Linkedin, Globe, Users, ShieldCheck, HeartHandshake } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Aivan Castillo Alvarez — Ascend Development Solutions',
  description:
    'Aivan Castillo Alvarez is a social development specialist advancing inclusive governance, health equity, and community leadership across Asia and the Pacific.',
}

const expertiseCards = [
  {
    icon: Globe,
    title: 'Regional & National Roles',
    items: [
      'Regional program advisory across Asia and the Pacific',
      'Participation in national health governance mechanisms',
      'Representation of key populations in funding and oversight structures',
      'Engagement with government, UN agencies, and civil society networks',
    ],
  },
  {
    icon: Users,
    title: 'How Aivan Designs Impact',
    items: [
      'Community-led program design',
      'Capacity building and training',
      'Monitoring and evaluation frameworks',
      'Rights-based and gender-inclusive approaches',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Institutional Systems & Compliance',
    items: [
      'Sustainability and social performance alignment',
      'Labor standards and ethical employment practices',
      'Internal audits and capacity development',
      'Stakeholder and regulatory engagement',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Leadership & Philosophy',
    body: 'For Aivan Castillo Alvarez, leadership is about creating space for others to contribute meaningfully. Rather than directing from above, he prioritizes listening, collaboration, and shared responsibility.',
  },
]

export default function AivanAlvarezPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="min-h-[55vh] bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] flex items-center py-24 px-4 pt-32 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 85% 15%, rgba(245,158,11,0.08), transparent 50%), radial-gradient(circle at 15% 85%, rgba(37,99,235,0.08), transparent 50%)',
            }}
          />
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-4">Aivan Castillo Alvarez</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold leading-tight mb-6">
              Advancing Inclusive Governance and Community-Led Change
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              A development leader connecting communities with decision-makers across Asia and the
              Pacific
            </p>
          </div>
        </section>

        {/* About Aivan */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:max-w-none">
              <Image
                src="/images/Aivan-Alvarez.png"
                alt="Aivan Castillo Alvarez"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-3">Social Development Specialist</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                Aivan Castillo Alvarez
              </h2>
              <div className="space-y-4 text-[#1a1a2e]/70 leading-relaxed">
                <p>
                  Aivan Castillo Alvarez is a social development specialist whose work centers on
                  inclusive governance, health equity, and community leadership. With over fifteen
                  years of experience across civil society, government mechanisms, and regional
                  platforms, Aivan has built a career focused on ensuring that policies respond to
                  real community needs.
                </p>
                <p>
                  Throughout his journey, Aivan Castillo Alvarez has remained committed to one
                  principle: meaningful change happens when communities are part of the process. By
                  bridging grassroots voices with national and regional institutions, he helps
                  translate lived realities into policies, programs, and systems that create lasting
                  impact.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="mailto:aivan.c.alvarez@gmail.com" className="btn-primary">
                  Get in Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/aivanalvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise — dark grid */}
        <section className="bg-[#0f2744] py-20 sm:py-28 px-4 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="section-label mb-3">Areas of Expertise</p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#f59e0b]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <div className="h-px w-12 bg-[#f59e0b]/50" />
              </div>
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-4">
                Impact Across Sectors
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Fifteen-plus years of practice across civil society, governance, and regional development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertiseCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#f59e0b]/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-5">
                      <Icon className="text-[#f59e0b]" size={22} />
                    </div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-white mb-4">
                      {card.title}
                    </h3>
                    {card.items ? (
                      <ul className="space-y-2 text-white/55 text-sm">
                        {card.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[#f59e0b] mt-1">&#x25CF;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/55 leading-relaxed text-sm">{card.body}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Full-width Quote Banner */}
        <section className="relative h-[320px] overflow-hidden">
          <Image
            src="/images/illus-sustainability.svg"
            alt="Sustainability"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f2744]/75 flex items-center justify-center">
            <p className="font-[family-name:var(--font-fraunces)] text-white text-2xl md:text-3xl font-bold text-center px-4 max-w-2xl leading-relaxed">
              Building systems that are fair, inclusive, and accountable
            </p>
          </div>
        </section>

        {/* Message from Founder */}
        <section className="bg-[#f0f4f8] py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Message from the Founder</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                Vision for Purpose-Driven Growth
              </h2>
              <p className="text-[#f59e0b] italic text-lg mb-6">
                A continuing commitment to inclusion
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed">
                The journey of Aivan Castillo Alvarez began with listening to communities
                navigating systems that often overlooked their realities. Over time, that listening
                became action through policy engagement, organizational leadership, and regional
                collaboration. Today, Aivan remains committed to strengthening systems that are
                fair, inclusive, and accountable — knowing that progress is built through shared
                effort and sustained dialogue.
              </p>
            </div>
            <div className="bg-[#0f2744] rounded-2xl p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
              />
              <p className="section-label mb-3">Connect with Aivan</p>
              <div className="space-y-4 mt-6">
                <a
                  href="mailto:aivan.c.alvarez@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#f59e0b] transition-colors text-sm"
                >
                  <Mail size={16} className="text-[#f59e0b]" />
                  aivan.c.alvarez@gmail.com
                </a>
                <a
                  href="tel:09177050413"
                  className="flex items-center gap-3 text-white/60 hover:text-[#f59e0b] transition-colors text-sm"
                >
                  <Phone size={16} className="text-[#f59e0b]" />
                  0917 705 0413
                </a>
                <a
                  href="https://www.linkedin.com/in/aivanalvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#f59e0b] transition-colors text-sm"
                >
                  <Linkedin size={16} className="text-[#f59e0b]" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label mb-3">An Open Invitation</p>
            <div className="accent-line mb-6" />
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Let&apos;s Build Impact Together
            </h2>
            <p className="text-[#1a1a2e]/70 leading-relaxed mb-8 text-lg max-w-3xl mx-auto">
              Aivan Castillo Alvarez welcomes collaboration with individuals, organizations, and
              partners who believe in meaningful growth, inclusive leadership, and
              community-centered solutions. This is an open invitation to connect, collaborate,
              and move forward with purpose.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/about" className="btn-outline">About ADS</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
