# Priyanshi Gajiwala — Portfolio

A premium multi-page portfolio website built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, and React Router.

This codebase has been enhanced to satisfy the university requirements for **Practical 2: State Management and Routing in React**.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — Build tool
- **Tailwind CSS v4** — Styling
- **React Router DOM** — Multi-page routing
- **Framer Motion** — Animations
- **React Icons** — Icon library
- **shadcn/ui** — UI components

---

## Practical 2 Features (State Management & Routing)

The portfolio implements the following core state management and routing requirements:

1. **Controlled Contact Form**
   - Converted the Contact page form into a fully controlled React form.
   - Leverages React `useState` hooks for input fields `name`, `email`, and `message` (using state binding: `value={state}` and `onChange={(e) => setState(e.target.value)}`).

2. **Real-time Live Preview**
   - Renders a modern, real-time Live Preview card directly below the contact form.
   - Updates dynamically as the user types, displaying the name, email, and formatted message prior to submission.

3. **Message Character Counter**
   - Displays a dynamic character count (`Characters: X`) below the message textarea, updating character-by-character as you type.

4. **Live Preview Toggle (Second useState State)**
   - Added a `showPreview` boolean state (using `useState`) with a **Show Preview / Hide Preview** toggle button.
   - Smoothly collapses or expands the Live Preview section using Framer Motion animations.

5. **Dark / Light Theme Toggle**
   - Configured a persistent `theme` state (`useState`) in the Navbar, initialized from `localStorage`.
   - Embeds theme toggle buttons (`FiSun`/`FiMoon` icons) in both desktop and mobile navigation headers.
   - Synchronizes theme updates with `localStorage` and applies the theme class to the `document.documentElement` for seamless utility-class color swapping (via high specificity rules inside `index.css`).

6. **React Router DOM Routing**
   - Handles client-side navigation without triggering full browser page reloads.
   - Fallback route handling with a custom 404 page for nonexistent routes.

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/projects` | Projects |
| `/projects/:slug` | Project Details |
| `/experience` | Experience |
| `/research` | Research |
| `/achievements` | Achievements |
| `/resume` | Resume |
| `/blog` | Blog |
| `/contact` | Contact |
| `/not-found` | 404 Fallback page |

---

## Features

- **Theme Toggle**: Switch between Slate Dark mode and Sky Light mode with smooth CSS transitions.
- **Animated Page Transitions**: Motion-driven page loading animations using Framer Motion.
- **GitHub API Integration**: Dynamic loading of statistics.
- **Command Palette**: Trigger custom actions using `Ctrl/Cmd + K`.
- **Scroll Progress**: Floating visual progress bar as you scroll down pages.
- **SEO Optimization**: Unique SEO title and descriptions populated dynamically for each route.
- **Resume Print/Download**: Accessible layouts tailored for download and physical printing.

---

## Getting Started

To run the development server locally:

```bash
npm install
npm run dev
```

To test production build:

```bash
npm run build
npm run preview
```
