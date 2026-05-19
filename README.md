# Arc Energy — Electrical Company Website Template

A production-ready, visually stunning website template for electrical companies specialising in the Victron Energy ecosystem. Built with Vite + React 18, zero external UI libraries, and a single config file for full white-label customisation.

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Project Structure

```
src/
  config/
    company.js          ← ALL editable content lives here
  components/
    Navbar/             ← Sticky transparent → frosted glass nav
    Hero/               ← Full-screen hero with animated SVG diagram
    Services/           ← 6-card service grid
    Victron/            ← Victron specialist section with flow diagram
    HowItWorks/         ← 4-step process timeline
    Stats/              ← Animated counter stats
    Portfolio/          ← Filterable project masonry grid
    Testimonials/       ← Auto-rotating testimonial carousel
    ServiceAreas/       ← Coverage map + area checklist
    Contact/            ← Split contact form + info panel
    Footer/             ← 4-column footer with socials
  hooks/
    useInView.js        ← Intersection Observer for scroll animations
    useCounter.js       ← Animated number counter
  App.jsx               ← Route layout with React.lazy sections
  main.jsx
  index.css             ← CSS variables, resets, utility classes
```

---

## Customising for a New Client

**All content lives in `src/config/company.js`.** No component files need to be touched.

### 1. Company Details
```js
name: "Your Company Name",
tagline: "Your Tagline",
subTagline: "Your subheading text",
logo: { icon: "⚡", text: "Your Company" },
```

### 2. Contact Information
```js
contact: {
  phone: "+27 xxx xxx xxxx",
  emergency: "+27 xxx xxx xxxx",
  whatsapp: "27xxxxxxxxx",   // no + or spaces
  email: "info@yourcompany.co.za",
  address: "123 Street, City, Province",
},
```

### 3. Business Hours
```js
hours: {
  weekdays: "08:00 – 17:00",
  saturday: "08:00 – 13:00",
  sunday: "Emergency only",
},
```

### 4. Stats
Adjust the counter targets — they animate up from 0 on scroll:
```js
stats: {
  systems: { value: 200, suffix: "+", label: "Systems Installed" },
  callouts: { value: 500, suffix: "+", label: "Callouts Completed" },
  satisfaction: { value: 98, suffix: "%", label: "Client Satisfaction" },
  monitoring: { value: null, display: "24/7", label: "Remote Monitoring" },
},
```

### 5. Services
Six service cards, each with:
```js
{ id: 1, title: "Service Name", description: "Description text.", icon: "circuit" }
```
Available icon keys: `circuit`, `wifi`, `tools`, `plug`, `bolt`, `building`

### 6. Projects / Portfolio
```js
{ id: 1, title: "Project Name", category: "residential", description: "...", image: "https://..." }
```
Category values: `residential`, `commercial`, `industrial`, `off-grid`

### 7. Testimonials
```js
{ name: "Client Name", type: "Client Type, City", text: "Quote text", stars: 5 }
```

### 8. Service Areas
```js
serviceAreas: ["City A", "City B", "Nationwide (Commercial)"],
baseCity: "Johannesburg",
```

### 9. Social Links
```js
socials: {
  facebook: "https://facebook.com/yourpage",
  instagram: "https://instagram.com/yourhandle",
  linkedin: "https://linkedin.com/company/yourco",
  whatsapp: "27xxxxxxxxx",
}
```

### 10. Colour Overrides
The CSS variables in `src/index.css` `:root` control all colours:
```css
--accent-blue:    #0066FF   /* primary CTA colour */
--accent-cyan:    #00D4FF   /* highlight / glow colour */
--accent-yellow:  #FFB800   /* Victron amber accent */
```
Change these three and the entire site updates.

---

## Deploy to Netlify

### Option A — Drag & Drop (fastest)
1. `npm run build`
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `dist/` folder onto the page

### Option B — GitHub (recommended for ongoing updates)
1. Push your project to a GitHub repository
2. Log in to [app.netlify.com](https://app.netlify.com)
3. Click **Add new site → Import an existing project**
4. Connect your GitHub repo
5. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**

The included `netlify.toml` handles SPA routing automatically.

---

## Technical Notes

- **Zero external UI libraries** — all styling is plain CSS with CSS variables
- **Zero animation libraries** — all animations are CSS keyframes + Intersection Observer
- **Lazy loading** — below-fold sections use `React.lazy` + `Suspense`
- **Accessible** — semantic HTML5, ARIA labels, focus states, skip link
- **Images** — Unsplash URLs are used as placeholders; swap for client photography
- **Form** — controlled React form with validation; no backend required (extend with Netlify Forms or EmailJS as needed)
- **Fonts** — Syne (headings), Inter (body), JetBrains Mono (technical labels) via Google Fonts

---

## Extending the Template

### Add a backend to the contact form
The form's `handleSubmit` function in `Contact.jsx` currently simulates a 1.2s delay.
Replace the `await new Promise(...)` line with a real fetch to:
- **Netlify Forms** — add `data-netlify="true"` to the `<form>` and `method="POST"`
- **EmailJS** — `import emailjs` and call `emailjs.send(...)`
- **Custom API** — `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })`

### Replace placeholder images
In `company.js`, update each project's `image` URL to a hosted photo URL or relative path to an image in `public/`.

### Add more services
Add objects to the `services` array. The grid is CSS-driven and will automatically reflow.

---

## Licence

This template is provided for commercial use. When reselling to clients, customise `src/config/company.js` and update all placeholder contact details before deployment.
