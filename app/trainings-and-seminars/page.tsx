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
        <section className="min-h-[40vh] bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] flex items-center py-24 px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="section-label mb-4">What We Offer</p>
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
        <section className="bg-white py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/897b655f389e.webp" alt="Trainings and Seminars" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="section-label mb-3">Our Training Philosophy</p>
              <div className="accent-line mb-6 ml-0" style={{margin:'0.75rem 0 1.5rem'}} />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Strengthening Teams, Inspiring Leaders
              </h2>
              <p className="text-xl italic text-[#f59e0b] mb-6">
                &ldquo;Meaningful learning transforms not just what people know—but how they think, lead, and grow together.&rdquo;
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                At ADS, we believe that people are an organization&apos;s greatest asset. Our training programs are designed to unlock that potential—creating environments where individuals grow, teams collaborate effectively, and organizations thrive. Every session is crafted with purpose, relevance, and impact in mind.
              </p>
              <ul className="space-y-2 text-[#1a1a2e]/70 text-sm mb-6">
                {[
                  'Leadership and team development',
                  'Strategic communication and collaboration',
                  'Organizational culture and change management',
                  'Employee performance and motivation',
                  'Values-driven leadership and ethical decision-making',
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

        {/* Our Training Approach */}
        <section className="bg-[#f0f4f8] py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">How We Deliver</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1e3a5f]">
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
            <p className="section-label mb-3">Empower Your Team</p>
            <div className="accent-line mb-8" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Build a Learning Culture Together
            </h2>
            <blockquote className="text-xl italic text-[#fbbf24] mb-8">
              &ldquo;Growth is not an event—it is a culture. Let us help you cultivate it.&rdquo;
            </blockquote>
            <p className="text-white/70 leading-relaxed mb-10 text-lg max-w-2xl mx-auto">
              Ready to invest in your most valuable asset—your people? Reach out to ADS today to design a training program that makes a real difference.
            </p>
            <a href="/contact" className="btn-primary inline-block">Contact Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
