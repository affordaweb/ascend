'use client'
import { useState } from 'react'

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
    a: "Yes. Our team tailors every solution to your organization's structure, industry, and culture. We blend global best practices with local insight to ensure relevance and effectiveness.",
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
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-[#3A3C51] font-semibold hover:bg-gray-50 transition-colors"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            <span>{faq.q}</span>
            <span className="text-[#A9D6B6] text-xl shrink-0">{openFaq === i ? '−' : '+'}</span>
          </button>
          {openFaq === i && (
            <div className="px-6 pb-5 text-[#474747] leading-relaxed text-sm border-t border-gray-100 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
