import type { Metadata } from 'next'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Exclusive IMG Perks — Ascend Development Solutions',
  description: 'Unlock extraordinary IMG member benefits — healthcare, life insurance, investments, travel rewards, and world-class recognition through Ascend Development Solutions.',
}

export default function ExclusiveIMGPerksPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[50vh] bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] flex items-center py-24 px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="section-label mb-4">International Marketing Group</p>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-6">
              Exclusive IMG Perks
            </h1>
            <p className="text-xl text-[#fbbf24] font-[family-name:var(--font-playfair)] italic mb-6">
              Your Gateway to Financial Empowerment and Life Enrichment
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Unlock a world of extraordinary advantages designed to empower your financial growth and personal well-being. As a proud member of the International Marketing Group (IMG), you gain access to exclusive benefits that not only strengthen your financial foundation but also enrich your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://1204jf.imgcorp.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Be an IMG Member
              </a>
              <a href="https://1204jf.imgcorp.com/buildingyourfuture/register.html" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Attend Webinar
              </a>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/3a105775775.png" alt="IMG Perks" width={1200} height={600} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Financial Check-up */}
        <section className="bg-[#f0f4f8] py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-label mb-3">Start Here</p>
            <div className="accent-line mb-6" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Your Financial Check-Up Awaits
            </h2>
            <p className="text-[#1a1a2e]/70 leading-relaxed mb-6 text-lg">
              IMG provides members with a comprehensive financial check-up—a personalized review of your current financial health and a roadmap toward your goals. Whether you&apos;re building your emergency fund, planning for retirement, or growing your investments, IMG&apos;s team of licensed financial advisors is here to guide you every step of the way.
            </p>
            <p className="text-[#1a1a2e]/70 leading-relaxed mb-10">
              This is not just financial advice—it&apos;s a life-changing conversation that sets you on a path toward genuine financial freedom and peace of mind.
            </p>
            <a href="https://1204jf.imgcorp.com/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Be an IMG Member Now
            </a>
          </div>
        </section>

        {/* 6 Cards */}
        <section className="bg-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Member Benefits</p>
              <div className="accent-line mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Experience Rewards That Go Beyond Finances
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Healthcare Access',
                  body: 'IMG members gain access to quality healthcare benefits through top-tier health insurance programs. From preventive care to major medical needs, your health and your family\'s well-being are protected.',
                },
                {
                  title: 'Life Insurance Benefits',
                  body: 'Secure your family\'s future with comprehensive life insurance solutions. IMG connects you with trusted providers offering coverage that gives you peace of mind today and protection for tomorrow.',
                },
                {
                  title: 'Investment Opportunities',
                  body: 'Build long-term wealth through guided investment programs tailored to your risk profile and financial goals. Grow your money with confidence through IMG\'s expert-backed investment platforms.',
                },
                {
                  title: 'Travel Opportunities',
                  body: 'High-performing IMG members are rewarded with exclusive travel incentives—local and international trips that celebrate milestones, build community, and inspire continued excellence.',
                },
                {
                  title: 'World-Class Recognition',
                  body: 'Your achievements deserve to be celebrated. IMG\'s recognition programs honor top performers through awards, conventions, and platforms that elevate your professional standing on a global stage.',
                },
                {
                  title: 'Community and Network',
                  body: 'Join a vibrant community of driven individuals committed to financial literacy and personal growth. Through events, training, and collaboration, you grow not just in wealth—but in wisdom and connection.',
                },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl border border-gray-100 card-hover p-8">
                  <div className="h-1 w-full rounded-full mb-6" style={{background:'linear-gradient(to right, #f59e0b, #2563eb)'}} />
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1e3a5f] mb-3">{card.title}</h3>
                  <p className="text-[#1a1a2e]/70 leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] rounded-2xl p-10 text-center">
              <p className="text-white/80 text-lg italic max-w-3xl mx-auto">
                &ldquo;Every benefit we offer at IMG is built on a foundation of <span className="text-[#f59e0b] font-bold not-italic">EMPOWERMENT</span>—designed to help you rise financially, personally, and professionally.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Kaiser Health Builder */}
        <section className="bg-[#0f2744] py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{background:'radial-gradient(circle, #f59e0b, transparent)'}} />
          </div>
          <div className="max-w-4xl mx-auto text-center text-white relative z-10">
            <p className="section-label mb-3">Featured Program</p>
            <div className="accent-line mb-8" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
              Secure Your Future with Kaiser Health Builder
            </h2>
            <p className="text-[#fbbf24] font-[family-name:var(--font-playfair)] italic text-xl mb-8">
              The Ultimate 3-in-1 Solution for Health, Savings, and Investment
            </p>
            <p className="text-white/70 leading-relaxed mb-6 text-lg">
              The Kaiser Health Builder is a revolutionary financial product that combines healthcare coverage, savings, and investment in one powerful plan. It&apos;s designed for Filipinos who want comprehensive protection today while building wealth for tomorrow.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              With Kaiser Health Builder, your premiums don&apos;t just cover your health—they work for you. This unique product allows you to access quality healthcare while simultaneously growing a fund you can use for education, retirement, or any major life goal. It&apos;s smart, flexible, and built for those who think ahead.
            </p>
            <a href="https://img.com.ph/quote/UKHB/?agentcode=1204jf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Ultimate Kaiser Health Builder
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
