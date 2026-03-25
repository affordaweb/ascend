import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Heart,
  Shield,
  TrendingUp,
  Plane,
  Award,
  Users,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroCanvas from '../components/HeroCanvas'

export const metadata: Metadata = {
  title: 'Exclusive IMG Perks — Ascend Development Solutions',
  description:
    'Unlock extraordinary IMG member benefits — healthcare, life insurance, investments, travel rewards, and world-class recognition through Ascend Development Solutions.',
}

const benefits = [
  {
    icon: Heart,
    title: 'Healthcare Access',
    body: "IMG members gain access to quality healthcare benefits through top-tier health insurance programs. From preventive care to major medical needs, your health and your family's well-being are protected.",
  },
  {
    icon: Shield,
    title: 'Life Insurance Benefits',
    body: "Secure your family's future with comprehensive life insurance solutions. IMG connects you with trusted providers offering coverage that gives you peace of mind today and protection for tomorrow.",
  },
  {
    icon: TrendingUp,
    title: 'Investment Opportunities',
    body: "Build long-term wealth through guided investment programs tailored to your risk profile and financial goals. Grow your money with confidence through IMG's expert-backed investment platforms.",
  },
  {
    icon: Plane,
    title: 'Travel Opportunities',
    body: "High-performing IMG members are rewarded with exclusive travel incentives — local and international trips that celebrate milestones, build community, and inspire continued excellence.",
  },
  {
    icon: Award,
    title: 'World-Class Recognition',
    body: "Your achievements deserve to be celebrated. IMG's recognition programs honor top performers through awards, conventions, and platforms that elevate your professional standing on a global stage.",
  },
  {
    icon: Users,
    title: 'Community & Network',
    body: 'Join a vibrant community of driven individuals committed to financial literacy and personal growth. Through events, training, and collaboration, you grow not just in wealth — but in wisdom and connection.',
  },
]

export default function ExclusiveIMGPerksPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="min-h-[60vh] bg-[#071829] flex items-center py-24 px-4 pt-32 relative overflow-hidden">
          <HeroCanvas />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-4">International Marketing Group</p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#f59e0b]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <div className="h-px w-12 bg-[#f59e0b]/50" />
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl font-bold leading-tight mb-4">
              Exclusive IMG Perks
            </h1>
            <p className="font-[family-name:var(--font-fraunces)] text-xl text-[#fbbf24] italic mb-6">
              Your Gateway to Financial Empowerment and Life Enrichment
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Unlock a world of extraordinary advantages designed to empower your financial growth
              and personal well-being. As a proud member of the International Marketing Group
              (IMG), you gain access to exclusive benefits that strengthen your financial
              foundation and enrich your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://1204jf.imgcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Be an IMG Member
              </a>
              <a
                href="https://1204jf.imgcorp.com/buildingyourfuture/register.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Attend Webinar
              </a>
            </div>
          </div>
        </section>

        {/* Perks Illustration */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/illus-harvest.svg"
                alt="IMG Perks"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Financial Check-up */}
        <section className="bg-[#f0f4f8] py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Start Here</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
                Your Financial Check-Up Awaits
              </h2>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-6">
                IMG provides members with a comprehensive financial check-up — a personalized
                review of your current financial health and a roadmap toward your goals. Whether
                you&apos;re building your emergency fund, planning for retirement, or growing your
                investments, IMG&apos;s team of licensed financial advisors is here to guide you.
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-8">
                This is not just financial advice — it&apos;s a life-changing conversation that
                sets you on a path toward genuine financial freedom and peace of mind.
              </p>
              <a
                href="https://1204jf.imgcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Be an IMG Member Now
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/illus-experts.svg"
                alt="Financial Planning"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Member Benefits — dark grid */}
        <section className="bg-[#0f2744] py-20 sm:py-28 px-4 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <p className="section-label mb-3">Member Benefits</p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#f59e0b]/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <div className="h-px w-12 bg-[#f59e0b]/50" />
              </div>
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-4">
                Experience Rewards That Go Beyond Finances
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Comprehensive benefits designed to protect, grow, and celebrate your life.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#f59e0b]/40 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-5">
                      <Icon className="text-[#f59e0b]" size={22} />
                    </div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-white mb-3">
                      {b.title}
                    </h3>
                    <p className="text-white/55 leading-relaxed text-sm flex-1">{b.body}</p>
                  </div>
                )
              })}
            </div>
            <div className="bg-white/5 border border-[#f59e0b]/20 rounded-2xl p-10 text-center">
              <p className="font-[family-name:var(--font-fraunces)] text-white/80 text-lg italic max-w-3xl mx-auto">
                &ldquo;Every benefit we offer at IMG is built on a foundation of{' '}
                <span className="text-[#f59e0b] font-bold not-italic">EMPOWERMENT</span> —
                designed to help you rise financially, personally, and professionally.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Kaiser Health Builder */}
        <section className="bg-[#f0f4f8] py-20 sm:py-28 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/illus-about.svg"
                alt="Kaiser Health Builder"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-3">Featured Program</p>
              <div className="accent-line mb-6" style={{ margin: '0.75rem 0 1.5rem' }} />
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                Secure Your Future with Kaiser Health Builder
              </h2>
              <p className="font-[family-name:var(--font-fraunces)] text-lg italic text-[#f59e0b] mb-6">
                The Ultimate 3-in-1 Solution for Health, Savings, and Investment
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-4">
                The Kaiser Health Builder is a revolutionary financial product that combines
                healthcare coverage, savings, and investment in one powerful plan. It&apos;s
                designed for Filipinos who want comprehensive protection today while building
                wealth for tomorrow.
              </p>
              <p className="text-[#1a1a2e]/70 leading-relaxed mb-8">
                With Kaiser Health Builder, your premiums don&apos;t just cover your health —
                they work for you. This unique product allows you to access quality healthcare
                while simultaneously growing a fund you can use for education, retirement, or any
                major life goal.
              </p>
              <a
                href="https://img.com.ph/quote/UKHB/?agentcode=1204jf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ultimate Kaiser Health Builder
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
