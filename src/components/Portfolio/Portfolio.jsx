import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { company } from '../../config/company'
import { useInView } from '../../hooks/useInView'
import './Portfolio.css'

const categories = ['all', 'residential', 'commercial', 'industrial', 'off-grid']

const categoryColors = {
  residential: '#0066FF',
  commercial:  '#00D4FF',
  industrial:  '#FFB800',
  'off-grid':  '#00C87A',
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, isInView] = useInView()
  const filterBarRef = useRef(null)
  const activeRef = useRef(null)
  const indicatorRef = useRef(null)

  const filtered = activeFilter === 'all'
    ? company.projects
    : company.projects.filter((p) => p.category === activeFilter)

  // Move sliding indicator under the active tab
  useLayoutEffect(() => {
    if (activeRef.current && indicatorRef.current && filterBarRef.current) {
      const bar  = filterBarRef.current.getBoundingClientRect()
      const btn  = activeRef.current.getBoundingClientRect()
      indicatorRef.current.style.left  = `${btn.left - bar.left}px`
      indicatorRef.current.style.width = `${btn.width}px`
    }
  }, [activeFilter])

  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <div ref={ref} className={`portfolio__header animate ${isInView ? 'visible' : ''}`}>
          <span className="section-badge"><GridIcon /> Our Work</span>
          <h2 id="portfolio-heading" className="section-heading">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading portfolio__subheading">
            From off-grid farmhouses to large commercial installations — a selection of our
            recent work across South Africa.
          </p>
        </div>

        <div
          ref={filterBarRef}
          className={`portfolio__filters animate anim-delay-1 ${isInView ? 'visible' : ''}`}
          role="tablist"
          aria-label="Filter projects by category"
        >
          {/* Sliding indicator pill */}
          <div ref={indicatorRef} className="portfolio__filter-indicator" aria-hidden="true" />

          {categories.map((cat) => (
            <button
              key={cat}
              ref={cat === activeFilter ? activeRef : null}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`portfolio__filter-btn ${activeFilter === cat ? 'portfolio__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        <div
          className="portfolio__grid"
          role="tabpanel"
          aria-label={`${activeFilter} projects`}
        >
          {company.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={activeFilter === 'all' || project.category === activeFilter}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, visible }) {
  const [ref, isInView] = useInView()
  const delay = Math.min((index % 3) + 1, 6)

  return (
    <article
      ref={ref}
      className={`project-card animate anim-delay-${delay} ${isInView ? 'visible' : ''} ${visible ? 'project-card--show' : 'project-card--hide'}`}
      aria-label={project.title}
      aria-hidden={!visible}
    >
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={`${project.title} — ${project.category} project`}
          className="project-card__image"
          loading="lazy"
          onError={(e) => {
            if (project.fallback && e.target.src !== project.fallback) {
              e.target.src = project.fallback
            }
          }}
        />
        <div className="project-card__overlay">
          <p className="project-card__overlay-desc">{project.description}</p>
          <button
            className="project-card__overlay-btn"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Similar Quote
          </button>
        </div>
      </div>
      <div className="project-card__body">
        <span
          className="project-card__badge"
          style={{ '--badge-color': categoryColors[project.category] || '#0066FF' }}
        >
          {project.category.replace('-', ' ')}
        </span>
        <h3 className="project-card__title">{project.title}</h3>
      </div>
    </article>
  )
}

function GridIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}
