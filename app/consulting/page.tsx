import type { Metadata } from 'next'
import Image from 'next/image'
import { Search, Map, RefreshCw, Users, BarChart3, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConsultingHeroCanvas from '../components/ConsultingHeroCanvas'

export const metadata: Metadata = {
  title: 'Strategic Consulting — Ascend Development Solutions',
  description:
    'ADS provides strategic consulting for purposeful growth — organizational assessment, strategy development, leadership alignment, and sustainability reporting.',
}

const approaches = [
  {
    icon: Search,
    title: 'Organizational Assessment',
    body: "We begin every engagement with a thorough assessment of your organization's current state — examining structures, processes, culture, and performance to identify both strengths and opportunities for growth.",
  },
  {
    icon: Map,
    title: 'Strategy Development',
    body: "Using data-driven insights combined with collaborative dialogue, we co-create strategies tailored to your goals, values, and operational realities — ensuring ownership and commitment at every level.",
  },
  {
    icon: RefreshCw,
    title: 'Process Improvement & Change Management',
    body: 'We support organizations in streamlining workflows, improving efficiency, and navigating transitions — helping teams adapt to change with confidence, clarity, and a shared sense of purpose.',
  },
  {
    icon: Users,
    title: 'Leadership & Organizational Alignment',
    body: 'Strong organizations are led by aligned teams. We work with leadership groups to build cohesion, sharpen decision-making, and cultivate a culture where accountability and collaboration thrive.',
  },
  {
    icon: BarChart3,
    title: 'Sustainability & Impact Reporting',
    body: 'We help organizations measure, communicate, and improve their social and environmental performance — translating complex data into meaningful narratives that demonstrate real-world impact.',
  },
]

export default function ConsultingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="min-h-[55vh] bg-[#111118] flex items-center py-24 px-4 pt-32 relative overflow-hidden">
          <ConsultingHeroCanvas />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-4">What We Offer</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-bold leading-tight mb-4">
              Strategic Consulting
            </h1>
            <p className="font-[family-name:var(--font-fraunces)] text-xl md:text-2xl text-[#fbbf24] italic mb-4">
              For Purposeful Growth
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We partner with organizations to create clarity, alignment, and direction through
              integrity-driven strategic advisory and consultancy services.
            </p>
          </div>
        </section>

        {/* Building Stronger Organizations */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/illus-desk.svg"
                alt="Strategic Consulting"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-3">Our Approach</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                Building Stronger Organizations from the Inside Out
              </h2>
              <p className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#f59e0b] mb-6">
                &ldquo;Strategy is most powerful when it starts from the inside — with people,
                purpose, and values.&rdquo;
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                At ADS, our consulting practice is grounded in the belief that lasting
                organizational transformation comes from within. We work closely with leadership
                teams and stakeholders to understand your unique context, challenges, and
                aspirations — then design strategic frameworks that are both ambitious and
                achievable.
              </p>
              <ul className="space-y-2 text-[#1a1a2e]/70 text-sm">
                {[
                  'Organizational assessment and transformation',
                  'Strategic planning and execution',
                  'Human capital and capability development',
                  'Performance measurement and reporting',
                  'Leadership and team alignment initiatives',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#f59e0b] mt-1">&#x25CF;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Consulting Approach — dark grid like CWA programs */}
        <section className="bg-[#0f2744] py-20 sm:py-28 px-4 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="section-label mb-3">How We Work</p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#f59e0b]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <div className="h-px w-12 bg-[#f59e0b]/50" />
              </div>
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consulting Approach
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                A disciplined, people-centered methodology that drives lasting results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approaches.map((a) => {
                const Icon = a.icon
                return (
                  <div
                    key={a.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#f59e0b]/40 transition-all duration-300 flex flex-col"
                  >
                    <div className="icon-hover w-12 h-12 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-5">
                      <Icon className="text-[#f59e0b]" size={22} />
                    </div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-white mb-3">
                      {a.title}
                    </h3>
                    <p className="text-white/55 leading-relaxed text-sm flex-1">{a.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-[#0f2744] py-20 sm:py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/cta-wave-2.png"
              alt=""
              width={900}
              height={450}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[130%] w-auto object-contain select-none"
              style={{ mixBlendMode: 'screen', opacity: 0.13 }}
            />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, #0f2744 38%, transparent 75%)' }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="section-label mb-3">Start Your Journey</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Ascend Together
            </h2>
            <blockquote className="font-[family-name:var(--font-fraunces)] text-xl italic text-[#f59e0b] mb-8 max-w-2xl mx-auto">
              &ldquo;Every great organization begins with a clear vision and the courage to pursue it.&rdquo;
            </blockquote>
            <p className="text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you&apos;re at the start of your transformation journey or looking to
              accelerate progress, ADS is here to partner with you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </a>
              <a href="/trainings-and-seminars" className="btn-ghost">View Trainings</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
