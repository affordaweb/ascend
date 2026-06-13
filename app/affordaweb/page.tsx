import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Globe, Zap, Search, Smartphone, HeartHandshake } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AffordaWebCanvas from '../components/AffordaWebCanvas'

export const metadata: Metadata = {
  title: 'Affordable Website Design Services | AffordaWeb Solutions',
  description:
    'AffordaWeb Solutions delivers professional, affordable website design services for small businesses and organizations. Fast, SEO-ready sites built to rank and convert.',
  alternates: {
    canonical: 'https://ascend-ochre.vercel.app/affordaweb',
  },
  openGraph: {
    title: 'Affordable Website Design Services | AffordaWeb Solutions',
    description:
      'AffordaWeb Solutions delivers professional, affordable website design services for small businesses and organizations. Fast, SEO-ready sites built to rank and convert.',
    url: 'https://ascend-ochre.vercel.app/affordaweb',
    type: 'website',
  },
}

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    desc: 'Custom-built websites using modern frameworks — fast, responsive, and designed to convert visitors into clients.',
  },
  {
    icon: Search,
    title: 'SEO-Ready from Day One',
    desc: 'Every site we build is structured for search engines. Proper meta tags, schema markup, sitemaps, and Core Web Vitals — included by default.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Your site will look and perform beautifully on every device — phones, tablets, and desktops alike.',
  },
  {
    icon: Zap,
    title: 'High-Performance Sites',
    desc: 'We optimize for speed. Expect Google PageSpeed scores above 90 and load times that keep visitors engaged.',
  },
  {
    icon: HeartHandshake,
    title: 'Affordable for Every Budget',
    desc: 'Professional quality does not have to be expensive. We offer transparent pricing built for small businesses, startups, and nonprofits.',
  },
  {
    icon: CheckCircle,
    title: 'Ongoing Support',
    desc: 'After launch, we stay by your side — handling updates, improvements, and anything your site needs to keep growing.',
  },
]

const reasons = [
  'No hidden fees — transparent, flat-rate pricing',
  'Sites delivered in days, not months',
  'Built on Next.js for maximum speed and SEO performance',
  'Dedicated to small businesses, nonprofits, and growing organizations',
  'Clean, professional design tailored to your brand',
  'Centralized contact forms, schema markup, and analytics-ready',
]

export default function AffordaWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'AffordaWeb Solutions',
            url: 'https://affordawebsolutions.com',
            description:
              'AffordaWeb Solutions provides affordable website design services for small businesses, nonprofits, and growing organizations.',
            sameAs: ['https://affordawebsolutions.com'],
            serviceType: 'Affordable Website Design Services',
          }),
        }}
      />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative bg-[#0f2744] pt-[120px] pb-20 sm:pb-28 overflow-hidden">
          <AffordaWebCanvas />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 30%, rgba(245,158,11,0.08), transparent 55%), radial-gradient(circle at 15% 70%, rgba(37,99,235,0.07), transparent 55%)',
            }}
          />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <p className="section-label mb-3">Built for Growth</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/40" />
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Affordable Website Design Services{' '}
              <span className="gradient-text-light">That Actually Rank</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              AffordaWeb Solutions builds professional, fast, and SEO-ready websites for small businesses,
              nonprofits, and growing organizations — at a price that makes sense.
            </p>
            <a
              href="https://affordawebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit AffordaWeb Solutions
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="section-label mb-3">What We Offer</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Affordable Website Design Services Built for Results
              </h2>
              <p className="text-[#1a1a2e]/65 max-w-xl mx-auto">
                Every service is designed to help your business get found online, look great, and grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.title}
                    className="group bg-[#f0f4f8] rounded-2xl p-7 border border-transparent hover:border-[#f59e0b]/30 hover:shadow-xl hover:shadow-[#1e3a5f]/08 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/12 flex items-center justify-center mb-5 group-hover:bg-[#f59e0b]/20 transition-colors">
                      <Icon className="text-[#f59e0b]" size={20} />
                    </div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold text-[#1e3a5f] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[#1a1a2e]/65 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why AffordaWeb */}
        <section className="bg-[#0f2744] py-20 sm:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 90% 10%, rgba(245,158,11,0.07), transparent 50%), radial-gradient(circle at 10% 90%, rgba(37,99,235,0.07), transparent 50%)',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-3">Why Choose Us</p>
                <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
                <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Professional Web Design. Prices That Work for You.
                </h2>
                <p className="text-white/65 leading-relaxed mb-8">
                  AffordaWeb Solutions was built on a simple belief: every business deserves a great website,
                  regardless of budget. We combine modern design, clean code, and proven SEO practices to
                  deliver sites that look premium and perform in search results.
                </p>
                <a
                  href="https://affordawebsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  See Our Work
                </a>
              </div>
              <div className="space-y-4">
                {reasons.map((r) => (
                  <div key={r} className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-xl px-5 py-4">
                    <CheckCircle className="text-[#f59e0b] shrink-0 mt-0.5" size={18} />
                    <span className="text-white/80 text-sm leading-relaxed">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-[#0f2744] py-20 sm:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/cta-diamonds.png"
              alt=""
              width={900}
              height={450}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[130%] w-auto object-contain select-none"
              style={{ mixBlendMode: 'screen', opacity: 0.20 }}
            />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, #0f2744 38%, transparent 75%)' }} />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="section-label mb-3">Ready to Get Started?</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-4">
              Get an Affordable Website That Ranks and Converts
            </h2>
            <p className="text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you need a brand-new site or a full redesign, AffordaWeb Solutions delivers
              quality web design without the agency price tag.
            </p>
            <a
              href="https://affordawebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit AffordaWeb Solutions
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
