'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What does Ascend Development Solutions (ADS) do?',
    a: 'ADS provides professional consulting, trainings & seminars, and organizational reporting designed to help individuals and organizations achieve sustainable growth. We focus on integrity-driven strategies that strengthen both performance and purpose.',
  },
  {
    q: 'What makes ADS different from other consulting or training firms?',
    a: 'Our approach is rooted in Filipino values—loob (inner integrity) and kapwa (shared humanity). This means we go beyond surface-level solutions to understand the deeper needs of your people and organization, ensuring growth that is both genuine and lasting.',
  },
  {
    q: 'Who can benefit from your services?',
    a: 'ADS partners with organizations across sectors—corporate, government, academic, and non-profit—seeking strategic growth, leadership development, or capacity-building programs tailored to their goals.',
  },
  {
    q: 'What types of training and seminars do you offer?',
    a: "We customize our learning sessions to match your organization's objectives. Topics may include leadership development, performance management, communication skills, organizational culture building, and strategic planning.",
  },
  {
    q: 'How do your consulting engagements work?',
    a: 'Every project begins with a discovery phase where we listen, analyze, and understand your challenges. From there, we design a data-informed strategy and collaborate closely with your team to implement practical, sustainable solutions.',
  },
  {
    q: 'What is organizational reporting, and why is it important?',
    a: 'Organizational reporting provides insight into your operations, workforce, and performance. Our reports help leaders make informed decisions by translating complex data into actionable recommendations aligned with your strategic goals.',
  },
  {
    q: 'Can ADS customize its programs for specific industries?',
    a: "Yes. Our team tailors every solution to your organization's structure, industry, and culture. We blend global best practices with local insight to ensure relevance and effectiveness.",
  },
  {
    q: 'Do you conduct face-to-face and online sessions?',
    a: 'Yes. We offer both in-person and virtual engagements to accommodate your team wherever they are. Our facilitators are experienced in delivering impactful sessions across both formats.',
  },
  {
    q: 'How long do your consulting or training projects usually last?',
    a: 'Project duration depends on the scope and objectives. Some training programs may be completed in a single session, while consulting engagements may span several weeks or months for full implementation.',
  },
  {
    q: 'How can we get started with ADS?',
    a: "Simply reach out to our team through our contact page or email us directly. We'll schedule a consultation to understand your goals, assess your needs, and design a tailored proposal to help you begin your ascent.",
  },
]

export default function FAQAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openFaq === i
        return (
          <div
            key={i}
            className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'shadow-xl shadow-[#1e3a5f]/15 ring-1 ring-[#f59e0b]/40'
                : 'shadow-md shadow-[#1e3a5f]/08 ring-1 ring-transparent hover:shadow-lg hover:shadow-[#1e3a5f]/12 hover:ring-[#f59e0b]/20'
            }`}
          >
            {/* Left accent bar */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 rounded-l-2xl ${
                isOpen ? 'bg-[#f59e0b]' : 'bg-transparent group-hover:bg-[#f59e0b]/40'
              }`}
            />

            <button
              className={`w-full text-left pl-8 pr-6 py-5 flex items-center gap-5 transition-all duration-300 ${
                isOpen
                  ? 'bg-gradient-to-r from-[#f0f4f8] to-white'
                  : 'bg-white hover:bg-[#fafbfc]'
              }`}
              onClick={() => setOpenFaq(isOpen ? null : i)}
            >
              {/* Number badge */}
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#f59e0b] text-white'
                    : 'bg-[#f59e0b]/12 text-[#f59e0b] group-hover:bg-[#f59e0b]/20'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <span
                className={`flex-1 font-semibold text-sm md:text-base leading-snug transition-colors duration-300 ${
                  isOpen ? 'text-[#1e3a5f]' : 'text-[#1e3a5f]/80 group-hover:text-[#1e3a5f]'
                }`}
              >
                {faq.q}
              </span>

              <ChevronDown
                size={18}
                className={`shrink-0 transition-all duration-300 ${
                  isOpen ? 'text-[#f59e0b] rotate-180' : 'text-[#1e3a5f]/35 group-hover:text-[#f59e0b]/60'
                }`}
              />
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? '300px' : '0' }}
            >
              <div className="pl-8 pr-6 pb-6 pt-0 bg-gradient-to-r from-[#f0f4f8] to-white">
                <div className="pl-13 border-t border-[#f59e0b]/15 pt-4 ml-[52px]">
                  <p className="text-[#1a1a2e]/65 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
