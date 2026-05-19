import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import './HowItWorks.css'

const stepIcons = [<PhoneIcon />, <MonitorIcon />, <TruckIcon />, <HeadphonesIcon />]

export default function HowItWorks() {
  const [ref, isInView] = useInView()

  return (
    <section className="how" id="how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <div ref={ref} className={`how__header animate ${isInView ? 'visible' : ''}`}>
          <span className="section-badge"><GearIcon /> Our Process</span>
          <h2 id="how-heading" className="section-heading">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subheading how__subheading">
            A simple, transparent process — from your first message to long-term system support.
          </p>
        </div>

        {/* Timeline wrapper — drawing line lives here */}
        <div className={`how__timeline-wrap ${isInView ? 'line-visible' : ''}`}>
          <div className="how__timeline" role="list">
            {company.howItWorks.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} icon={stepIcons[i]} />
            ))}
          </div>
          {/* Animated traveling dot */}
          <div className={`how__travel-dot ${isInView ? 'traveling' : ''}`} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index, icon }) {
  const [ref, isInView] = useInView()

  return (
    <article
      ref={ref}
      className={`step-card animate anim-delay-${index + 1} ${isInView ? 'visible' : ''}`}
      role="listitem"
    >
      <div
        className={`step-card__number ${isInView ? 'pop-in' : ''}`}
        aria-label={`Step ${step.step}`}
        style={{ animationDelay: `${0.15 + index * 0.15}s` }}
      >
        <span className="step-card__num-text">{String(step.step).padStart(2, '0')}</span>
      </div>
      <div className="step-card__icon" aria-hidden="true">{icon}</div>
      <h3 className="step-card__title">{step.title}</h3>
      <p className="step-card__desc">{step.description}</p>
    </article>
  )
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l1.81-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 10l3 3 6-6" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 4v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function HeadphonesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}
