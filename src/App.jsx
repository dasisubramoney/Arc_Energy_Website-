import { Suspense, lazy } from 'react'
import { company } from './config/company'
import Maintenance from './components/Maintenance/Maintenance'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'

const Victron = lazy(() => import('./components/Victron/Victron'))
const HowItWorks = lazy(() => import('./components/HowItWorks/HowItWorks'))
const Stats = lazy(() => import('./components/Stats/Stats'))
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'))
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'))
const ServiceAreas = lazy(() => import('./components/ServiceAreas/ServiceAreas'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function SectionFallback() {
  return (
    <div
      style={{
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-secondary)',
      }}
      aria-busy="true"
      aria-label="Loading section"
    />
  )
}

export default function App() {
  if (company.maintenance) return <Maintenance />

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Suspense fallback={<SectionFallback />}>
          <Victron />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServiceAreas />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div style={{ height: '400px', background: 'var(--bg-secondary)' }} />}>
          <Footer />
        </Suspense>
      </main>
    </>
  )
}
