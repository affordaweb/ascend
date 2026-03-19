import type { Metadata } from 'next'
import Image from 'next/image'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQAccordion from './components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Ascend Development Solutions — Building Better Futures Together',
  description: 'ADS empowers organizations through ESG and SDG-aligned trainings, seminars, reporting, and consultancy. Building Better Futures Together.',
}

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-20" style={{background: 'linear-gradient(135deg, #0f2744 0%, #1e3a5f 50%, #0f2744 100%)'}}>
          {/* Decorative orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #f59e0b, transparent)'}} />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #2563eb, transparent)'}} />

          <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              <span className="text-white/80 text-sm font-medium">ESG & SDG-Aligned Solutions</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6 max-w-4xl">
              Ascend Development <span className="gradient-text-light">Solutions</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
              Ascend. In Our Shared Humanity, There is a Solution Future Partner
            </p>
            <p className="text-white/60 max-w-2xl mb-10 leading-relaxed">
              Empowering individuals, groups, and institutions through ESG and SDG-aligned trainings, seminars, reporting, and consultancy. Sama-samang pag-angat para sa makatao, makatarungan, at makakalikasang kinabukasan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/about" className="btn-primary">About Us</a>
              <a href="/contact" className="btn-ghost">Contact Us</a>
            </div>
          </div>

          {/* Floating stats card */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 hidden md:block">
            <div className="bg-white rounded-2xl shadow-xl px-10 py-6 flex items-center gap-12">
              {[{n:'15+',l:'Years Experience'},{n:'3',l:'Core Services'},{n:'100%',l:'Values-Driven'}].map(s=>(
                <div key={s.l} className="text-center">
                  <div className="gradient-text text-3xl font-bold">{s.n}</div>
                  <div className="text-[#6b7280] text-sm mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-[#f0f4f8] py-24 pt-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label mb-3">Who We Are</p>
                <div className="accent-line mb-6 ml-0" style={{margin:'0.75rem 0 1.5rem'}} />
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
                  About Ascend Development Solutions
                </h2>
                <p className="text-[#1a1a2e]/70 text-lg leading-relaxed mb-4 italic text-[#f59e0b] font-medium">
                  &ldquo;Building transformation through integrity, empathy, and collaboration.&rdquo;
                </p>
                <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                  ADS is a professional services firm dedicated to fostering sustainable organizational growth and human capital development. We partner with clients across sectors to design strategic, people-centered solutions that create lasting impact. Our approach blends data-driven insights with human understanding—helping you strengthen leadership, enhance performance, and nurture a culture of accountability and purpose.
                </p>
                <a href="/about" className="btn-primary inline-block">Learn more about us</a>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/illus-team.svg" alt="Who We Are" width={600} height={450} className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
                  <p className="text-[#f59e0b] font-bold text-2xl">15+</p>
                  <p className="text-[#6b7280] text-sm">Years of Impact</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADS Philosophy */}
        <section className="bg-[#0f2744] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{background:'radial-gradient(circle, #f59e0b, transparent)'}} />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <p className="section-label mb-3">The ADS Philosophy</p>
            <div className="accent-line mb-8" />
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-4">
              Development Rooted in Filipino Core Values
            </h2>
            <h3 className="text-[#f59e0b] text-xl font-semibold mb-8">The Power of Loob and Kapwa</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              At the heart of ADS lies a philosophy shaped by Filipino values. Loob represents our inner integrity—our dedication to truth, authenticity, and responsible action. It guides how we think, plan, and deliver solutions with precision and sincerity. Kapwa embodies shared humanity—the understanding that progress is best achieved together. Through collaboration, empathy, and respect, we help organizations grow not only in capability but also in compassion. This balance of intellect and heart defines the ADS difference.
            </p>
            <blockquote className="text-xl italic text-[#fbbf24] mb-10 max-w-2xl mx-auto">
              &ldquo;To know the FILIPINO is to understand the loob—our shared humanity, our kapwa.&rdquo;
            </blockquote>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="section-label mb-3">Our Vision and Mission</p>
            <div className="accent-line mb-6" />
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Charting the Ascent</h2>
            <p className="text-[#f59e0b] italic text-lg mb-12">Guiding organizations toward meaningful and lasting success.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#f0f4f8] to-white rounded-2xl p-10 border border-gray-100 card-hover text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center mb-6">
                  <span className="text-[#f59e0b] text-2xl font-bold">V</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1e3a5f] mb-4">Our Vision</h3>
                <p className="text-[#1a1a2e]/70 leading-relaxed">Our vision is to become the most trusted and impactful Filipino development solutions provider—recognized for empowering organizations to realize their highest potential through integrity-driven strategies.</p>
              </div>
              <div className="bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] rounded-2xl p-10 card-hover text-left">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center mb-6">
                  <span className="text-[#f59e0b] text-2xl font-bold">M</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">Our mission is to partner with leaders across industries, delivering expert training, seminars, reporting, and consulting services that unlock talent, clarify strategy, and create measurable, sustainable results. We don&rsquo;t just aim to help you grow; we aim to help you ascend—with purpose, direction, and shared success.</p>
              </div>
            </div>
            <a href="/about" className="btn-primary">Learn more about us</a>
          </div>
        </section>

        {/* Core Services */}
        <section className="bg-[#f0f4f8] py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-label mb-3">What We Do</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Our Core Services</h2>
              <p className="text-[#6b7280] max-w-2xl mx-auto">Tailored solutions that strengthen people and organizations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {title:'Strategic Consulting',desc:'Align your vision and strategy with actionable, integrity-centered plans that drive results.',href:'/consulting',icon:'💡'},
                {title:'Customized Training & Seminars',desc:'Empower teams with practical, engaging, and value-driven learning experiences.',href:'/trainings-and-seminars',icon:'🎓'},
                {title:'Organizational Reporting',desc:'Deliver clear, data-backed insights to inform smarter decisions and long-term growth.',href:'/reporting',icon:'📊'},
              ].map(s=>(
                <div key={s.title} className="bg-white rounded-2xl p-8 border border-gray-100 card-hover group">
                  <div className="h-1 w-full rounded-full mb-8" style={{background:'linear-gradient(to right, #f59e0b, #2563eb)'}} />
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1e3a5f] mb-3">{s.title}</h3>
                  <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">{s.desc}</p>
                  <a href={s.href} className="text-[#f59e0b] font-semibold text-sm hover:underline">Learn More &rarr;</a>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] rounded-2xl p-10 text-center">
              <p className="text-white/80 text-lg italic max-w-3xl mx-auto">
                &ldquo;Each solution we provide is rooted in <span className="text-[#f59e0b] font-bold not-italic">PARTNERSHIP</span>, ensuring that your organization gains not only results—but the internal capacity to sustain them.&rdquo;
              </p>
              <a href="/contact" className="btn-primary mt-8 inline-block">Contact Us</a>
            </div>
          </div>
        </section>

        {/* Meet Our Experts */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/illus-experts.svg" alt="Meet Our Experts" width={600} height={450} className="w-full h-auto object-cover" />
              </div>
              <div>
                <p className="section-label mb-3">Meet Our Experts</p>
                <div className="accent-line mb-6 ml-0" style={{margin:'0.75rem 0 1.5rem'}} />
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">The ADS Team</h2>
                <p className="text-[#f59e0b] italic text-lg mb-6">Professionals blending global standards with local insight.</p>
                <p className="text-[#1a1a2e]/70 leading-relaxed mb-8">Our team is composed of consultants, trainers, and analysts who bring extensive experience across diverse industries. We combine global best practices with Filipino excellence—defined by resourcefulness, commitment, and genuine warmth. Every engagement is a collaboration, built on shared trust and mutual respect. When you partner with ADS, you gain a dedicated team that listens, guides, and acts with integrity.</p>
                <a href="/about" className="btn-primary">Learn more about us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Build */}
        <section className="bg-[#0f2744] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{background:'radial-gradient(circle, #f59e0b, transparent)'}} />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <p className="section-label mb-3">Develop with Integrity. Develop for People.</p>
            <div className="accent-line mb-8" />
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Meaningful Growth?
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 text-lg">
              Choosing ADS means choosing a partner who values depth over speed, substance over trends, and people over processes. We approach every engagement with intellectual honesty, cultural sensitivity, and an unwavering focus on creating sustainable progress. Whether you are seeking to strengthen leadership, improve performance, or align strategy with purpose, we&rsquo;re here to help you navigate the path with clarity and compassion. Together, we build organizations that not only grow—but uplift.
            </p>
            <blockquote className="text-xl italic text-[#f59e0b] mb-10 max-w-2xl mx-auto">
              &ldquo;Integrity, collaboration, and transformation—our promise to every client.&rdquo;
            </blockquote>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-[#f0f4f8] py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Got Questions?</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#1a1a2e]/70 leading-relaxed max-w-2xl mx-auto">
                At Ascend Development Solutions (ADS), we value open communication and believe that clarity is key to meaningful collaboration.
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
