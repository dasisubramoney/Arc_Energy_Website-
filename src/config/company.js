export const company = {
  maintenance: true, // Set to true to show the maintenance page instead of the site

  name: "Arc Energy",
  tagline: "Power. Precision. Arc Energy.",
  subTagline:
    "South Africa's Victron Energy specialists — remote diagnostics, on-site installation, and full electrical services.",
  logo: { icon: "⚡", text: "Arc Energy" },

  contact: {
    phone: "+27 000 000 0000",
    emergency: "+27 000 000 0000",
    whatsapp: "27000000000",
    email: "info@arcenergy.co.za",
    address: "Your Address, City, Province",
  },

  hours: {
    weekdays: "07:00 – 17:00",
    saturday: "08:00 – 13:00",
    sunday: "Emergency only",
  },

  stats: {
    systems: { value: 200, suffix: "+", label: "Systems Installed" },
    callouts: { value: 500, suffix: "+", label: "Callouts Completed" },
    satisfaction: { value: 98, suffix: "%", label: "Client Satisfaction" },
    monitoring: { value: null, display: "24/7", label: "Remote Monitoring" },
  },

  services: [
    {
      id: 1,
      title: "Victron System Design",
      description:
        "Custom Victron ecosystem design tailored to your energy needs — from small residential setups to large commercial installations.",
      icon: "circuit",
    },
    {
      id: 2,
      title: "Remote Diagnostics",
      description:
        "We monitor and diagnose your Victron system remotely via the VRM portal — identifying faults before they become failures.",
      icon: "wifi",
    },
    {
      id: 3,
      title: "On-Site Diagnostics",
      description:
        "Our certified technicians come to you. Full on-site inspection, fault-finding, and system health checks.",
      icon: "tools",
    },
    {
      id: 4,
      title: "Installation & Commissioning",
      description:
        "End-to-end installation of Victron components: Multiplus, Quattro, SmartSolar MPPT, Cerbo GX, and full battery banks.",
      icon: "plug",
    },
    {
      id: 5,
      title: "Electrical Callouts",
      description:
        "24/7 emergency electrical callouts. DB board faults, tripping breakers, wiring issues — we respond fast.",
      icon: "bolt",
    },
    {
      id: 6,
      title: "General Electrical Work",
      description:
        "Residential and commercial electrical work: new installations, compliance certificates, upgrades, and maintenance.",
      icon: "building",
    },
  ],

  victronProducts: [
    "Multiplus & Quattro Inverter/Chargers",
    "SmartSolar MPPT Charge Controllers",
    "Cerbo GX & VRM Remote Monitoring",
    "Lithium & AGM Battery Banks",
  ],

  victronBody:
    "We've built our entire business around the Victron Energy ecosystem — the most reliable, feature-rich, and remotely manageable power electronics available. Whether you need a small residential backup or a large industrial off-grid solution, every Victron component is engineered to communicate, monitor, and scale.",

  howItWorks: [
    {
      step: 1,
      title: "Contact Us",
      description:
        "Reach out via phone, WhatsApp, or our contact form. Describe your issue or project and we'll respond within the hour.",
    },
    {
      step: 2,
      title: "Remote Assessment",
      description:
        "We access your VRM portal remotely to diagnose your Victron system or provide a detailed quote based on your needs.",
    },
    {
      step: 3,
      title: "On-Site Visit",
      description:
        "Where required, our team comes to you for installation, commissioning, or hands-on fault finding.",
    },
    {
      step: 4,
      title: "Ongoing Support",
      description:
        "We don't disappear after the job. Remote monitoring keeps your system running optimally long-term.",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Luxury Off-Grid Residence",
      category: "residential",
      description: "Full off-grid Victron system for a high-end residential estate — solar, storage, and remote monitoring.",
      image: "/images/project-house-sunset.jpg",
      fallback: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    },
    {
      id: 2,
      title: "Commercial Office Complex",
      category: "commercial",
      description: "100kVA Quattro installation with generator integration for a office building.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      id: 3,
      title: "Victron System Installation",
      category: "industrial",
      description: "MultiPlus-II inverter with AGM battery bank — critical backup for a manufacturing facility.",
      image: "/images/project-victron.jpg",
      fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
      id: 4,
      title: "Remote Game Lodge",
      category: "off-grid",
      description: "Full off-grid Victron system powering a luxury game lodge.",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    },
    {
      id: 5,
      title: "Residential Solar Install",
      category: "residential",
      description: "Grid-tied solar with Multiplus-II for a modern family home.",
      image: "/images/project-house-day.jpg",
      fallback: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    },
    {
      id: 6,
      title: "Rooftop Panel Installation",
      category: "residential",
      description: "Full rooftop solar panel installation — from mounting and wiring to commissioning and VRM setup.",
      image: "/images/project-installer.jpg",
      fallback: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    },
  ],

  testimonials: [
    {
      name: "Emmaunel K.",
      type: "Residential Client, Johannesburg",
      text: "Arc Energy installed our entire Victron off-grid system. The remote monitoring has been a game changer — I can check our battery state from anywhere in the world.",
      stars: 5,
    },
    {
      name: "Celeb T.",
      type: "Commercial Client, Cape Town",
      text: "They diagnosed and fixed a fault in our 80kVA system remotely within an hour. Saved us from a full day of downtime. Absolutely phenomenal service.",
      stars: 5,
    },
    {
      name: "Divashen S.",
      type: "Off-Grid Client, Limpopo",
      text: "Our game lodge has been 100% off-grid for two years thanks to Arc Energy. The system has been flawless. They respond immediately whenever I have a question.",
      stars: 5,
    },
    {
      name: "Sashin G.",
      type: "Residential Client, Johannesburg",
      text: "From design to installation to ongoing monitoring — Arc Energy was professional every step of the way. Our Victron system has survived every load-shedding stage without a flicker.",
      stars: 5,
    },
    {
      name: "Seshni N.",
      type: "Residential Client, Johannesburg",
      text: "We needed a mission-critical backup system for our factory. Arc Energy delivered on time and on budget, with zero compromise on quality. Highly recommended.",
      stars: 5,
    },
  ],

  serviceAreas: [
    "Johannesburg",
    "Pretoria",
    "Cape Town",
    "Durban",
    "Port Elizabeth",
    "Bloemfontein",
    "Nelspruit",
    "Polokwane",
    "East London",
    "Kimberley",
    "George",
    "Nationwide (Commercial)",
  ],

  baseCity: "Johannesburg",

  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    whatsapp: "27000000000",
  },

  colors: {
    accentBlue: "#0066FF",
    accentCyan: "#00D4FF",
    accentYellow: "#FFB800",
  },

  seo: {
    title: "Arc Energy — Victron Specialists & Electrical Services",
    description:
      "South Africa's leading Victron Energy installers. Remote diagnostics, on-site installation, and 24/7 electrical callouts.",
  },

  footerLinks: {
    services: [
      { label: "Victron System Design", href: "#services" },
      { label: "Remote Diagnostics", href: "#services" },
      { label: "On-Site Diagnostics", href: "#services" },
      { label: "Installation & Commissioning", href: "#services" },
      { label: "Electrical Callouts", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Our Projects", href: "#portfolio" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Service Areas", href: "#service-areas" },
      { label: "Contact", href: "#contact" },
    ],
  },
}
