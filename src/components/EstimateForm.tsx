import { FormEvent, useState } from 'react'
import { HiOutlinePhone, HiOutlineCheckCircle } from 'react-icons/hi'

interface FormState {
  name: string
  phone: string
  email: string
  address: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  service: '',
  message: '',
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const services = [
  'Roof Repair',
  'Roof Replacement',
  'Shingle Repair & Replacement',
  'Gutter Services',
  'Skylights',
  'Chimney Cap Replacement',
  'Roof Maintenance',
  'Not Sure Yet',
]

export default function EstimateForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (!/^[\d\s()+-]{7,}$/.test(form.phone)) next.phone = 'Please enter a valid phone number.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.address.trim()) next.address = 'Please enter your property address.'
    if (!form.service) next.service = 'Please select a service.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      // No backend is configured for this build — simulate submission.
      await new Promise((resolve) => setTimeout(resolve, 1100))
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FormState) =>
    `w-full border bg-transparent px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/40 focus:outline-none ${
      errors[field] ? 'border-burgundy-400' : 'border-cream-50/20 focus:border-gold-300'
    }`

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center border border-cream-50/15 bg-charcoal-900 p-10 text-center">
        <HiOutlineCheckCircle size={40} className="text-gold-300" />
        <h3 className="mt-5 font-serif text-2xl text-cream-50">Request received.</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-100/70">
          Thank you — we&rsquo;ll be in touch shortly to talk through your
          roof. For anything urgent, call us directly at (770) 279-2621.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs font-semibold tracking-[0.12em] uppercase text-gold-300 underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-cream-50/15 bg-charcoal-900 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-[11px] font-semibold tracking-[0.1em] uppercase text-cream-100/60">
            Full Name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1.5 text-xs text-burgundy-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[11px] font-semibold tracking-[0.1em] uppercase text-cream-100/60">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" className="mt-1.5 text-xs text-burgundy-400">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-[11px] font-semibold tracking-[0.1em] uppercase text-cream-100/60">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1.5 text-xs text-burgundy-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-[11px] font-semibold tracking-[0.1em] uppercase text-cream-100/60">
            Service Needed
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update('service', e.target.value)}
            className={`${inputClass('service')} ${form.service ? '' : 'text-cream-100/40'}`}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="" disabled className="text-charcoal-900">
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="text-charcoal-900">
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p id="service-error" className="mt-1.5 text-xs text-burgundy-400">{errors.service}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className="mb-1.5 block text-[11px] font-semibold tracking-[0.1em] uppercase text-cream-100/60">
            Property Address
          </label>
          <input
            id="address"
            value={form.address}
            onChange={(e) => update('address', e.target.value)}
            className={inputClass('address')}
            aria-invalid={!!errors.address}
            aria-describedby={errors.address ? 'address-error' : undefined}
          />
          {errors.address && <p id="address-error" className="mt-1.5 text-xs text-burgundy-400">{errors.address}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-[11px] font-semibold tracking-[0.1em] uppercase text-cream-100/60">
            Message <span className="normal-case text-cream-100/40">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className={inputClass('message')}
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-5 text-sm text-burgundy-400">
          Something went wrong submitting your request. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-7 inline-flex w-full items-center justify-center bg-burgundy-500 px-8 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-cream-50 transition-colors hover:bg-burgundy-400 disabled:opacity-60 sm:w-auto"
      >
        {status === 'loading' ? 'Submitting…' : 'Request My Free Estimate'}
      </button>

      <div className="mt-8 flex items-center gap-3 border-t border-cream-50/10 pt-6">
        <HiOutlinePhone size={18} className="text-gold-300" />
        <div>
          <p className="text-xs text-cream-100/60">Prefer to talk?</p>
          <a href="tel:7702792621" className="text-sm font-semibold text-cream-50">
            (770) 279-2621 — Call Now
          </a>
        </div>
      </div>
    </form>
  )
}
