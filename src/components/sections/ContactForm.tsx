'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

const inquiryTypes = [
  'Product Enquiry',
  'Request a Quote',
  'Technical Support',
  'Become a Distributor',
  'Other',
]

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  inquiry: string
  message: string
}

const initial: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  inquiry: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setError(null)
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured. Please contact us directly.')
      console.error('Missing EmailJS env vars:', {
        serviceId,
        templateId,
        publicKey,
      })
      return
    }

    try {
      setLoading(true)

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'ronakdhyani16@gmail.com',
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          inquiry: form.inquiry,
          message: form.message,
        },
        publicKey
      )

      setSubmitted(true)
      setForm(initial)
    } catch (err: unknown) {
      console.error('EmailJS error:', err)
      const detail =
        err && typeof err === 'object' && 'text' in err
          ? (err as { text: string }).text
          : 'Unknown error'
      setError(`Failed to send message (${detail}). Please try again.`)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-5">
          <CheckCircle2 size={32} className="text-brand-orange" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-brand-grey mb-3">
          Message Received
        </h3>
        <p className="text-brand-grey-light text-base max-w-md leading-relaxed mb-6">
          Thank you for reaching out. A member of our sales team will respond
          within one business day.
        </p>
        <button
          onClick={() => {
            setForm(initial)
            setSubmitted(false)
          }}
          className="text-brand-orange text-sm font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wide mb-1.5">
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2.5 border border-brand-grey-border rounded text-sm text-brand-grey placeholder:text-brand-grey-light focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wide mb-1.5">
            Company <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full px-4 py-2.5 border border-brand-grey-border rounded text-sm text-brand-grey placeholder:text-brand-grey-light focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wide mb-1.5">
            Email Address <span className="text-brand-orange">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Email Id"
            className="w-full px-4 py-2.5 border border-brand-grey-border rounded text-sm text-brand-grey placeholder:text-brand-grey-light focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wide mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full px-4 py-2.5 border border-brand-grey-border rounded text-sm text-brand-grey placeholder:text-brand-grey-light focus:outline-none focus:border-brand-orange transition-colors duration-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wide mb-1.5">
          Enquiry Type <span className="text-brand-orange">*</span>
        </label>
        <select
          name="inquiry"
          required
          value={form.inquiry}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-brand-grey-border rounded text-sm text-brand-grey focus:outline-none focus:border-brand-orange transition-colors duration-200 bg-white"
        >
          <option value="">Select enquiry type</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-grey uppercase tracking-wide mb-1.5">
          Message <span className="text-brand-orange">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Please describe your requirements — material grade, application, volumes, and any technical specifications..."
          className="w-full px-4 py-2.5 border border-brand-grey-border rounded text-sm text-brand-grey placeholder:text-brand-grey-light focus:outline-none focus:border-brand-orange transition-colors duration-200 resize-none"
        />
      </div>

      {error && (
        <div className="flex items-start gap-3 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full justify-center"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={15} /> Send Enquiry
          </span>
        )}
      </Button>
    </form>
  )
}
