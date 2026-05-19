import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import './Services.css'

const iconMap = {
  circuit: <CircuitIcon />,
  wifi: <WifiIcon />,
  tools: <ToolsIcon />,
  plug: <PlugIcon />,
  bolt: <BoltIcon />,
  building: <BuildingIcon />,
}

export default function Services() {
  const [ref, isInView] = useInView()

  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div ref={ref} className={`services__header fade-up ${isInView ? 'visible' : ''}`}>
          <span className="section-badge">⚡ What We Do</span>
          <h2 id="services-heading" className="section-heading">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading">
            From Victron system design to 24/7 emergency callouts — we cover the full spectrum
            of electrical and energy services.
          </p>
        </div>

        <div className="services__grid" role="list">
          {company.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  const [ref, isInView] = useInView()
  const delayClass = `fade-up-delay-${Math.min(delay + 1, 6)}`

  return (
    <article
      ref={ref}
      className={`service-card fade-up ${delayClass} ${isInView ? 'visible' : ''}`}
      role="listitem"
    >
      <div className="service-card__icon-wrap" aria-hidden="true">
        {iconMap[service.icon] || <BoltIcon />}
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>
      <div className="service-card__footer">
        <a href="#contact" className="service-card__link" onClick={(e) => {
          e.preventDefault()
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        }}>
          Get a quote
          <ArrowRight />
        </a>
      </div>
    </article>
  )
}

function CircuitIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="8" height="8" rx="1" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
      <rect x="2" y="14" width="8" height="8" rx="1" />
      <path d="M10 6h4M18 10v4M6 10v4M10 18h4" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  )
}

function ToolsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function PlugIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <rect x="8" y="2" width="2" height="6" rx="1" />
      <rect x="14" y="2" width="2" height="6" rx="1" />
      <path d="M6 12h12" />
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L4.09 12.96a.5.5 0 0 0 .41.79H11l-1 8.25L19.91 11a.5.5 0 0 0-.41-.79H13L14 2z" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
