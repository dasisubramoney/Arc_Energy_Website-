import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import './Victron.css'

export default function Victron() {
  const [leftRef, leftInView] = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section className="victron" id="victron" aria-labelledby="victron-heading">
      <div className="victron__stripe-bg" aria-hidden="true" />
      <div className="container victron__inner">
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

        <div
          ref={rightRef}
          className={`victron__diagram-wrap fade-right ${rightInView ? 'visible' : ''}`}
        >
          {/* Real equipment photo */}
          <div className="victron__photo-wrap">
            <img
              src="/images/victron-equipment.jpg"
              alt="Victron MultiPlus-II inverter with battery bank installation"
              className="victron__photo"
              loading="lazy"
            />
            <div className="victron__photo-badge">
              <span className="victron__photo-dot" aria-hidden="true" />
              Live Installation
            </div>
          </div>
          {/* SVG flow diagram below */}
          <VictronSystemDiagram />
        </div>
      </div>
    </section>
  )
}

function VictronSystemDiagram() {
  return (
    <div className="victron__diagram">
      <svg viewBox="0 0 400 460" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Solar Panels */}
        <rect x="140" y="10" width="120" height="70" rx="6" fill="#0D1526" stroke="#0066FF" strokeWidth="1.5" />
        <line x1="140" y1="33" x2="260" y2="33" stroke="#0066FF" strokeWidth="0.8" opacity="0.4" />
        <line x1="140" y1="56" x2="260" y2="56" stroke="#0066FF" strokeWidth="0.8" opacity="0.4" />
        <line x1="200" y1="10" x2="200" y2="80" stroke="#0066FF" strokeWidth="0.8" opacity="0.4" />
        <text x="200" y="98" textAnchor="middle" fill="#8A9DC0" fontSize="11" fontFamily="JetBrains Mono, monospace">Solar Panels</text>

        {/* Solar → MPPT flow */}
        <line x1="200" y1="80" x2="200" y2="120" stroke="#00D4FF" strokeWidth="2" strokeDasharray="6,4" className="victron-flow" />
        <circle cx="200" cy="80" r="4" fill="#00D4FF" />

        {/* MPPT */}
        <rect x="100" y="120" width="200" height="65" rx="8" fill="#0D1526" stroke="#00D4FF" strokeWidth="1.5" />
        <rect x="118" y="136" width="35" height="30" rx="4" fill="rgba(0,212,255,0.1)" />
        <rect x="163" y="136" width="35" height="30" rx="4" fill="rgba(0,212,255,0.1)" />
        <rect x="208" y="136" width="35" height="30" rx="4" fill="rgba(0,212,255,0.1)" />
        <path d="M123,151 L148,151 M135,143 L135,159" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <text x="200" y="204" textAnchor="middle" fill="#00D4FF" fontSize="11" fontFamily="JetBrains Mono, monospace">SmartSolar MPPT</text>

        {/* MPPT → Cerbo */}
        <line x1="200" y1="185" x2="200" y2="220" stroke="#00D4FF" strokeWidth="2" strokeDasharray="6,4" className="victron-flow" />
        <circle cx="200" cy="185" r="3" fill="#00D4FF" />

        {/* Cerbo GX */}
        <rect x="120" y="220" width="160" height="60" rx="8" fill="#0D1526" stroke="#FFB800" strokeWidth="1.5" />
        <circle cx="150" cy="250" r="7" fill="rgba(255,184,0,0.2)" stroke="#FFB800" strokeWidth="1" />
        <circle cx="175" cy="250" r="7" fill="rgba(255,184,0,0.2)" stroke="#FFB800" strokeWidth="1" />
        <circle cx="200" cy="250" r="7" fill="rgba(255,184,0,0.2)" stroke="#FFB800" strokeWidth="1" />
        <circle cx="225" cy="250" r="7" fill="rgba(255,184,0,0.2)" stroke="#FFB800" strokeWidth="1" />
        <text x="200" y="298" textAnchor="middle" fill="#FFB800" fontSize="11" fontFamily="JetBrains Mono, monospace">Cerbo GX</text>

        {/* Cerbo → Multiplus */}
        <line x1="200" y1="280" x2="200" y2="315" stroke="#0066FF" strokeWidth="2" strokeDasharray="6,4" className="victron-flow" />
        <circle cx="200" cy="280" r="3" fill="#0066FF" />

        {/* Multiplus */}
        <rect x="80" y="315" width="240" height="75" rx="8" fill="#0D1526" stroke="#0066FF" strokeWidth="2" />
        <rect x="98" y="330" width="70" height="45" rx="5" fill="rgba(0,102,255,0.1)" />
        <rect x="216" y="330" width="70" height="45" rx="5" fill="rgba(0,102,255,0.1)" />
        <path d="M115,352 L133,345 L133,359 Z" fill="#00D4FF" opacity="0.7" />
        <path d="M249,345 L231,352 L249,359 Z" fill="#0066FF" opacity="0.7" />
        <text x="200" y="406" textAnchor="middle" fill="#8A9DC0" fontSize="11" fontFamily="JetBrains Mono, monospace">Multiplus Inverter/Charger</text>

        {/* Multiplus → Battery & Loads */}
        <line x1="130" y1="390" x2="90" y2="420" stroke="#00D4FF" strokeWidth="2" strokeDasharray="6,4" className="victron-flow" />
        <line x1="270" y1="390" x2="310" y2="420" stroke="#0066FF" strokeWidth="2" strokeDasharray="6,4" className="victron-flow" />

        {/* Battery */}
        <rect x="20" y="420" width="140" height="30" rx="6" fill="#0D1526" stroke="#00D4FF" strokeWidth="1.5" />
        <rect x="32" y="427" width="20" height="16" rx="2" fill="rgba(0,212,255,0.25)" />
        <rect x="58" y="427" width="20" height="16" rx="2" fill="rgba(0,212,255,0.25)" />
        <rect x="84" y="427" width="20" height="16" rx="2" fill="rgba(0,212,255,0.25)" />
        <rect x="110" y="427" width="20" height="16" rx="2" fill="rgba(0,212,255,0.25)" />
        <text x="90" y="463" textAnchor="middle" fill="#8A9DC0" fontSize="10" fontFamily="JetBrains Mono, monospace">Battery Bank</text>

        {/* Loads */}
        <rect x="240" y="420" width="140" height="30" rx="6" fill="#0D1526" stroke="#0066FF" strokeWidth="1.5" />
        <path d="M265,435 L280,428 L280,442 L295,435" fill="none" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        <circle cx="325" cy="435" r="7" fill="none" stroke="#0066FF" strokeWidth="1.5" opacity="0.6" />
        <text x="310" y="463" textAnchor="middle" fill="#8A9DC0" fontSize="10" fontFamily="JetBrains Mono, monospace">AC Loads</text>

        {/* Glow nodes */}
        <circle cx="200" cy="120" r="5" fill="#00D4FF" className="pulse-dot" />
        <circle cx="200" cy="220" r="5" fill="#FFB800" className="pulse-dot" />
        <circle cx="200" cy="315" r="5" fill="#0066FF" className="pulse-dot" />
      </svg>
    </div>
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
