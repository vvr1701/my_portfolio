# Vishnu Vardhan Reddy - Backend Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing backend development skills and projects.

## Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd my-instant-show
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ThemeToggle.tsx # Dark/light theme toggle
├── pages/              # Page components
├── assets/             # Static assets
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## Features

- Responsive design for all devices
- Dark/light theme support
- Smooth scrolling navigation
- Interactive project showcase
- Contact information and social links

## Deployment

This project can be deployed to any static hosting service like GitHub Pages, Vercel, Netlify, or any web server.

For GitHub Pages deployment:
```bash
npm run build
# Deploy the dist/ folder contents
```
