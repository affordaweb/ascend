'use client'

import { useState, FormEvent } from 'react'
import { Mail } from 'lucide-react'

// AffordaWeb centralized contact form — pre-wired and ready to use.
const SITE_NAME = 'ascend'
const API_URL = 'https://contact-form-lake-theta.vercel.app/api/contact'

const inputClass =
  'w-full border border-[#d8d7cc] bg-[#fffdf8] px-4 py-3 text-[#283037] text-sm focus:outline-none focus:border-[#1f5139] focus:ring-2 focus:ring-[#8ba184]/30 transition-all'

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
      <div className="bg-[#A9D6B6]/20 border border-[#A9D6B6] rounded-2xl p-10 text-center">
        <div className="w-12 h-12 bg-[#A9D6B6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail size={22} className="text-[#A9D6B6]" />
        </div>
        <h3 className="font-serif text-xl font-bold text-[#3A3C51] mb-2">
          Message Received
        </h3>
        <p className="text-[#474747]">
          Thank you for reaching out. We&apos;ll get back to you with care.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text" name="name" required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email" name="email" required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
          Phone Number
        </label>
        <input
          type="tel" name="phone"
          placeholder="+63 912 345 6789"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
          Service Interested In
        </label>
        <select name="service" className={inputClass}>
          <option value="">Select a service…</option>
          <option value="Strategic Consulting">Strategic Consulting</option>
          <option value="Trainings & Seminars">Customized Trainings &amp; Seminars</option>
          <option value="Organizational Reporting">Organizational Reporting</option>
          <option value="Other">Other / General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-[#3A3C51] text-sm font-medium mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message" required rows={6}
          placeholder="Tell us more..."
          className={inputClass + ' resize-none'}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-xs text-center">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary flex w-full items-center justify-center gap-2 px-8 py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-gray-400 text-[11px] text-center pt-1">
        Powered by{' '}
        <a
          href="https://affordawebsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3A3C51] transition-colors underline underline-offset-2"
        >
          AffordaWeb Solutions
        </a>
      </p>
    </form>
  )
}
