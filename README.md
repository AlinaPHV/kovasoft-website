# KovaSoft Website

A modern, professional website for KovaSoft - a software development company.

## Features

- **Home Page**: Hero section, services overview, statistics, and call-to-action
- **About Page**: Company story, mission, values, and why choose us
- **Contact Page**: Contact form and company information
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design inspired by industry leaders

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
└── public/             # Static assets
```

## Customization

### Update Company Information

- Edit email addresses in `components/Footer.tsx` and `app/contact/page.tsx`
- Update company name "KovaSoft" throughout the codebase
- Modify content in respective page files

### Styling

- Tailwind configuration: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Color scheme uses primary blue colors (customizable in tailwind.config.ts)

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

## License

© 2024 KovaSoft. All rights reserved.

