import './Maintenance.css'
import { company } from '../../config/company'

export default function Maintenance() {
  return (
    <div className="maintenance">
      <div className="maintenance__glow maintenance__glow--1" aria-hidden="true" />
      <div className="maintenance__glow maintenance__glow--2" aria-hidden="true" />

      <div className="maintenance__card">
        <img
          src="/images/logo.jpg"
          alt={company.name}
          className="maintenance__logo"
        />

        <div className="maintenance__icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>

        <h1 className="maintenance__heading">Back Soon</h1>
        <p className="maintenance__message">
          We're busy with scheduled maintenance.<br />
          The site will be back up shortly.
        </p>

        <div className="maintenance__divider" aria-hidden="true" />

        <p className="maintenance__contact">
          For urgent enquiries, contact us at{' '}
          <a href={`mailto:${company.contact.email}`} className="maintenance__link">
            {company.contact.email}
          </a>
          {' '}or call{' '}
          <a href={`tel:${company.contact.phone}`} className="maintenance__link">
            {company.contact.phone}
          </a>
        </p>

        <div className="maintenance__dots" aria-label="Loading">
          <span /><span /><span />
        </div>
      </div>
    </div>
  )
}
