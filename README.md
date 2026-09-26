# BrightMind Tuition Centre — Website

A modern, responsive tuition centre website built with **React + Vite + Tailwind CSS**.

## ✏️ First thing to edit

All centre-specific details (name, phone, WhatsApp numbers, address, opening
hours, Google Maps link, WhatsApp group link) live in **one file**:

```
src/config/siteConfig.js
```

Change values there and they update everywhere on the site automatically —
navbar, hero, footer, contact section, and the WhatsApp enquiry form.

## 📦 Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)
- Pure client-side — **no backend required**

## 🚀 Getting Started Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

Build for production:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
tuition-centre-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── config/
    │   ├── siteConfig.js      # <-- edit centre details here
    │   └── whatsapp.js        # WhatsApp link/message helpers
    ├── hooks/
    │   └── useScrollReveal.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Courses.jsx
        ├── WhyChooseUs.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── WhatsAppFloat.jsx
        └── ui/
            ├── Button.jsx
            ├── SectionHeading.jsx
            └── Reveal.jsx
```

See the deployment guide shared with this project for step-by-step
instructions on pushing to GitHub and deploying free on Vercel.
