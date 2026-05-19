import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import './ServiceAreas.css'

export default function ServiceAreas() {
  const [leftRef, leftInView] = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section className="areas" id="service-areas" aria-labelledby="areas-heading">
      <div className="container">
        <div className="areas__inner">
          <div
            ref={leftRef}
            className={`areas__content fade-left ${leftInView ? 'visible' : ''}`}
          >
            <span className="section-badge">
              <MapPinIcon /> Coverage
            </span>
            <h2 id="areas-heading" className="section-heading">
              Where We <span className="gradient-text">Operate</span>
            </h2>
            <p className="section-subheading areas__sub">
              Based in {company.baseCity}, serving clients across South Africa with both
              remote support and on-site visits.
            </p>

            <ul className="areas__list" aria-label="Service areas">
              {company.serviceAreas.map((area, i) => (
                <li key={i} className="areas__item">
                  <span className="areas__item-dot" aria-hidden="true" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={rightRef}
            className={`areas__map-wrap fade-right ${rightInView ? 'visible' : ''}`}
            aria-label="South Africa map showing service coverage"
          >
            <SouthAfricaMap />
          </div>
        </div>

        <div className="areas__banner">
          <span className="areas__banner-icon" aria-hidden="true">✈</span>
          <p>
            <strong>Travel nationwide</strong> for large commercial projects —{' '}
            <a
              href="#contact"
              className="areas__banner-link"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              contact us to discuss
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function SouthAfricaMap() {
  const cities = [
    { name: 'Johannesburg', cx: 310, cy: 195 },
    { name: 'Pretoria', cx: 315, cy: 180 },
    { name: 'Cape Town', cx: 175, cy: 390 },
    { name: 'Durban', cx: 375, cy: 250 },
    { name: 'Port Elizabeth', cx: 285, cy: 360 },
    { name: 'Bloemfontein', cx: 265, cy: 265 },
    { name: 'Nelspruit', cx: 360, cy: 185 },
    { name: 'Polokwane', cx: 320, cy: 155 },
  ]

  return (
    <div className="areas__map">
      <svg
        viewBox="0 0 500 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* South Africa simplified outline */}
        <path
          d="M120,80 L130,60 L150,50 L200,45 L280,42 L360,52 L410,75 L430,100 L440,140 L445,180 L440,220 L430,255 L400,290 L370,310 L360,330 L350,350 L330,380 L300,400 L270,415 L240,420 L210,415 L190,400 L175,385 L165,365 L150,350 L130,330 L115,300 L100,270 L90,240 L85,210 L88,180 L92,155 L100,130 L110,105 Z"
          fill="rgba(13, 21, 38, 0.8)"
          stroke="rgba(0, 102, 255, 0.4)"
          strokeWidth="1.5"
        />

        {/* Grid lines for technical feel */}
        {[100, 150, 200, 250, 300, 350, 400].map((y) => (
          <line key={`h${y}`} x1="85" y1={y} x2="445" y2={y} stroke="rgba(0,102,255,0.06)" strokeWidth="1" />
        ))}
        {[120, 180, 240, 300, 360, 420].map((x) => (
          <line key={`v${x}`} x1={x} y1="40" x2={x} y2="425" stroke="rgba(0,102,255,0.06)" strokeWidth="1" />
        ))}

        {/* City dots */}
        {cities.map((city) => (
          <g key={city.name}>
            <circle cx={city.cx} cy={city.cy} r="8" fill="rgba(0,212,255,0.1)" className="city-pulse" />
            <circle cx={city.cx} cy={city.cy} r="4" fill="var(--accent-cyan)" opacity="0.9" />
            <circle cx={city.cx} cy={city.cy} r="2" fill="#fff" />
            <text
              x={city.cx + 10}
              y={city.cy + 4}
              fill="#8A9DC0"
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
            >
              {city.name}
            </text>
          </g>
        ))}

        {/* Connecting lines between nearby cities */}
        <line x1="310" y1="195" x2="315" y2="180" stroke="rgba(0,212,255,0.2)" strokeWidth="1" strokeDasharray="3,2" />
        <line x1="310" y1="195" x2="360" y2="185" stroke="rgba(0,212,255,0.15)" strokeWidth="1" strokeDasharray="3,2" />
        <line x1="310" y1="195" x2="265" y2="265" stroke="rgba(0,212,255,0.15)" strokeWidth="1" strokeDasharray="3,2" />
        <line x1="310" y1="195" x2="375" y2="250" stroke="rgba(0,212,255,0.15)" strokeWidth="1" strokeDasharray="3,2" />
        <line x1="265" y1="265" x2="285" y2="360" stroke="rgba(0,212,255,0.1)" strokeWidth="1" strokeDasharray="3,2" />
        <line x1="265" y1="265" x2="175" y2="390" stroke="rgba(0,212,255,0.1)" strokeWidth="1" strokeDasharray="3,2" />
      </svg>

      <div className="areas__map-badge">
        <span className="areas__map-dot" />
        Active Coverage
      </div>
    </div>
  )
}

function MapPinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
