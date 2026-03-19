import type { Metadata } from 'next'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Trainings & Seminars — Ascend Development Solutions',
  description: 'ADS offers customized trainings and seminars to empower people through learning and growth — leadership, communication, culture, and values-driven development.',
}

export default function TrainingsSeminarsPage() {
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
              Trainings and Seminars
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-[family-name:var(--font-playfair)] italic mb-4">
              Empowering People Through Learning and Growth
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We design and deliver customized learning programs that build capability, inspire leadership, and align teams around shared values and goals.
            </p>
          </div>
        </section>

        {/* Strengthening Teams */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/897b655f389e.webp" alt="Trainings and Seminars" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Our Training Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51] mb-4">
                Strengthening Teams, Inspiring Leaders
              </h2>
              <p className="text-xl italic text-[#A9D6B6] mb-6">
                &ldquo;Meaningful learning transforms not just what people know—but how they think, lead, and grow together.&rdquo;
              </p>
              <p className="text-[#474747] leading-relaxed mb-6">
                At ADS, we believe that people are an organization&apos;s greatest asset. Our training programs are designed to unlock that potential—creating environments where individuals grow, teams collaborate effectively, and organizations thrive. Every session is crafted with purpose, relevance, and impact in mind.
              </p>
              <ul className="space-y-2 text-[#474747] text-sm mb-6">
                {[
                  'Leadership and team development',
                  'Strategic communication and collaboration',
                  'Organizational culture and change management',
                  'Employee performance and motivation',
                  'Values-driven leadership and ethical decision-making',
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

        {/* Our Training Approach */}
        <section className="bg-[#F8F8F8] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">How We Deliver</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#3A3C51]">
                Our Training Approach
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Customized Learning Design',
                  body: 'We don\'t believe in one-size-fits-all training. Every program we develop is tailored to your organization\'s objectives, culture, and team dynamics—ensuring relevance, engagement, and lasting behavioral change.',
                },
                {
                  title: 'Engaging and Experiential Sessions',
                  body: 'Our trainers use interactive methods—case studies, simulations, group discussions, and reflective exercises—to create learning experiences that resonate deeply and translate directly into workplace practice.',
                },
                {
                  title: 'Expert Facilitators and Trainers',
                  body: 'Our facilitators bring real-world expertise and a genuine passion for people development. They create safe, inclusive spaces where participants feel empowered to learn, share, and grow.',
                },
                {
                  title: 'Values-Centered Development',
                  body: 'Every program is anchored in the principles of integrity, collaboration, and respect. We go beyond skills training to help individuals connect their personal values with their professional roles.',
                },
                {
                  title: 'Post-Training Evaluation and Support',
                  body: 'Learning doesn\'t end when the session does. We provide post-training evaluation tools and ongoing support to help organizations measure impact and sustain the gains made through our programs.',
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
            <p className="text-[#A9D6B6] text-sm font-semibold uppercase tracking-widest mb-2">Empower Your Team</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
              Let&apos;s Build a Learning Culture Together
            </h2>
            <p className="text-xl italic text-[#A9D6B6] mb-8">
              &ldquo;Growth is not an event—it is a culture. Let us help you cultivate it.&rdquo;
            </p>
            <p className="text-white/80 leading-relaxed mb-10 text-lg max-w-2xl mx-auto">
              Ready to invest in your most valuable asset—your people? Reach out to ADS today to design a training program that makes a real difference.
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
