import { useEffect, useRef } from 'react'
import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import { useCounter } from '../../hooks/useCounter'
import './Stats.css'

const statItems = [
  { key: 'systems',      icon: <ServerIcon />, label: company.stats.systems.label,      value: company.stats.systems.value,      suffix: company.stats.systems.suffix,      display: null },
  { key: 'callouts',     icon: <ZapIcon />,    label: company.stats.callouts.label,     value: company.stats.callouts.value,     suffix: company.stats.callouts.suffix,     display: null },
  { key: 'satisfaction', icon: <SmileIcon />,  label: company.stats.satisfaction.label, value: company.stats.satisfaction.value, suffix: company.stats.satisfaction.suffix, display: null },
  { key: 'monitoring',   icon: <WatchIcon />,  label: company.stats.monitoring.label,   value: null, suffix: '', display: company.stats.monitoring.display },
]

export default function Stats() {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <section className="stats" id="stats" aria-labelledby="stats-heading" ref={ref}>
      <div className="stats__glow" aria-hidden="true" />
      <div className="container">
        <h2 id="stats-heading" className="sr-only">Our Numbers</h2>
        <div className="stats__grid">
          {statItems.map((item, i) => (
            <StatItem key={item.key} item={item} trigger={isInView} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ item, trigger, delay }) {
  const count = useCounter(item.value, 1800, trigger)
  const numRef = useRef(null)
  const flashedRef = useRef(false)

  useEffect(() => {
    if (item.value === null) return
    if (trigger && count >= item.value && !flashedRef.current) {
      flashedRef.current = true
      numRef.current?.classList.add('stat-flash')
      const t = setTimeout(() => numRef.current?.classList.remove('stat-flash'), 1000)
      return () => clearTimeout(t)
    }
  }, [count, trigger, item.value])

  return (
    <div
      className={`stat-item animate anim-delay-${delay + 1} ${trigger ? 'visible' : ''}`}
      aria-label={`${item.display || count + item.suffix} ${item.label}`}
    >
      <div className="stat-item__icon" aria-hidden="true">{item.icon}</div>
      <div
        ref={numRef}
        className="stat-item__number"
        aria-live="polite"
        aria-atomic="true"
      >
        {item.display ? item.display : `${trigger ? count : 0}${item.suffix}`}
      </div>
      <div className="stat-item__label">{item.label}</div>
    </div>
  )
}

function ServerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L4.09 12.96a.5.5 0 0 0 .41.79H11l-1 8.25L19.91 11a.5.5 0 0 0-.41-.79H13L14 2z" />
    </svg>
  )
}

function SmileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  )
}

function WatchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="7" />
      <polyline points="12 9 12 12 13.5 13.5" />
      <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
    </svg>
  )
}
