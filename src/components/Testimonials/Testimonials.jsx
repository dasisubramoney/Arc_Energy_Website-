import { useState, useEffect, useRef, useCallback } from 'react'
import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import './Testimonials.css'

const INTERVAL = 4000

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [ref, isInView] = useInView()
  const intervalRef = useRef(null)
  const total = company.testimonials.length

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total])
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, INTERVAL)
    return () => clearInterval(intervalRef.current)
  }, [paused, next])

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div ref={ref} className={`testimonials__header animate ${isInView ? 'visible' : ''}`}>
          <span className="section-badge"><StarFilled /> Client Reviews</span>
          <h2 id="testimonials-heading" className="section-heading">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div
          className={`testimonials__carousel-wrap animate anim-delay-1 ${isInView ? 'visible' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="testimonials__carousel">
            {company.testimonials.map((t, i) => (
              <div
                key={i}
                className={`testimonial-card ${i === active ? 'testimonial-card--active' : ''} ${i === (active - 1 + total) % total ? 'testimonial-card--prev' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${i + 1} of ${total}`}
                aria-hidden={i !== active}
              >
                {/* Stars stagger in when slide becomes active */}
                <div className="testimonial-card__stars" aria-label={`${t.stars} stars`}>
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span
                      key={si}
                      className={`star-wrap ${i === active ? 'star-visible' : ''}`}
                      style={{ '--star-i': si }}
                    >
                      <StarFilled filled={si < t.stars} />
                    </span>
                  ))}
                </div>
                <blockquote className="testimonial-card__quote">
                  <p>"{t.text}"</p>
                </blockquote>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__type">{t.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__controls">
            <button className="testimonials__arrow" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft />
            </button>

            <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">
              {company.testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  style={i === active ? { '--fill-duration': `${INTERVAL}ms` } : {}}
                />
              ))}
            </div>

            <button className="testimonials__arrow" onClick={next} aria-label="Next testimonial">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function StarFilled({ filled = true }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#FFB800' : 'rgba(255,184,0,0.15)'} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
