'use client'

import { useState, FormEvent } from 'react'

// AffordaWeb centralized contact form — pre-wired and ready to use.
// 1. Set SITE_NAME to the client shortname (e.g. "johnsplumbing")
// 2. Add the client's production domain to ALLOWED_ORIGINS in the Vercel contact-form project
//    https://vercel.com/affordawebsolutions-3179s-projects/contact-form/settings/environment-variables
// 3. Customize fields as needed — any extra fields are passed through and shown in the email

const SITE_NAME = 'ascend'
const API_URL = 'https://contact-form-lake-theta.vercel.app/api/contact'

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
          // Add extra fields here — they appear in the email automatically
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
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from humans, filled by bots */}
      <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text" id="name" name="name" required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email" id="email" name="email" required
            placeholder="jane@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
          Phone <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel" id="phone" name="phone"
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold mb-2">
          Service Interested In
        </label>
        <select
          id="service" name="service"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        >
          <option value="">Select a service…</option>
          {/* Customize these options per client */}
          <option value="service-1">Service 1</option>
          <option value="service-2">Service 2</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="Tell us about your project…"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 px-8 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm text-red-500">{errorMsg}</p>
      )}
    </form>
  )
}
