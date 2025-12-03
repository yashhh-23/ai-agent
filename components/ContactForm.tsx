'use client'

import React, { useState } from 'react'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

export default function ContactForm(): JSX.Element {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const emailRegex = /^\S+@\S+\.\S+$/

  function validateField(name: keyof FormValues, value: string): string | undefined {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required.'
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email is required.'
      if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.'
    }
    if (name === 'message') {
      if (!value.trim()) return 'Message is required.'
    }
    return undefined
  }

  function validateAll(): FormErrors {
    const nextErrors: FormErrors = {}
    (Object.keys(values) as (keyof FormValues)[]).forEach((k) => {
      const err = validateField(k, values[k])
      if (err) nextErrors[k] = err
    })
    return nextErrors
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target
    setValues((s) => ({ ...s, [id]: value }))
    // live-validate but don't show errors until touched
    setErrors((prev) => ({ ...prev, [id]: validateField(id as keyof FormValues, value) }))
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target
    setTouched((t) => ({ ...t, [id]: true }))
    setErrors((prev) => ({ ...prev, [id]: validateField(id as keyof FormValues, value) }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // mark all touched so errors appear if present
    const allTouched: Record<string, boolean> = {}
    Object.keys(values).forEach((k) => (allTouched[k] = true))
    setTouched(allTouched)

    const nextErrors = validateAll()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setSubmitting(true)
    setSuccess(false)

    // simulate submission
    await new Promise((res) => setTimeout(res, 800))

    setSubmitting(false)
    setSuccess(true)
    // reset form
    setValues({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    setTouched({})
    setErrors({})

    // hide success after a short while (optional)
    setTimeout(() => setSuccess(false), 5000)
  }

  const inputBaseClass =
    'block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400'

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Supporting text */}
          <div className="md:col-span-5">
            <h2 id="contact-heading" className="text-2xl font-bold text-slate-900">
              Get in touch
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Tell us about your project or ask a question — we'll get back to you within 1–2 business days.
            </p>

            <div className="mt-6 text-sm text-neutral-700">
              <p className="font-medium">Office</p>
              <p className="text-neutral-500">Mumbai, India</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-7 bg-white rounded-lg border border-neutral-100 p-6 shadow-sm"
            noValidate
          >
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                className={`${inputBaseClass} ${
                  touched.name && errors.name ? 'border-red-300' : 'border-neutral-200'
                }`}
              />
              {touched.name && errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                className={`${inputBaseClass} ${
                  touched.email && errors.email ? 'border-red-300' : 'border-neutral-200'
                }`}
              />
              {touched.email && errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                Subject (optional)
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.subject && errors.subject)}
                aria-describedby={touched.subject && errors.subject ? 'subject-error' : undefined}
                className={`${inputBaseClass} ${touched.subject && errors.subject ? 'border-red-300' : 'border-neutral-200'}`}
              />
              {touched.subject && errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                className={`${inputBaseClass} ${touched.message && errors.message ? 'border-red-300' : 'border-neutral-200'}`}
              />
              {touched.message && errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center px-6 py-3 text-base bg-indigo-600 text-white rounded-md shadow-sm disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {submitting ? 'Sending...' : 'Send message'}
              </button>

              {success && (
                <div role="status" className="text-sm text-green-600">
                  Thanks! Your message has been sent.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
