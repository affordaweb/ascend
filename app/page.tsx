import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Lightbulb,
  GraduationCap,
  BarChart3,
  ArrowRight,
  Eye,
  Target,
  Leaf,
  Globe,
  Users,
  HeartHandshake,
  Facebook,
  ExternalLink,
  CalendarDays,
  Megaphone,
} from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQAccordion from './components/FAQAccordion'
import ScrollReveal from './components/ScrollReveal'
import HoneycombCanvas from './components/HoneycombCanvas'

export const metadata: Metadata = {
  title: 'Ascend Development Solutions — Building Better Futures Together',
  description:
    'ADS empowers organizations through ESG and SDG-aligned trainings, seminars, reporting, and consultancy. Building Better Futures Together.',
}

const services = [
  {
    title: 'Strategic Consulting',
    desc: 'Align your vision and strategy with actionable, integrity-centered plans that drive measurable results across your organization.',
    href: '/consulting',
    icon: Lightbulb,
  },
  {
    title: 'Customized Trainings & Seminars',
    desc: 'Empower your teams with practical, engaging, and value-driven learning experiences tailored to your unique context.',
    href: '/trainings-and-seminars',
    icon: GraduationCap,
  },
  {
    title: 'Organizational Reporting',
    desc: 'Deliver clear, data-backed insights and ESG/SDG-aligned reports that inform smarter decisions and long-term growth.',
    href: '/reporting',
    icon: BarChart3,
  },
  {
    title: 'ESG Alignment',
    desc: 'Embed Environmental, Social, and Governance principles into your organization\'s core strategy and day-to-day operations.',
    href: '/consulting',
    icon: Leaf,
  },
  {
    title: 'SDG Integration',
    desc: 'Connect your mission and programs to the United Nations Sustainable Development Goals for global credibility and accountability.',
    href: '/consulting',
    icon: Globe,
  },
  {
    title: 'Capacity Building',
    desc: 'Strengthen your team\'s capabilities through coaching, mentoring, and structured organizational development programs.',
    href: '/trainings-and-seminars',
    icon: Users,
  },
]

const stats = [
  { n: '15+', l: 'Years of Practice' },
  { n: '3', l: 'Core Service Areas' },
  { n: 'ESG & SDG', l: 'Aligned Framework' },
  { n: '100%', l: 'Values-Driven' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero — full viewport, centered */}
        <section className="relative w-full min-h-screen flex items-center justify-center pt-[100px]" style={{ background: '#071829' }}>
          <HoneycombCanvas />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(7,24,41,0.30) 0%, rgba(7,24,41,0.40) 50%, rgba(7,24,41,0.65) 100%)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              <span className="text-white/80 text-sm font-medium uppercase tracking-widest">
                ESG &amp; SDG-Aligned Solutions
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              Building Better{' '}
              <span className="gradient-text-light">Futures Together</span>
            </h1>
            <p className="text-xl text-white/80 mb-3 leading-relaxed">
              Ascend. In Our Shared Humanity, There is a Solution
            </p>
            <p className="text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
              Empowering individuals, groups, and institutions through ESG and
              SDG-aligned trainings, seminars, reporting, and consultancy.
              Sama-samang pag-angat para sa makatao, makatarungan, at
              makakalikasang kinabukasan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/consulting" className="btn-primary">Our Services</a>
              <a href="/contact" className="btn-ghost">Contact Us</a>
            </div>
          </div>
        </section>

        {/* Stats — floating card like CWA */}
        <section className="bg-white relative z-10 pt-[75px] pb-[48px]">
          <div className="max-w-5xl mx-auto px-4 -mt-[100px]">
            <div className="bg-white rounded-2xl shadow-2xl py-8 px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {stats.map((s) => (
                <div key={s.l} className="text-center px-6 py-2">
                  <div className="font-[family-name:var(--font-fraunces)] gradient-text text-3xl md:text-4xl font-bold">
                    {s.n}
                  </div>
                  <div className="text-[#6b7280] text-xs md:text-sm mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Mission — white bg, 2-col text + image like CWA */}
        <section className="bg-white pt-10 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-3">Who We Are</p>
                <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
                <h2 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                  About Ascend Development Solutions
                </h2>
                <p className="text-[#f59e0b] font-semibold italic text-lg leading-relaxed mb-4">
                  &ldquo;Building transformation through integrity, empathy, and collaboration.&rdquo;
                </p>
                <p className="text-[#1a1a2e]/70 leading-relaxed mb-8">
                  ADS is a professional services firm dedicated to fostering sustainable organizational
                  growth and human capital development. We partner with clients across sectors to design
                  strategic, people-centered solutions that create lasting impact. Our approach blends
                  data-driven insights with human understanding — helping you strengthen leadership,
                  enhance performance, and nurture a culture of accountability and purpose.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/about" className="btn-primary">Learn More About Us</a>
                  <a href="/aivan-alvarez" className="btn-outline">Meet Our Founder</a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/illus-home-about.png"
                    alt="Meet the ADS Team"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#0f2744] rounded-2xl shadow-xl p-6 hidden md:block">
                  <p className="font-[family-name:var(--font-fraunces)] text-[#f59e0b] font-bold text-2xl">15+</p>
                  <p className="text-white/60 text-sm">Years of Impact</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid — dark bg like CWA programs section */}
        <section className="bg-[#0f2744] py-24 sm:py-32 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }}
          />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <p className="section-label mb-3">What We Do</p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#f59e0b]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <div className="h-px w-12 bg-[#f59e0b]/50" />
              </div>
              <h2 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold text-white mb-4">
                Our Services &amp; Approach
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Tailored solutions that strengthen people, organizations, and communities.
              </p>
            </div>
            <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.title}
                    href={s.href}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#f59e0b]/40 transition-all duration-300 flex flex-col"
                  >
                    <div className="icon-hover w-12 h-12 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-5">
                      <Icon className="text-[#f59e0b]" size={22} />
                    </div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-white mb-3">
                      {s.title}
                    </h3>
                    <p className="text-white/55 leading-relaxed mb-6 flex-1 text-sm">{s.desc}</p>
                    <span className="text-[#f59e0b] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </a>
                )
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* ADS Philosophy — cream/light bg like CWA mission section */}
        <section className="bg-[#f0f4f8] py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl order-last lg:order-first">
                <Image
                  src="/images/illus-philosophy.png"
                    alt="Rooted in Filipino Values"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <p className="section-label mb-3">The ADS Philosophy</p>
                <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
                <h2 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                  Development Rooted in Filipino Core Values
                </h2>
                <h3 className="text-[#f59e0b] text-xl font-semibold mb-6">
                  The Power of <em>Loob</em> and <em>Kapwa</em>
                </h3>
                <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                  At the heart of ADS lies a philosophy shaped by Filipino values.{' '}
                  <strong className="text-[#1e3a5f]">Loob</strong> represents our inner integrity —
                  our dedication to truth, authenticity, and responsible action.{' '}
                  <strong className="text-[#1e3a5f]">Kapwa</strong> embodies shared humanity — the
                  understanding that progress is best achieved together.
                </p>
                <blockquote className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#1e3a5f] border-l-4 border-[#f59e0b] pl-4 mb-8">
                  &ldquo;To know the Filipino is to understand the <em>loob</em> — our shared humanity, our <em>kapwa</em>.&rdquo;
                </blockquote>
                <a href="/contact" className="btn-primary">Work With Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission — white bg, 2 cards */}
        <section className="bg-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="section-label mb-3">Our Direction</p>
            <div className="accent-line mb-6" />
            <h2 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
              Vision &amp; Mission
            </h2>
            <p className="text-[#f59e0b] italic text-lg mb-14">
              Guiding organizations toward meaningful and lasting success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#f0f4f8] rounded-2xl border border-gray-100 card-hover text-left flex flex-col overflow-hidden">
                <div className="p-8 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f59e0b]/15 flex items-center justify-center mb-4">
                    <Eye className="text-[#f59e0b]" size={26} />
                  </div>
                </div>
                <div className="h-px w-full bg-[#f59e0b]/20" />
                <div className="p-8 pt-6 flex-1">
                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-[#1e3a5f] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-[#1a1a2e]/70 leading-relaxed">
                    To become the most trusted and impactful Filipino development solutions provider —
                    recognized for empowering organizations to realize their highest potential through
                    integrity-driven strategies.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] rounded-2xl card-hover text-left flex flex-col overflow-hidden">
                <div className="p-8 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f59e0b]/20 flex items-center justify-center mb-4">
                    <Target className="text-[#f59e0b]" size={26} />
                  </div>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div className="p-8 pt-6 flex-1">
                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    To partner with leaders across industries, delivering expert training, seminars,
                    reporting, and consulting services that unlock talent, clarify strategy, and create
                    measurable, sustainable results. We don&rsquo;t just help you grow — we help you
                    ascend, with purpose, direction, and shared success.
                  </p>
                </div>
              </div>
            </div>
            <a href="/about" className="btn-primary">Learn More About Us</a>
          </div>
        </section>

        {/* Meet the Team — cream bg, image left like CWA */}
        <section className="bg-[#f0f4f8] py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/illus-team.png"
                    alt="Expert Collaboration"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <p className="section-label mb-3">Meet Our Experts</p>
                <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
                <h2 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                  The ADS Team
                </h2>
                <p className="text-[#f59e0b] italic text-lg mb-6">
                  Professionals blending global standards with local insight.
                </p>
                <p className="text-[#1a1a2e]/70 leading-relaxed mb-8">
                  Our team is composed of consultants, trainers, and analysts who bring extensive
                  experience across diverse industries. We combine global best practices with Filipino
                  excellence — defined by resourcefulness, commitment, and genuine warmth. Every
                  engagement is a collaboration, built on shared trust and mutual respect.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/aivan-alvarez" className="btn-primary">Meet Aivan Alvarez</a>
                  <a href="/about" className="btn-outline">About ADS</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Build CTA — dark section like CWA membership CTA */}
        <section className="bg-[#0f2744] py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/cta-wave-1.png"
              alt=""
              width={900}
              height={450}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[130%] w-auto object-contain select-none"
              style={{ mixBlendMode: 'screen', opacity: 0.13 }}
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0f2744 38%, transparent 75%), radial-gradient(circle at 20% 80%, rgba(37,99,235,0.08), transparent 55%)' }}
          />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <p className="section-label mb-4">Develop with Integrity. Develop for People.</p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-16 bg-[#f59e0b]/50" />
              <HeartHandshake className="text-[#f59e0b]" size={18} />
              <div className="h-px w-16 bg-[#f59e0b]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build Meaningful Growth?
            </h2>
            <p className="text-white/65 leading-relaxed mb-6 text-lg max-w-2xl mx-auto">
              Choosing ADS means choosing a partner who values depth over speed, substance over trends,
              and people over processes. We approach every engagement with intellectual honesty,
              cultural sensitivity, and an unwavering focus on sustainable progress.
            </p>
            <blockquote className="font-[family-name:var(--font-fraunces)] text-xl italic text-[#f59e0b] mb-10 max-w-2xl mx-auto">
              &ldquo;Integrity, collaboration, and transformation — our promise to every client.&rdquo;
            </blockquote>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">Get in Touch</a>
              <a href="/consulting" className="btn-ghost">View Our Services</a>
            </div>
          </div>
        </section>

        {/* Latest Updates — Facebook feed */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="section-label mb-3">Latest Updates</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                From Our Facebook Page
              </h2>
              <p className="text-[#1a1a2e]/70 max-w-xl mx-auto">
                Stay connected with Ascend Development Solutions — follow us on Facebook for the latest news, events, and impact stories.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group bg-[#f0f4f8] rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#f59e0b]/20 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
                    <Megaphone size={16} className="text-[#1877F2]" />
                  </div>
                  <span className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider">Announcement</span>
                </div>
                <p className="text-[#1a1a2e]/80 text-sm leading-relaxed mb-4 flex-1">
                  ADS is now accepting bookings for organizational training and one-on-one technical assistance
                  for sustainability reporting in preparation for the PH Sustainability Reporting Law (2026).
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-[#7a7a7a] text-xs flex items-center gap-1">
                    <CalendarDays size={12} /> June 2025
                  </span>
                  <a
                    href="https://www.facebook.com/ascenddevelopmentsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="group bg-[#f0f4f8] rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#f59e0b]/20 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
                    <Globe size={16} className="text-[#1877F2]" />
                  </div>
                  <span className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider">Partnership</span>
                </div>
                <p className="text-[#1a1a2e]/80 text-sm leading-relaxed mb-4 flex-1">
                  ADS, in partnership with Wagayway Equality, participated in the PCCM Meeting with the
                  Global Fund mission as part of the country&apos;s preparation for Grant Cycle 8 (GC8).
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-[#7a7a7a] text-xs flex items-center gap-1">
                    <CalendarDays size={12} /> Q1 2026
                  </span>
                  <a
                    href="https://www.facebook.com/ascenddevelopmentsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-[#1877F2]/5 to-[#f59e0b]/5 rounded-2xl p-6 border border-[#1877F2]/10 hover:shadow-lg hover:border-[#1877F2]/20 transition-all duration-300 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.04] pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #1877F2, transparent)' }}
                />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center">
                    <Facebook size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider">Follow Us</span>
                </div>
                <p className="text-[#1a1a2e]/80 text-sm leading-relaxed mb-4 flex-1">
                  Follow Ascend Development Solutions on Facebook for the latest updates on our
                  trainings, seminars, consulting services, and community impact stories across the Philippines.
                </p>
                <div className="pt-3 border-t border-[#1877F2]/10">
                  <a
                    href="https://www.facebook.com/ascenddevelopmentsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !bg-[#1877F2] !border-[#1877F2] hover:!bg-[#166fe5] text-xs !py-2.5 !px-5 w-full justify-center inline-flex items-center gap-2"
                  >
                    <Facebook size={14} /> Follow on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative bg-[#f0f4f8] py-20 sm:py-28 px-4 overflow-hidden">
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)', transform: 'translate(30%, -30%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)', transform: 'translate(-30%, 30%)' }}
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <p className="section-label mb-3">Got Questions?</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#1a1a2e]/70 leading-relaxed max-w-2xl mx-auto">
                At Ascend Development Solutions, we value open communication and believe that clarity
                is key to meaningful collaboration.
              </p>
            </div>
            <FAQAccordion />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
