'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

// AffordaWeb centralized contact form — pre-wired and ready to use.
const SITE_NAME = 'ascend'
const API_URL = 'https://contact-form-lake-theta.vercel.app/api/contact'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[#1e3a5f]/15 bg-white text-[#1a1a2e] text-sm placeholder:text-[#1a1a2e]/35 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40 focus:border-[#f59e0b] transition-all'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          website: SITE_NAME,
          _honeypot: data.get('_honeypot') ?? '',
          phone: data.get('phone'),
          service: data.get('service'),
        }),
      })

      const json = await res.json()

      if (json.ok) {
        setStatus('success')
        form.reset()
      } else {
        setErrorMsg(json.error || 'Submission failed.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 border-2 border-[#f59e0b]/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="text-[#f59e0b]" size={28} />
        </div>
        <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#1e3a5f] mb-2">
          Message Sent!
        </h3>
        <p className="text-[#1a1a2e]/60 text-sm leading-relaxed">
          Thank you for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-2">
            Full Name <span className="text-[#f59e0b]">*</span>
          </label>
          <input
            type="text" id="cf-name" name="name" required
            placeholder="Juan dela Cruz"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-2">
            Email Address <span className="text-[#f59e0b]">*</span>
          </label>
          <input
            type="email" id="cf-email" name="email" required
            placeholder="juan@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-2">
          Phone <span className="text-[#1a1a2e]/40 normal-case font-normal">(optional)</span>
        </label>
        <input
          type="tel" id="cf-phone" name="phone"
          placeholder="+63 912 345 6789"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-service" className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-2">
          Service Interested In
        </label>
        <select
          id="cf-service" name="service"
          className={inputClass}
        >
          <option value="">Select a service…</option>
          <option value="Strategic Consulting">Strategic Consulting</option>
          <option value="Trainings & Seminars">Customized Trainings &amp; Seminars</option>
          <option value="Organizational Reporting">Organizational Reporting</option>
          <option value="Other">Other / General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-2">
          Message <span className="text-[#f59e0b]">*</span>
        </label>
        <textarea
          id="cf-message" name="message" required rows={5}
          placeholder="Tell us about your organization and how we can help…"
          className={inputClass + ' resize-none'}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          <AlertCircle size={16} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-600">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === 'submitting' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-[#1a1a2e]/35 pt-1">
        Powered by{' '}
        <a
          href="https://affordawebsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1e3a5f] transition-colors underline underline-offset-2"
        >
          AffordaWeb Solutions
        </a>
      </p>
    </form>
  )
}
