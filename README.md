# HireMind AI 🧠

> **Turn Resumes Into Confident Hiring Decisions**  
> Frontend Challenge Submission for **Acdyon Technologies Engineering**  
> **Track**: Part 2 — *The Premium Home Page*

---

## 🌟 Overview

**HireMind AI** is an intelligent candidate screening and hiring intelligence workspace built for high-velocity engineering teams. It cuts through noisy applicant pools with automated candidate fit scoring, transparent skill alignment, and actionable recommendations.

Designed as a Product Hunt launch-ready home page, HireMind AI provides an immediate tactile experience: visitors can interact directly with the candidate screening workspace from the first screen.

---

## ✨ Key Highlights

- 🎯 **Interactive Screening Workspace**: Switch between real candidates, review algorithmic fit scores (`/100`), inspect extracted skill tags, and read transparent recommendation rationales.
- 🚀 **Interactive 3D Hero Experience**: Responsive Three.js camera rig with smooth damping dynamics (`maath/easing`) and floating spatial assets.
- 🎨 **Tasteful Micro-Interactions**: FlipWords headline transitions, subtle hover elevations, and responsive layout choreography with **Framer Motion**.
- 🛡️ **Signal-Over-Noise / Honest Copy**: Zero fabricated testimonials, fake review counts, or invented client logos.
- 📱 **Flawless Responsiveness**: Tested and polished across 390px mobile screens to 1440px+ ultra-wide desktop displays with zero horizontal scroll.
- 🎮 **Bonus Round Easter Egg**: Integrated Konami code (`↑ ↑ ↓ ↓ ← → ← → B A`) to trigger a hidden *Recruiter Speedrun Mode*.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: TailwindCSS v4
- **3D & Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Animation & Motion**: Motion (Framer Motion) + `maath`
- **Typography**: Funnel Display (Google Fonts)

---

## 📁 Architecture & Project Structure

```bash
├── public/
│   ├── assets/             # Vector icons, tech logos, backgrounds
│   └── models/             # 3D Spaceman fanart model
├── src/
│   ├── components/         # Reusable UI widgets & micro-interactions
│   │   ├── Astronaut.jsx   # 3D interactive model wrapper
│   │   ├── EasterEgg.jsx   # Konami code listener & toast badge
│   │   ├── FlipWords.jsx   # Dynamic word switcher animation
│   │   ├── Frameworks.jsx  # Orbiting integrations display
│   │   ├── HeroText.jsx    # Hero copy, badge & CTA triggers
│   │   └── OrbitingCircles.jsx # Trigonometric orbit animator
│   ├── constants/          # Structured product highlights
│   ├── sections/           # Section modules
│   │   ├── Navbar.jsx      # Blurred fixed header with mobile menu
│   │   ├── Hero.jsx        # 3D interactive hero
│   │   ├── About.jsx       # 'How HireMind Works' bento grid
│   │   ├── Projects.jsx    # Interactive product screening demo
│   │   └── Footer.jsx      # Clean brand footer
│   ├── App.jsx             # Main layout
│   ├── index.css           # Design tokens & custom utilities
│   └── main.jsx            # React root
├── DECISIONS.md            # Technical decisions, trade-offs & AI usage
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📄 Decisions & Submission Notes
For a detailed 1-page writeup on architectural decisions, trade-offs made under the time limit, and AI verification details, please see [DECISIONS.md](./DECISIONS.md).
