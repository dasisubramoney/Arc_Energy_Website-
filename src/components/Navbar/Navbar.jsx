import { useState, useEffect } from 'react'
import { company } from '../../config/company'
import './Navbar.css'

const navLinks = [
  { label: 'Services',     href: '#services' },
  { label: 'Victron',      href: '#victron' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Projects',     href: '#portfolio' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  return (
    <>
      {/* ── Navbar bar ── */}
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
        role="banner"
      >
        <nav className="navbar__inner container" aria-label="Main navigation">
          <a
            href="#"
            className="navbar__logo"
            aria-label={`${company.name} home`}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img src="/images/logo.jpg" alt={company.name} className="navbar__logo-img" />
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
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* ── Mobile overlay — rendered OUTSIDE header so no stacking-context trap ── */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <div className="navbar__mobile-panel" onClick={(e) => e.stopPropagation()}>
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
      </div>
    </>
  )
}
