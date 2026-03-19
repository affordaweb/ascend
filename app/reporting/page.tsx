import type { Metadata } from 'next'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Organizational Reporting — Ascend Development Solutions',
  description: 'ADS delivers insightful organizational reporting that transforms data into clarity, enabling smarter decisions and sustainable growth.',
}

export default function ReportingPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[40vh] bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] flex items-center py-24 px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="section-label mb-4">What We Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-6">
              Organizational Reporting
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-[family-name:var(--font-playfair)] italic mb-4">
              Insightful reporting that drives smarter decisions and sustainable growth.
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We help organizations turn complex data into actionable insights—delivering reports that inform strategy, demonstrate impact, and guide sustainable performance.
            </p>
          </div>
        </section>

        {/* Transforming Data Into Clarity */}
        <section className="bg-white py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/9cb744349.png" alt="Organizational Reporting" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="section-label mb-3">Our Reporting Services</p>
              <div className="accent-line mb-6 ml-0" style={{margin:'0.75rem 0 1.5rem'}} />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Transforming Data Into Clarity
              </h2>
              <p className="text-xl italic text-[#f59e0b] mb-6">
                &ldquo;Data without context is noise. We turn it into direction.&rdquo;
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                In today&apos;s complex landscape, the ability to understand and communicate organizational performance is critical. ADS provides comprehensive reporting services that go beyond numbers—we translate data into clear, actionable narratives that empower leaders to make informed, strategic decisions with confidence.
              </p>
              <ul className="space-y-2 text-[#1a1a2e]/70 text-sm mb-6">
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

        {/* Our Reporting Approach */}
        <section className="bg-[#f0f4f8] py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">How We Work</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1e3a5f]">
                Our Reporting Approach
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Comprehensive Data Gathering',
                  body: 'We start by collecting relevant quantitative and qualitative data from across your organization—ensuring a complete, accurate picture of performance, progress, and challenges.',
                },
                {
                  title: 'Objective Analysis and Evaluation',
                  body: 'Our analysts apply rigorous evaluation frameworks to assess performance against goals, benchmarks, and strategic priorities—providing honest, unbiased insights that support accountability.',
                },
                {
                  title: 'Clear and Visual Reporting',
                  body: 'We present findings in formats that are easy to understand and act upon—using clear language, data visualizations, and structured narratives that resonate with diverse audiences from boards to frontline teams.',
                },
                {
                  title: 'Monitoring and Continuous Evaluation',
                  body: 'Effective organizations don\'t just measure once—they monitor continuously. We help you establish monitoring frameworks and review cycles that keep performance on track and enable timely course corrections.',
                },
                {
                  title: 'Insights for Strategic Action',
                  body: 'Every report we deliver is designed to drive action. We translate findings into prioritized recommendations that are practical, strategic, and aligned with your organization\'s direction and values.',
                },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl border border-gray-100 card-hover p-8">
                  <div className="h-1 w-full rounded-full mb-6" style={{background:'linear-gradient(to right, #f59e0b, #2563eb)'}} />
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1e3a5f] mb-3">{card.title}</h3>
                  <p className="text-[#1a1a2e]/70 leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0f2744] py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{background:'radial-gradient(circle, #f59e0b, transparent)'}} />
          </div>
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-3">Make Data Work For You</p>
            <div className="accent-line mb-8" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Build Clarity Together
            </h2>
            <blockquote className="text-xl italic text-[#fbbf24] mb-8">
              &ldquo;The best decisions are rooted in honest data and clear understanding.&rdquo;
            </blockquote>
            <p className="text-white/70 leading-relaxed mb-10 text-lg max-w-2xl mx-auto">
              Whether you need a one-time performance report or an ongoing monitoring framework, ADS is here to help you understand where you are—and chart a course to where you want to be.
            </p>
            <a href="/contact" className="btn-primary inline-block">Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
