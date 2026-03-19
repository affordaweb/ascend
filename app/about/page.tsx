import type { Metadata } from 'next'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'About ADS — Ascend Development Solutions',
  description: 'Learn about Ascend Development Solutions — our story, our commitment to Filipino values, and how we empower organizations through integrity-driven growth.',
}

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[40vh] bg-gradient-to-br from-[#3A3C51] to-[#292733] flex items-center py-24 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-6">
              About Ascend Development Solutions
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              A professional services firm dedicated to advancing sustainable organizational growth and human capital development.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/852da68f.png" alt="Who We Are" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">About ADS</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-[#474747] leading-relaxed">
                <p>Ascend Development Solutions (ADS) is a professional services firm dedicated to advancing sustainable organizational growth and human capital development.</p>
                <p>We believe that true success is not defined solely by performance indicators but by the people and values that drive them.</p>
                <p>Every project we undertake is guided by integrity, collaboration, and a deep respect for the human side of progress.</p>
                <p>Our work goes beyond metrics—we focus on empowering individuals and teams to grow from within, enabling organizations to rise with purpose, strategy, and shared humanity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">How We Began</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#474747] leading-relaxed">
                <p>ADS was founded on the belief that development is most meaningful when it honors people and values.</p>
                <p>Born from years of experience in consulting, training, and strategic development, the firm was built to serve as a trusted partner for organizations striving to achieve genuine transformation.</p>
                <p>Our founders envisioned a consultancy that bridges global expertise with Filipino authenticity—where every engagement upholds loob (integrity of the inner self) and kapwa (our shared humanity).</p>
                <p>These two values remain at the core of how we lead, teach, and serve.</p>
                <p>Through this philosophy, ADS continues to help organizations ascend—strengthening leadership, aligning purpose, and cultivating environments where growth is both ethical and enduring.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/21ab96d2e.webp" alt="Our Story" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="bg-[#3A3C51] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
              Our Commitment
            </h2>
            <p className="text-xl italic text-[#A9D6B6] mb-8">
              &ldquo;Integrity in service, empathy in collaboration, and excellence in execution.&rdquo;
            </p>
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              When you work with ADS, you gain more than a consulting firm—you gain a partner who listens, understands, and builds alongside you. We value transparency, accountability, and respect in every interaction. Our commitment is to ensure that every strategy we create, every report we deliver, and every training we conduct contributes to sustainable development—helping your organization not only reach its goals but sustain its success with clarity and purpose.
            </p>
            <p className="text-xl italic text-[#A9D6B6]">
              &ldquo;Together, we&apos;ll design SUSTAINABLE solutions rooted in integrity, collaboration, and shared humanity.&rdquo;
            </p>
          </div>
        </section>

        {/* Let's Ascend Together */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Take the First Step</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-6">
              Let&apos;s Ascend Together
            </h2>
            <p className="text-[#474747] leading-relaxed mb-8 text-lg max-w-3xl mx-auto">
              Let ADS be your partner in shaping strategies that elevate both your organization and the people who make it thrive. Together, we&apos;ll design sustainable solutions rooted in integrity, collaboration, and shared humanity. Your journey toward purposeful growth starts here.
            </p>
            <a href="/contact" className="bg-[#D7C4E3] text-[#3A3C51] font-semibold px-8 py-3 rounded-full hover:bg-[#3A3C51] hover:text-white transition-all inline-block">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
