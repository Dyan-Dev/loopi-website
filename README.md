
# Automa Marketing Website

Modern, responsive marketing website for Automa - Visual Browser Automation for humans and teams.

## Features

- ✨ Modern React with TypeScript and Vite
- 🎨 Tailwind CSS v4 for styling
- 🌗 Dark mode support
- 📱 Fully responsive design
- ⚡ Fast development with hot module replacement
- 🧩 Reusable shadcn/ui components
- 🎯 SEO optimized with meta tags

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Build output will be in the `build/` directory.

## Project Structure

```
src/
├── components/      # React components
│   ├── ui/         # Reusable UI components (shadcn/ui)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions and routing
├── public/         # Static assets
├── App.tsx         # Main app component
├── main.tsx        # App entry point
└── index.css       # Global styles and theme
```

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Routing:** React Router
- **Forms:** React Hook Form + Zod

## License

MIT License - see original Automa project for details.
  