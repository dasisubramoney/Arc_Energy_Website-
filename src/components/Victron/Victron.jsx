import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import VictronDiagramDetailed from './VictronDiagramDetailed'
import './Victron.css'

export default function Victron() {
  const [leftRef, leftInView] = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section className="victron" id="victron" aria-labelledby="victron-heading">
      <div className="victron__stripe-bg" aria-hidden="true" />
      <div className="container victron__inner">

        {/* ── Left: text content ── */}
        <div
          ref={leftRef}
          className={`victron__content fade-left ${leftInView ? 'visible' : ''}`}
        >
          <span className="section-badge">
            <ShieldCheck /> Official Victron Installer
          </span>
          <h2 id="victron-heading" className="section-heading">
            The Victron Ecosystem —<br />
            <span className="gradient-text">We Know It Inside Out</span>
          </h2>
          <p className="victron__body">{company.victronBody}</p>

          <ul className="victron__products" aria-label="Victron products we work with">
            {company.victronProducts.map((product, i) => (
              <li key={i} className="victron__product-item">
                <span className="victron__check" aria-hidden="true">
                  <CheckIcon />
                </span>
                <span>{product}</span>
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="btn-primary victron__cta"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Our Victron Services
            <ArrowRight />
          </a>
        </div>

        {/* ── Right: photo banner + compact interactive diagram ── */}
        <div
          ref={rightRef}
          className={`victron__right fade-right ${rightInView ? 'visible' : ''}`}
        >
          {/* Small photo strip with "Live Installation" badge */}
          <div className="victron__photo-wrap">
            <img
              src="/images/victron-equipment.jpg"
              alt="Victron MultiPlus-II inverter with battery bank installation"
              className="victron__photo"
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="victron__photo-badge">
              <span className="victron__photo-dot" aria-hidden="true" />
              Live Installation
            </div>
          </div>

          {/* Compact interactive system diagram */}
          <div className="victron__diagram-panel">
            <VictronDiagramDetailed compact />
          </div>
        </div>

      </div>
    </section>
  )
}

function ShieldCheck() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
