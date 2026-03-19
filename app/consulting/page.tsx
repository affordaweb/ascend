import type { Metadata } from 'next'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Strategic Consulting — Ascend Development Solutions',
  description: 'ADS provides strategic consulting for purposeful growth — organizational assessment, strategy development, leadership alignment, and sustainability reporting.',
}

export default function ConsultingPage() {
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
              Consulting
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-[family-name:var(--font-playfair)] italic mb-4">
              Strategic Consulting for Purposeful Growth
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We partner with organizations to create clarity, alignment, and direction through integrity-driven strategic advisory and consultancy services.
            </p>
          </div>
        </section>

        {/* Building Stronger Organizations */}
        <section className="bg-white py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/21ab96d2e.webp" alt="Strategic Consulting" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="section-label mb-3">Our Approach</p>
              <div className="accent-line mb-6 ml-0" style={{margin:'0.75rem 0 1.5rem'}} />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Building Stronger Organizations from the Inside Out
              </h2>
              <p className="text-xl italic text-[#f59e0b] mb-6">
                &ldquo;Strategy is most powerful when it starts from the inside—with people, purpose, and values.&rdquo;
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                At ADS, our consulting practice is grounded in the belief that lasting organizational transformation comes from within. We work closely with leadership teams and stakeholders to understand your unique context, challenges, and aspirations—then design strategic frameworks that are both ambitious and achievable.
              </p>
              <ul className="space-y-2 text-[#1a1a2e]/70 text-sm mb-6">
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

        {/* Our Consulting Approach */}
        <section className="bg-[#f0f4f8] py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">How We Work</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1e3a5f]">
                Our Consulting Approach
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Organizational Assessment',
                  body: 'We begin every engagement with a thorough assessment of your organization\'s current state—examining structures, processes, culture, and performance to identify both strengths and opportunities for growth.',
                },
                {
                  title: 'Strategy Development',
                  body: 'Using data-driven insights combined with collaborative dialogue, we co-create strategies that are tailored to your goals, values, and operational realities—ensuring ownership and commitment at every level.',
                },
                {
                  title: 'Process Improvement and Change Management',
                  body: 'We support organizations in streamlining workflows, improving efficiency, and navigating transitions—helping teams adapt to change with confidence, clarity, and a shared sense of purpose.',
                },
                {
                  title: 'Leadership and Organizational Alignment',
                  body: 'Strong organizations are led by aligned teams. We work with leadership groups to build cohesion, sharpen decision-making, and cultivate a culture where accountability and collaboration thrive.',
                },
                {
                  title: 'Sustainability and Impact Reporting',
                  body: 'We help organizations measure, communicate, and improve their social and environmental performance—translating complex data into meaningful narratives that demonstrate real-world impact.',
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
            <p className="section-label mb-3">Start Your Journey</p>
            <div className="accent-line mb-8" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Ascend Together
            </h2>
            <blockquote className="text-xl italic text-[#fbbf24] mb-8">
              &ldquo;Every great organization begins with a clear vision and the courage to pursue it.&rdquo;
            </blockquote>
            <p className="text-white/70 leading-relaxed mb-10 text-lg max-w-2xl mx-auto">
              Whether you&apos;re at the start of your transformation journey or looking to accelerate progress, ADS is here to partner with you every step of the way.
            </p>
            <a href="/contact" className="btn-primary inline-block">Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
