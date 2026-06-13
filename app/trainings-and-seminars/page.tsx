import type { Metadata } from 'next'
import Image from 'next/image'
import { PenLine, Zap, UserCheck, Heart, ClipboardCheck, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrainingsHeroCanvas from '../components/TrainingsHeroCanvas'

export const metadata: Metadata = {
  title: 'Trainings & Seminars — Ascend Development Solutions',
  description:
    'ADS offers customized trainings and seminars to empower people through learning and growth — leadership, communication, culture, and values-driven development.',
}

const approaches = [
  {
    icon: PenLine,
    title: 'Customized Learning Design',
    body: "We don't believe in one-size-fits-all training. Every program we develop is tailored to your organization's objectives, culture, and team dynamics — ensuring relevance, engagement, and lasting behavioral change.",
  },
  {
    icon: Zap,
    title: 'Engaging & Experiential Sessions',
    body: 'Our trainers use interactive methods — case studies, simulations, group discussions, and reflective exercises — to create learning experiences that resonate deeply and translate directly into workplace practice.',
  },
  {
    icon: UserCheck,
    title: 'Expert Facilitators & Trainers',
    body: 'Our facilitators bring real-world expertise and a genuine passion for people development. They create safe, inclusive spaces where participants feel empowered to learn, share, and grow.',
  },
  {
    icon: Heart,
    title: 'Values-Centered Development',
    body: 'Every program is anchored in the principles of integrity, collaboration, and respect. We go beyond skills training to help individuals connect their personal values with their professional roles.',
  },
  {
    icon: ClipboardCheck,
    title: 'Post-Training Evaluation & Support',
    body: "Learning doesn't end when the session does. We provide post-training evaluation tools and ongoing support to help organizations measure impact and sustain the gains made through our programs.",
  },
]

export default function TrainingsSeminarsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="min-h-[55vh] bg-[#150e04] flex items-center py-24 px-4 pt-32 relative overflow-hidden">
          <TrainingsHeroCanvas />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-4">What We Offer</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-bold leading-tight mb-4">
              Trainings &amp; Seminars
            </h1>
            <p className="font-[family-name:var(--font-fraunces)] text-xl md:text-2xl text-[#fbbf24] italic mb-4">
              Empowering People Through Learning and Growth
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We design and deliver customized learning programs that build capability, inspire
              leadership, and align teams around shared values and goals.
            </p>
          </div>
        </section>

        {/* Strengthening Teams */}
        <section className="bg-white py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/illus-training.png"
                alt="Trainings and Seminars"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-3">Our Training Philosophy</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                Strengthening Teams, Inspiring Leaders
              </h2>
              <p className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#f59e0b] mb-6">
                &ldquo;Meaningful learning transforms not just what people know — but how they
                think, lead, and grow together.&rdquo;
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                At ADS, we believe that people are an organization&apos;s greatest asset. Our
                training programs are designed to unlock that potential — creating environments
                where individuals grow, teams collaborate effectively, and organizations thrive.
                Every session is crafted with purpose, relevance, and impact in mind.
              </p>
              <ul className="space-y-2 text-[#1a1a2e]/70 text-sm">
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

        {/* Training Approach — dark grid */}
        <section className="bg-[#0f2744] py-20 sm:py-28 px-4 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="section-label mb-3">How We Deliver</p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#f59e0b]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <div className="h-px w-12 bg-[#f59e0b]/50" />
              </div>
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-4">
                Our Training Approach
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Learning experiences designed to resonate deeply and drive lasting change.
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
        <section className="relative bg-[#0f2744] py-20 sm:py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/cta-wave-3.png"
              alt=""
              width={900}
              height={450}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[130%] w-auto object-contain select-none"
              style={{ mixBlendMode: 'screen', opacity: 0.13 }}
            />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, #0f2744 38%, transparent 75%)' }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="section-label mb-3">Empower Your Team</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build a Learning Culture Together
            </h2>
            <blockquote className="font-[family-name:var(--font-fraunces)] text-xl italic text-[#f59e0b] mb-8 max-w-2xl mx-auto">
              &ldquo;Growth is not an event — it is a culture. Let us help you cultivate it.&rdquo;
            </blockquote>
            <p className="text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
              Ready to invest in your most valuable asset — your people? Reach out to ADS today
              to design a training program that makes a real difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </a>
              <a href="/consulting" className="btn-ghost">View Consulting</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
