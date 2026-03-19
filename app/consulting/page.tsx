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
        <section className="min-h-[40vh] bg-gradient-to-br from-[#3A3C51] to-[#292733] flex items-center py-24 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-4">What We Offer</p>
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
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/21ab96d2e.webp" alt="Strategic Consulting" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-4">
                Building Stronger Organizations from the Inside Out
              </h2>
              <p className="text-xl italic text-[#A9D6B6] mb-6">
                &ldquo;Strategy is most powerful when it starts from the inside—with people, purpose, and values.&rdquo;
              </p>
              <p className="text-[#474747] leading-relaxed mb-6">
                At ADS, our consulting practice is grounded in the belief that lasting organizational transformation comes from within. We work closely with leadership teams and stakeholders to understand your unique context, challenges, and aspirations—then design strategic frameworks that are both ambitious and achievable.
              </p>
              <ul className="space-y-2 text-[#474747] text-sm mb-6">
                {[
                  'Organizational assessment and transformation',
                  'Strategic planning and execution',
                  'Human capital and capability development',
                  'Performance measurement and reporting',
                  'Leadership and team alignment initiatives',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#A9D6B6] mt-1">&#x25CF;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Our Consulting Approach */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">How We Work</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51]">
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
                <div key={card.title} className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all p-8 border-t-4 border-t-[#A9D6B6]">
                  <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-3">{card.title}</h3>
                  <p className="text-[#474747] leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3A3C51] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Start Your Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
              Let&apos;s Ascend Together
            </h2>
            <p className="text-xl italic text-[#A9D6B6] mb-8">
              &ldquo;Every great organization begins with a clear vision and the courage to pursue it.&rdquo;
            </p>
            <p className="text-white/80 leading-relaxed mb-10 text-lg max-w-2xl mx-auto">
              Whether you&apos;re at the start of your transformation journey or looking to accelerate progress, ADS is here to partner with you every step of the way.
            </p>
            <a href="/contact" className="bg-[#A9D6B6] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#3A3C51] transition-all inline-block">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
