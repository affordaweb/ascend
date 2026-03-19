import type { Metadata } from 'next'
import Image from 'next/image'
import { Mail, Phone, Linkedin } from 'lucide-react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Aivan Castillo Alvarez — Ascend Development Solutions',
  description: 'Aivan Castillo Alvarez is a social development specialist advancing inclusive governance, health equity, and community leadership across Asia and the Pacific.',
}

export default function AivanAlvarezPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[40vh] bg-gradient-to-br from-[#3A3C51] to-[#292733] flex items-center py-24 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-4">Aivan Castillo Alvarez</p>
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-6">
              Advancing Inclusive Governance and Community-Led Change
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              A development leader connecting communities with decision-makers across Asia and the Pacific
            </p>
          </div>
        </section>

        {/* About Aivan */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto lg:max-w-none">
              <Image src="/images/Aivan-Alvarez.png" alt="Aivan Castillo Alvarez" width={400} height={500} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Social Development Specialist</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-6">
                Aivan Castillo Alvarez
              </h2>
              <div className="space-y-4 text-[#474747] leading-relaxed">
                <p>Aivan Castillo Alvarez is a social development specialist whose work centers on inclusive governance, health equity, and community leadership. With over fifteen years of experience across civil society, government mechanisms, and regional platforms, Aivan Castillo Alvarez has built a career focused on ensuring that policies respond to real community needs.</p>
                <p>Throughout his journey, Aivan Castillo Alvarez has remained committed to one principle: meaningful change happens when communities are part of the process. By bridging grassroots voices with national and regional institutions, Aivan Castillo Alvarez helps translate lived realities into policies, programs, and systems that create lasting impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Cards Grid */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Areas of Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51]">
                Impact Across Sectors
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all p-8">
                <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-4">Regional and National Roles</h3>
                <ul className="space-y-2 text-[#474747] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Regional program advisory across Asia and the Pacific</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Participation in national health governance mechanisms</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Representation of key populations in funding and oversight structures</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Engagement with government, UN agencies, and civil society networks</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all p-8">
                <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-4">How Aivan Designs Impact</h3>
                <ul className="space-y-2 text-[#474747] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Community-led program design</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Capacity building and training</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Monitoring and evaluation frameworks</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Rights-based and gender-inclusive approaches</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all p-8">
                <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-4">Institutional Systems and Compliance</h3>
                <ul className="space-y-2 text-[#474747] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Sustainability and social performance alignment</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Labor standards and ethical employment practices</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Internal audits and capacity development</li>
                  <li className="flex items-start gap-2"><span className="text-[#A9D6B6] mt-1">&#x25CF;</span> Stakeholder and regulatory engagement</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all p-8">
                <h3 className="text-xl font-bold text-[#3A3C51] font-[family-name:var(--font-playfair)] mb-4">Leadership and Philosophy</h3>
                <p className="text-[#474747] leading-relaxed text-sm">
                  For Aivan Castillo Alvarez, leadership is about creating space for others to contribute meaningfully. Rather than directing from above, he prioritizes listening, collaboration, and shared responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Image */}
        <section className="relative h-[400px] overflow-hidden">
          <Image src="/images/sustainability-image-101.png" alt="Sustainability" width={1200} height={600} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3A3C51]/70 flex items-center justify-center">
            <p className="text-white text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] text-center px-4 max-w-2xl">
              Building systems that are fair, inclusive, and accountable
            </p>
          </div>
        </section>

        {/* Message from Founder */}
        <section className="bg-[#3A3C51] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Message from the Founder</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Vision for Purpose-Driven Growth
            </h2>
            <p className="text-xl italic text-[#A9D6B6] mb-8">A continuing commitment to inclusion</p>
            <p className="text-white/80 leading-relaxed text-lg">
              The journey of Aivan Castillo Alvarez began with listening to communities navigating systems that often overlooked their realities. Over time, that listening became action through policy engagement, organizational leadership, and regional collaboration. Today, Aivan Castillo Alvarez remains committed to strengthening systems that are fair, inclusive, and accountable, knowing that progress is built through shared effort and sustained dialogue.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-8">
              Connect with Aivan
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:aivan.c.alvarez@gmail.com" className="flex items-center gap-3 text-[#474747] hover:text-[#3A3C51] transition-colors">
                <Mail size={18} className="text-[#A9D6B6]" />
                aivan.c.alvarez@gmail.com
              </a>
              <a href="tel:09177050413" className="flex items-center gap-3 text-[#474747] hover:text-[#3A3C51] transition-colors">
                <Phone size={18} className="text-[#A9D6B6]" />
                0917 705 0413
              </a>
              <a href="https://www.linkedin.com/in/aivanalvarez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#474747] hover:text-[#3A3C51] transition-colors">
                <Linkedin size={18} className="text-[#A9D6B6]" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Let's Build Impact Together */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">An Open Invitation</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-6">
              Let&apos;s Build Impact Together
            </h2>
            <p className="text-[#474747] leading-relaxed mb-8 text-lg max-w-3xl mx-auto">
              Aivan Castillo Alvarez welcomes collaboration with individuals, organizations, and partners who believe in meaningful growth, inclusive leadership, and community-centered solutions. Whether you are seeking advocacy support, development guidance through Ascend Development Solutions, or opportunities to create lasting change, this is an open invitation to connect, collaborate, and move forward with purpose. Your journey toward purposeful growth starts here.
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
