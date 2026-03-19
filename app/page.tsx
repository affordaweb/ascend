import type { Metadata } from 'next'
import Image from 'next/image'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQAccordion from './components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Ascend Development Solutions — Building Better Futures Together',
  description: 'ADS empowers individuals, groups, and institutions through ESG and SDG-aligned trainings, seminars, reporting, and consultancy in the Philippines.',
}

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] bg-gradient-to-br from-[#3A3C51] to-[#292733] flex items-center py-24 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-4">Building Better Futures Together</p>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-6">
              Ascend Development Solutions (ADS)
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4 font-[family-name:var(--font-playfair)] italic">
              Ascend. In Our Shared Humanity, There is a Solution Future Partner
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Ascend Development Solutions empowers individuals, groups, and institutions through ESG and SDG-aligned trainings, seminars, reporting, and consultancy. Sama-samang pag-angat para sa makatao, makatarungan, at makakalikasang kinabukasan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#3A3C51] transition-all">
                About Us
              </a>
              <a href="/contact" className="bg-[#A9D6B6] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#3A3C51] transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/ads-image-101.webp" alt="About Ascend Development Solutions" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-4">
                About Ascend Development Solutions (ADS)
              </h2>
              <p className="text-xl italic text-[#A9D6B6] mb-6">
                &ldquo;Building transformation through integrity, empathy, and collaboration.&rdquo;
              </p>
              <p className="text-[#474747] leading-relaxed mb-6">
                ADS is a professional services firm dedicated to fostering sustainable organizational growth and human capital development. We partner with clients across sectors to design strategic, people-centered solutions that create lasting impact. Our approach blends data-driven insights with human understanding—helping you strengthen leadership, enhance performance, and nurture a culture of accountability and purpose.
              </p>
              <a href="/about" className="bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all inline-block">
                Learn more about us
              </a>
            </div>
          </div>
        </section>

        {/* ADS Philosophy */}
        <section className="bg-[#3A3C51] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">The ADS Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Development Rooted in Filipino Core Values
            </h2>
            <h3 className="text-xl font-semibold text-[#D7C4E3] mb-6">The Power of Loob and Kapwa</h3>
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              At the heart of ADS lies a philosophy shaped by Filipino values. Loob represents our inner integrity—our dedication to truth, authenticity, and responsible action. It guides how we think, plan, and deliver solutions with precision and sincerity. Kapwa embodies shared humanity—the understanding that progress is best achieved together. Through collaboration, empathy, and respect, we help organizations grow not only in capability but also in compassion. This balance of intellect and heart defines the ADS difference.
            </p>
            <p className="text-xl italic text-[#A9D6B6] mb-10">
              &ldquo;To know the FILIPINO is to understand the loob—our shared humanity, our kapwa.&rdquo;
            </p>
            <a href="/contact" className="bg-[#A9D6B6] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#3A3C51] transition-all inline-block">
              Contact Us
            </a>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Our Vision and Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-4">
                Charting the Ascent
              </h2>
              <p className="text-xl italic text-[#7A7A7A]">Guiding organizations toward meaningful and lasting success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all p-8">
                <div className="w-12 h-12 rounded-full bg-[#D7C4E3]/40 flex items-center justify-center mb-4">
                  <span className="text-[#3A3C51] font-bold text-lg">V</span>
                </div>
                <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-3">Our Vision</h3>
                <p className="text-[#474747] leading-relaxed">
                  Our vision is to become the most trusted and impactful Filipino development solutions provider—recognized for empowering organizations to realize their highest potential through integrity-driven strategies.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all p-8">
                <div className="w-12 h-12 rounded-full bg-[#A9D6B6]/40 flex items-center justify-center mb-4">
                  <span className="text-[#3A3C51] font-bold text-lg">M</span>
                </div>
                <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-3">Our Mission</h3>
                <p className="text-[#474747] leading-relaxed">
                  Our mission is to partner with leaders across industries, delivering expert training, seminars, reporting, and consulting services that unlock talent, clarify strategy, and create measurable, sustainable results. We don&apos;t just aim to help you grow; we aim to help you ascend—with purpose, direction, and shared success.
                </p>
              </div>
            </div>
            <div className="text-center">
              <a href="/about" className="bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all inline-block">
                Learn more about us
              </a>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-4">
                Our Core Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Strategic Consulting',
                  desc: 'Align your vision and strategy with actionable, integrity-centered plans that drive results.',
                  href: '/consulting',
                },
                {
                  title: 'Customized Training & Seminars',
                  desc: 'Empower teams with practical, engaging, and value-driven learning experiences.',
                  href: '/trainings-and-seminars',
                },
                {
                  title: 'Organizational Reporting',
                  desc: 'Deliver clear, data-backed insights to inform smarter decisions and long-term growth.',
                  href: '/reporting',
                },
              ].map((s) => (
                <div key={s.href} className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all p-8 border-t-4 border-t-[#A9D6B6]">
                  <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-3">{s.title}</h3>
                  <p className="text-[#474747] leading-relaxed mb-6">{s.desc}</p>
                  <a href={s.href} className="text-[#3A3C51] font-semibold text-sm hover:text-[#A9D6B6] transition-colors">
                    Learn More &rarr;
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl italic text-[#A9D6B6] max-w-3xl mx-auto">
                &ldquo;Each solution we provide is rooted in PARTNERSHIP, ensuring that your organization gains not only results—but the internal capacity to sustain them.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Experts */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/e69fa20f93a66.png" alt="The ADS Team" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Meet Our Experts</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-4">
                The ADS Team
              </h2>
              <p className="text-xl italic text-[#A9D6B6] mb-6">
                &ldquo;Professionals blending global standards with local insight.&rdquo;
              </p>
              <p className="text-[#474747] leading-relaxed mb-6">
                Our team is composed of consultants, trainers, and analysts who bring extensive experience across diverse industries. We combine global best practices with Filipino excellence—defined by resourcefulness, commitment, and genuine warmth. Every engagement is a collaboration, built on shared trust and mutual respect. When you partner with ADS, you gain a dedicated team that listens, guides, and acts with integrity.
              </p>
              <a href="/about" className="bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all inline-block">
                Learn more about us
              </a>
            </div>
          </div>
        </section>

        {/* Ready to Build */}
        <section className="bg-[#3A3C51] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Develop with Integrity. Develop for People.</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
              Ready to Build Meaningful Growth?
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 text-lg">
              Choosing ADS means choosing a partner who values depth over speed, substance over trends, and people over processes. We approach every engagement with intellectual honesty, cultural sensitivity, and an unwavering focus on creating sustainable progress. Whether you are seeking to strengthen leadership, improve performance, or align strategy with purpose, we&apos;re here to help you navigate the path with clarity and compassion. Together, we build organizations that not only grow—but uplift.
            </p>
            <p className="text-xl italic text-[#A9D6B6] mb-10">
              &ldquo;Integrity, collaboration, and transformation—our promise to every client.&rdquo;
            </p>
            <a href="/contact" className="bg-[#A9D6B6] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#3A3C51] transition-all inline-block">
              Contact Us
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Got Questions?</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#474747] leading-relaxed max-w-2xl mx-auto">
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
