import { useState } from 'react'
import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import './Contact.css'

const serviceOptions = [
  'Victron System Design',
  'Remote Diagnostics',
  'On-Site Diagnostics',
  'Installation & Commissioning',
  'Electrical Callout',
  'General Electrical',
  'Other',
]

const urgencyOptions = [
  { value: 'not-urgent', label: 'Not Urgent' },
  { value: 'within-a-week', label: 'Within a Week' },
  { value: 'emergency', label: 'Emergency' },
]

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  urgency: 'not-urgent',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [leftRef, leftInView] = useInView()
  const [rightRef, rightInView] = useInView()

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.email.trim()) {
      e.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address'
    }
    if (!form.service) e.service = 'Please select a service type'
    if (!form.message.trim()) e.message = 'Please describe your enquiry'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
    setForm(INITIAL)
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__inner">
          {/* Left info panel */}
          <div
            ref={leftRef}
            className={`contact__info fade-left ${leftInView ? 'visible' : ''}`}
          >
            {/* Team photo */}
            <div className="contact__team-photo-wrap">
              <img
                src="/images/contact-team.jpg"
                alt="Arc Energy team in their workshop"
                className="contact__team-photo"
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="contact__team-photo-label">
                <span className="contact__team-dot" aria-hidden="true" />
                Your local Victron specialists
              </div>
            </div>

            <span className="section-badge">
              <MessageIcon /> Get In Touch
            </span>
            <h2 id="contact-heading" className="section-heading">
              Let's Talk <span className="gradient-text">Power</span>
            </h2>

            <div className="contact__info-items">
              <a href={`tel:${company.contact.phone}`} className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true"><PhoneIcon /></span>
                <div>
                  <div className="contact__info-label">Phone</div>
                  <div className="contact__info-value">{company.contact.phone}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${company.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__info-item contact__info-item--whatsapp"
              >
                <span className="contact__info-icon contact__info-icon--green" aria-hidden="true"><WhatsAppIcon /></span>
                <div>
                  <div className="contact__info-label">WhatsApp</div>
                  <div className="contact__info-value">Chat with us now</div>
                </div>
              </a>

              <a href={`mailto:${company.contact.email}`} className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true"><MailIcon /></span>
                <div>
                  <div className="contact__info-label">Email</div>
                  <div className="contact__info-value">{company.contact.email}</div>
                </div>
              </a>

              <div className="contact__info-item contact__info-item--emergency" role="alert">
                <span className="contact__info-icon contact__info-icon--red" aria-hidden="true"><AlertIcon /></span>
                <div>
                  <div className="contact__info-label">24/7 Emergency</div>
                  <a href={`tel:${company.contact.emergency}`} className="contact__info-value contact__emergency-num">
                    {company.contact.emergency}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__hours">
              <h3 className="contact__hours-heading">Business Hours</h3>
              <div className="contact__hours-row">
                <span>Monday – Friday</span>
                <span>{company.hours.weekdays}</span>
              </div>
              <div className="contact__hours-row">
                <span>Saturday</span>
                <span>{company.hours.saturday}</span>
              </div>
              <div className="contact__hours-row">
                <span>Sunday</span>
                <span className="contact__hours-emerg">{company.hours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div
            ref={rightRef}
            className={`contact__form-wrap fade-right ${rightInView ? 'visible' : ''}`}
          >
            {submitted ? (
              <div className="contact__success" role="status" aria-live="polite">
                <div className="contact__success-icon" aria-hidden="true">
                  <CheckCircleIcon />
                </div>
                <h3>Request Sent!</h3>
                <p>
                  Thanks for reaching out. We'll get back to you within{' '}
                  {form.urgency === 'emergency' ? 'the hour' : '24 hours'}.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Quote request form"
              >
                <div className="contact__form-grid">
                  <div className={`form-field ${errors.name ? 'form-field--error' : ''}`}>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error" role="alert">{errors.name}</span>
                    )}
                  </div>

                  <div className={`form-field ${errors.phone ? 'form-field--error' : ''}`}>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+27 82 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="form-error" role="alert">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className={`form-field ${errors.email ? 'form-field--error' : ''}`}>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">{errors.email}</span>
                  )}
                </div>

                <div className={`form-field ${errors.service ? 'form-field--error' : ''}`}>
                  <label htmlFor="service" className="form-label">Service Type</label>
                  <select
                    id="service"
                    name="service"
                    className="form-input form-select"
                    value={form.service}
                    onChange={handleChange}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <span id="service-error" className="form-error" role="alert">{errors.service}</span>
                  )}
                </div>

                <div className={`form-field ${errors.message ? 'form-field--error' : ''}`}>
                  <label htmlFor="message" className="form-label">System Details / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Describe your current setup, the issue you're experiencing, or what you'd like to achieve..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">{errors.message}</span>
                  )}
                </div>

                <fieldset className="form-field">
                  <legend className="form-label">How urgent is this?</legend>
                  <div className="form-radio-group" role="group">
                    {urgencyOptions.map((opt) => (
                      <label key={opt.value} className="form-radio-label">
                        <input
                          type="radio"
                          name="urgency"
                          value={opt.value}
                          checked={form.urgency === opt.value}
                          onChange={handleChange}
                          className="form-radio"
                        />
                        <span className="form-radio-custom" aria-hidden="true" />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className={`btn-primary contact__submit ${submitting ? 'contact__submit--loading' : ''}`}
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? (
                    <>
                      <Spinner />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request
                      <SendIcon />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.81-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" className="spinner">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}
