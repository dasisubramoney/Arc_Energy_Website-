import { useEffect, useRef } from 'react'
import { company } from '../../config/company'
import './Hero.css'

export default function Hero() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        scrollRef.current.style.opacity = window.scrollY > 100 ? '0' : '1'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Dark overlay over background photo */}
      <div className="hero__photo-overlay" aria-hidden="true" />

      <div className="hero__mesh" aria-hidden="true">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
      </div>

      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="hero__particle" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__arc-line" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="hero__arc-svg">
          <path
            className="hero__arc-path"
            d="M0,60 Q200,10 400,60 T800,60 T1200,60"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#0066FF" stopOpacity="0" />
              <stop offset="30%"  stopColor="#0066FF" stopOpacity="0.8" />
              <stop offset="70%"  stopColor="#00D4FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge section-badge">
            <BoltSmall /> Certified Victron Installer
          </div>

          <h1 className="hero__heading" aria-label="Power. Precision. Arc Energy.">
            <span className="hero__line hero__line--1">Power.</span>
            <span className="hero__line hero__line--2">Precision.</span>
            <span className="hero__line hero__line--3 gradient-text-anim">Arc Energy.</span>
          </h1>

          <p className="hero__sub">{company.subTagline}</p>

          <div className="hero__ctas">
            <button
              className="btn-primary hero__cta-primary"
              onClick={() => scrollTo('#services')}
            >
              Explore Our Services
              <ArrowRight />
            </button>
            <button
              className="btn-ghost hero__cta-ghost"
              onClick={() => scrollTo('#contact')}
            >
              Contact Us
            </button>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <CheckCircle />
              <span>24/7 Emergency Response</span>
            </div>
            <div className="hero__trust-item">
              <CheckCircle />
              <span>VRM Remote Monitoring</span>
            </div>
            <div className="hero__trust-item">
              <CheckCircle />
              <span>Nationwide Coverage</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-label="Victron system diagram">
          <VictronDiagram />
        </div>
      </div>

      <button
        ref={scrollRef}
        className="hero__scroll-indicator"
        onClick={() => scrollTo('#services')}
        aria-label="Scroll to services"
      >
        <ChevronDown />
      </button>
    </section>
  )
}

function VictronDiagram() {
  return (
    <div className="hero__diagram">
      <svg viewBox="0 0 420 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Solar Panels */}
        <g className="diagram-solar diagram-component" style={{ '--comp-delay': '0s' }}>
          <rect x="30" y="20" width="80" height="60" rx="4" fill="#111D35" stroke="#0066FF" strokeWidth="1.5" />
          <line x1="30" y1="40" x2="110" y2="40" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />
          <line x1="30" y1="60" x2="110" y2="60" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />
          <line x1="70"  y1="20" x2="70"  y2="80" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />

          <rect x="160" y="20" width="80" height="60" rx="4" fill="#111D35" stroke="#0066FF" strokeWidth="1.5" />
          <line x1="160" y1="40" x2="240" y2="40" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />
          <line x1="160" y1="60" x2="240" y2="60" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />
          <line x1="200" y1="20" x2="200" y2="80" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />

          <rect x="290" y="20" width="80" height="60" rx="4" fill="#111D35" stroke="#0066FF" strokeWidth="1.5" />
          <line x1="290" y1="40" x2="370" y2="40" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />
          <line x1="290" y1="60" x2="370" y2="60" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />
          <line x1="330" y1="20" x2="330" y2="80" stroke="#0066FF" strokeWidth="0.75" opacity="0.5" />
          <text x="70" y="96" textAnchor="middle" fill="#8A9DC0" fontSize="10" fontFamily="JetBrains Mono">Solar Array</text>
        </g>

        {/* Flow lines solar → MPPT */}
        <line x1="70"  y1="80" x2="70"  y2="110" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.7" className="flow-line" style={{ '--flow-delay': '0s' }} />
        <line x1="200" y1="80" x2="200" y2="110" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.7" className="flow-line" style={{ '--flow-delay': '0.2s' }} />
        <line x1="330" y1="80" x2="330" y2="110" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.7" className="flow-line" style={{ '--flow-delay': '0.4s' }} />
        <line x1="70"  y1="110" x2="330" y2="110" stroke="#00D4FF" strokeWidth="1.5" opacity="0.4" />
        <line x1="200" y1="110" x2="200" y2="130" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.7" className="flow-line" style={{ '--flow-delay': '0.1s' }} />

        {/* MPPT Controller */}
        <g className="diagram-component" style={{ '--comp-delay': '0.3s' }}>
          <rect x="120" y="130" width="160" height="70" rx="8" fill="#0D1526" stroke="#00D4FF" strokeWidth="1.5" />
          <rect x="135" y="145" width="30" height="20" rx="3" fill="#0066FF" opacity="0.3" />
          <rect x="175" y="145" width="30" height="20" rx="3" fill="#0066FF" opacity="0.3" />
          <rect x="215" y="145" width="30" height="20" rx="3" fill="#0066FF" opacity="0.3" />
          <text x="200" y="212" textAnchor="middle" fill="#00D4FF" fontSize="10" fontFamily="JetBrains Mono">SmartSolar MPPT</text>
        </g>

        {/* MPPT → Cerbo */}
        <line x1="200" y1="200" x2="200" y2="230" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="6,4" className="flow-line" style={{ '--flow-delay': '0.15s' }} />

        {/* Cerbo GX */}
        <g className="diagram-component" style={{ '--comp-delay': '0.6s' }}>
          <rect x="140" y="230" width="120" height="55" rx="8" fill="#0D1526" stroke="#FFB800" strokeWidth="1.5" />
          <circle cx="165" cy="257" r="6" fill="#FFB800" opacity="0.4" />
          <circle cx="185" cy="257" r="6" fill="#FFB800" opacity="0.4" />
          <circle cx="205" cy="257" r="6" fill="#FFB800" opacity="0.4" />
          <circle cx="225" cy="257" r="6" fill="#FFB800" opacity="0.4" />
          <text x="200" y="302" textAnchor="middle" fill="#FFB800" fontSize="10" fontFamily="JetBrains Mono">Cerbo GX</text>
        </g>

        {/* Cerbo → Multiplus */}
        <line x1="200" y1="285" x2="200" y2="315" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="6,4" className="flow-line" style={{ '--flow-delay': '0.25s' }} />

        {/* Multiplus Inverter */}
        <g className="diagram-component" style={{ '--comp-delay': '0.9s' }}>
          <rect x="100" y="315" width="200" height="75" rx="8" fill="#0D1526" stroke="#0066FF" strokeWidth="2" />
          <rect x="118" y="332" width="60" height="40" rx="4" fill="#111D35" />
          <path d="M135,345 L148,352 L135,359" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
          <rect x="222" y="332" width="60" height="40" rx="4" fill="#111D35" />
          <path d="M252,345 L240,352 L252,359" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
          <text x="200" y="406" textAnchor="middle" fill="#8A9DC0" fontSize="10" fontFamily="JetBrains Mono">Multiplus Inverter</text>
        </g>

        {/* Multiplus → Battery & Loads */}
        <line x1="130" y1="390" x2="130" y2="420" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="6,4" className="flow-line" style={{ '--flow-delay': '0.1s' }} />
        <line x1="270" y1="390" x2="270" y2="420" stroke="#0066FF" strokeWidth="1.5" strokeDasharray="6,4" className="flow-line" style={{ '--flow-delay': '0.3s' }} />

        {/* Battery Bank */}
        <g className="diagram-component" style={{ '--comp-delay': '1.2s' }}>
          <rect x="60" y="420" width="140" height="55" rx="8" fill="#0D1526" stroke="#00D4FF" strokeWidth="1.5" />
          <rect x="78"  y="436" width="25" height="25" rx="3" fill="#00D4FF" opacity="0.25" />
          <rect x="112" y="436" width="25" height="25" rx="3" fill="#00D4FF" opacity="0.25" />
          <rect x="146" y="436" width="25" height="25" rx="3" fill="#00D4FF" opacity="0.25" />
          <text x="130" y="491" textAnchor="middle" fill="#8A9DC0" fontSize="10" fontFamily="JetBrains Mono">Battery Bank</text>
        </g>

        {/* AC Loads */}
        <g className="diagram-component" style={{ '--comp-delay': '1.2s' }}>
          <rect x="220" y="420" width="140" height="55" rx="8" fill="#0D1526" stroke="#0066FF" strokeWidth="1.5" />
          <path d="M260,447 L275,440 L275,452 L290,445" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          <circle cx="320" cy="447" r="8" fill="none" stroke="#0066FF" strokeWidth="1.5" opacity="0.5" />
          <text x="290" y="491" textAnchor="middle" fill="#8A9DC0" fontSize="10" fontFamily="JetBrains Mono">AC Loads</text>
        </g>

        {/* Glow nodes */}
        <circle cx="200" cy="130" r="4" fill="#00D4FF" opacity="0.9" className="diagram-node" />
        <circle cx="200" cy="200" r="4" fill="#00D4FF" opacity="0.9" className="diagram-node" />
        <circle cx="200" cy="230" r="4" fill="#FFB800" opacity="0.9" className="diagram-node" />
        <circle cx="200" cy="285" r="4" fill="#0066FF" opacity="0.9" className="diagram-node" />
        <circle cx="200" cy="315" r="4" fill="#0066FF" opacity="0.9" className="diagram-node" />
        <circle cx="130" cy="390" r="3" fill="#00D4FF" opacity="0.8" className="diagram-node" />
        <circle cx="270" cy="390" r="3" fill="#0066FF" opacity="0.8" className="diagram-node" />
      </svg>

      <div className="diagram__label diagram__label--top">
        <span className="diagram__dot diagram__dot--blue" />
        DC Input
      </div>
      <div className="diagram__label diagram__label--bottom">
        <span className="diagram__dot diagram__dot--cyan" />
        AC Output
      </div>
    </div>
  )
}

function BoltSmall() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L4.09 12.96a.5.5 0 0 0 .41.79H11l-1 8.25L19.91 11a.5.5 0 0 0-.41-.79H13L14 2z" />
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

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function CheckCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
