import type { Metadata } from 'next'
import Image from 'next/image'
import { Database, ScanLine, LineChart, RefreshCw, Lightbulb, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReportingHeroCanvas from '../components/ReportingHeroCanvas'

export const metadata: Metadata = {
  title: 'Organizational Reporting — Ascend Development Solutions',
  description:
    'ADS delivers insightful organizational reporting that transforms data into clarity, enabling smarter decisions and sustainable growth.',
}

const approaches = [
  {
    icon: Database,
    title: 'Comprehensive Data Gathering',
    body: 'We start by collecting relevant quantitative and qualitative data from across your organization — ensuring a complete, accurate picture of performance, progress, and challenges.',
  },
  {
    icon: ScanLine,
    title: 'Objective Analysis & Evaluation',
    body: 'Our analysts apply rigorous evaluation frameworks to assess performance against goals, benchmarks, and strategic priorities — providing honest, unbiased insights that support accountability.',
  },
  {
    icon: LineChart,
    title: 'Clear & Visual Reporting',
    body: 'We present findings in formats that are easy to understand and act upon — using clear language, data visualizations, and structured narratives that resonate with diverse audiences.',
  },
  {
    icon: RefreshCw,
    title: 'Monitoring & Continuous Evaluation',
    body: "Effective organizations don't just measure once — they monitor continuously. We help you establish monitoring frameworks and review cycles that keep performance on track.",
  },
  {
    icon: Lightbulb,
    title: 'Insights for Strategic Action',
    body: "Every report we deliver is designed to drive action. We translate findings into prioritized recommendations that are practical, strategic, and aligned with your organization's direction.",
  },
]

export default function ReportingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="min-h-[55vh] bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] flex items-center py-24 px-4 pt-32 relative overflow-hidden">
          <ReportingHeroCanvas />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-4">What We Offer</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-bold leading-tight mb-4">
              Organizational Reporting
            </h1>
            <p className="font-[family-name:var(--font-fraunces)] text-xl md:text-2xl text-[#fbbf24] italic mb-4">
              Insightful reporting that drives smarter decisions and sustainable growth
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We help organizations turn complex data into actionable insights — delivering reports
              that inform strategy, demonstrate impact, and guide sustainable performance.
            </p>
          </div>
        </section>

        {/* Transforming Data Into Clarity */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/illus-reporting.svg"
                alt="Organizational Reporting"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-3">Our Reporting Services</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                Transforming Data Into Clarity
              </h2>
              <p className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#f59e0b] mb-6">
                &ldquo;Data without context is noise. We turn it into direction.&rdquo;
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                In today&apos;s complex landscape, the ability to understand and communicate
                organizational performance is critical. ADS provides comprehensive reporting
                services that go beyond numbers — we translate data into clear, actionable
                narratives that empower leaders to make informed, strategic decisions with
                confidence.
              </p>
              <ul className="space-y-2 text-[#1a1a2e]/70 text-sm">
                {[
                  'Organizational performance reporting',
                  'Program monitoring and evaluation',
                  'Data analytics and visualization',
                  'Research and impact assessment',
                  'Customized dashboards and progress tracking',
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

        {/* Reporting Approach — dark grid */}
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
                Our Reporting Approach
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                From raw data to strategic clarity — a rigorous, transparent process.
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
        <section className="bg-[#f0f4f8] py-20 sm:py-28 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-3">Make Data Work For You</p>
                <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
                <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                  Let&apos;s Build Clarity Together
                </h2>
                <blockquote className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#f59e0b] border-l-4 border-[#f59e0b] pl-4 mb-6">
                  &ldquo;The best decisions are rooted in honest data and clear understanding.&rdquo;
                </blockquote>
                <p className="text-[#1a1a2e]/70 leading-relaxed mb-8">
                  Whether you need a one-time performance report or an ongoing monitoring framework,
                  ADS is here to help you understand where you are — and chart a course to where you
                  want to be.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Contact Us <ArrowRight size={16} />
                  </a>
                  <a href="/consulting" className="btn-outline">
                    View Consulting
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/illus-sustainability.svg"
                  alt="Build Clarity Together"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
