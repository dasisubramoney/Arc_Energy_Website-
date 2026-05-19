import { useState, useEffect } from 'react'
import { company } from '../../config/company'
import './Navbar.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Victron', href: '#victron' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 50)
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Main navigation">
        <a
          href="#"
          className="navbar__logo"
          aria-label={`${company.name} home`}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          <span className="navbar__logo-icon" aria-hidden="true">
            <LightningIcon />
          </span>
          <span className="navbar__logo-text">{company.logo.text}</span>
        </a>

        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            href={`tel:${company.contact.emergency}`}
            className="btn-ghost navbar__btn-ghost"
            aria-label="Emergency callout number"
          >
            Emergency Callout
          </a>
          <a
            href="#contact"
            className="btn-primary navbar__btn-primary"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          >
            Get a Quote
          </a>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-actions">
          <a
            href={`tel:${company.contact.emergency}`}
            className="btn-ghost"
            tabIndex={menuOpen ? 0 : -1}
          >
            Emergency Callout
          </a>
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            tabIndex={menuOpen ? 0 : -1}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  )
}

function LightningIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2L4.09 12.96a.5.5 0 0 0 .41.79H11l-1 8.25L19.91 11a.5.5 0 0 0-.41-.79H13L14 2z"
        fill="url(#bolt-gradient)"
        stroke="url(#bolt-gradient)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="bolt-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
