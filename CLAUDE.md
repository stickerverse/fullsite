# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a unified sticker marketplace application built with React/TypeScript that combines 4 different page experiences:

- **Homepage** (`/`) - AI-powered sticker designer landing page (uses Google Gemini AI)
- **Shop** (`/shop`) - Sticker marketplace/catalog browsing with filters and quick view
- **Designer** (`/designer`) - Die-cut sticker product configurator with Fabric.js canvas
- **Checkout** (`/checkout`) - Complete checkout flow with billing/shipping forms

The application uses React Router for navigation and shadcn/ui for the modern component system.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install --legacy-peer-deps
```

## Environment Setup

Set `GEMINI_API_KEY` in the root directory as an environment variable for AI image generation. The Vite config maps this to `process.env.API_KEY` in the application.

## Code Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navbar-components/  # Navigation components
│   └── [page-components]   # Components for each page
├── pages/                  # Page components (HomePage, StickerShop, etc.)
├── lib/                    # Utility functions (cn, utils)
├── services/               # API services (Gemini AI)
├── hooks/                  # Custom React hooks
├── types.ts                # TypeScript type definitions
└── constants.ts            # Static data and configuration
```

## Tech Stack

- **React 19.1.1** + **TypeScript 5.8.2**
- **Vite 6.2.0** for build tooling
- **React Router** for client-side routing
- **shadcn/ui** + **Radix UI** for modern component system
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Fabric.js** for canvas-based design tools
- **Lucide React** for icons

## Key Features

- **Modern Navigation**: Two-tier navigation with mobile-responsive design
- **AI Integration**: Google Gemini API for sticker image generation
- **Interactive Design**: Fabric.js canvas for die-cut sticker customization
- **E-commerce Flow**: Complete shop → design → checkout experience
- **Component System**: Consistent shadcn/ui design system throughout

## Important Notes

- Use `--legacy-peer-deps` for npm installs due to React 19 compatibility
- Static data is defined in constants.ts files rather than external APIs
- Navigation is hidden on checkout pages for focused user experience
- All routing is handled client-side with React Router
