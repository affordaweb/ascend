import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Users, Lightbulb, HeartHandshake } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHeroCanvas from '../components/AboutHeroCanvas'

export const metadata: Metadata = {
  title: 'About ADS — Ascend Development Solutions',
  description:
    'Learn about Ascend Development Solutions — our story, our commitment to Filipino values, and how we empower organizations through integrity-driven growth.',
}

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'Every engagement is guided by honesty, transparency, and responsible action. We hold ourselves to the highest ethical standards in all we do.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    body: 'We believe progress is built together. We work alongside our clients, not above them — as partners in every sense of the word.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    body: 'We blend Filipino wisdom with global best practices to craft solutions that are both culturally grounded and forward-looking.',
  },
  {
    icon: HeartHandshake,
    title: 'Empathy',
    body: 'People are at the center of everything we do. We lead with compassion, listen deeply, and design with the human experience in mind.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="min-h-[55vh] bg-[#0a2a35] flex items-center py-24 px-4 pt-32 relative overflow-hidden">
          <AboutHeroCanvas />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-4">Our Story</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-bold leading-tight mb-6">
              About Ascend Development Solutions
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              A professional services firm dedicated to advancing sustainable organizational growth
              and human capital development across the Philippines and Asia-Pacific.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/illus-about.svg"
                alt="Who We Are"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-3">About ADS</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                Who We Are
              </h2>
              <div className="space-y-4 text-[#1a1a2e]/70 leading-relaxed">
                <p>
                  Ascend Development Solutions (ADS) is a professional services firm dedicated to
                  advancing sustainable organizational growth and human capital development.
                </p>
                <p>
                  We believe that true success is not defined solely by performance indicators but
                  by the people and values that drive them.
                </p>
                <p>
                  Every project we undertake is guided by integrity, collaboration, and a deep
                  respect for the human side of progress.
                </p>
                <p>
                  Our work goes beyond metrics — we focus on empowering individuals and teams to
                  grow from within, enabling organizations to rise with purpose, strategy, and
                  shared humanity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#f0f4f8] py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="section-label mb-3">How We Began</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-[#1a1a2e]/70 leading-relaxed">
                <p>
                  ADS was founded on the belief that development is most meaningful when it honors
                  people and values.
                </p>
                <p>
                  Born from years of experience in consulting, training, and strategic development,
                  the firm was built to serve as a trusted partner for organizations striving to
                  achieve genuine transformation.
                </p>
                <p>
                  Our founders envisioned a consultancy that bridges global expertise with Filipino
                  authenticity — where every engagement upholds <em>loob</em> (integrity of the
                  inner self) and <em>kapwa</em> (our shared humanity).
                </p>
                <p>
                  These two values remain at the core of how we lead, teach, and serve. Through
                  this philosophy, ADS continues to help organizations ascend — strengthening
                  leadership, aligning purpose, and cultivating environments where growth is both
                  ethical and enduring.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/illus-strategy.svg"
                alt="Our Story"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Pillars — dark bg grid */}
        <section className="bg-[#0f2744] py-20 sm:py-28 px-4 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="section-label mb-3">What We Stand For</p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#f59e0b]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <div className="h-px w-12 bg-[#f59e0b]/50" />
              </div>
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Pillars
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                The values that guide every partnership, every strategy, and every result we deliver.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#f59e0b]/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-5">
                      <Icon className="text-[#f59e0b]" size={22} />
                    </div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-white/55 leading-relaxed text-sm">{p.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label mb-3">Our Promise</p>
            <div className="accent-line mb-8" />
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Our Commitment
            </h2>
            <blockquote className="font-[family-name:var(--font-fraunces)] text-xl italic text-[#f59e0b] mb-8 border-l-4 border-[#f59e0b] pl-6 text-left max-w-2xl mx-auto">
              &ldquo;Integrity in service, empathy in collaboration, and excellence in execution.&rdquo;
            </blockquote>
            <p className="text-[#1a1a2e]/70 leading-relaxed mb-8 text-lg">
              When you work with ADS, you gain more than a consulting firm — you gain a partner who
              listens, understands, and builds alongside you. We value transparency, accountability,
              and respect in every interaction. Our commitment is to ensure that every strategy we
              create, every report we deliver, and every training we conduct contributes to
              sustainable development.
            </p>
            <p className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#1e3a5f] mb-12">
              &ldquo;Together, we&apos;ll design SUSTAINABLE solutions rooted in integrity,
              collaboration, and shared humanity.&rdquo;
            </p>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f0f4f8] py-20 sm:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label mb-3">Take the First Step</p>
            <div className="accent-line mb-6" />
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Let&apos;s Ascend Together
            </h2>
            <p className="text-[#1a1a2e]/70 leading-relaxed mb-8 text-lg max-w-3xl mx-auto">
              Let ADS be your partner in shaping strategies that elevate both your organization and
              the people who make it thrive. Your journey toward purposeful growth starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/consulting" className="btn-outline">Our Services</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
