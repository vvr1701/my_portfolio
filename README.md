# Vishnu Vardhan Reddy - Backend Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing frontend development skills and projects.

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

### GitHub Pages Deployment

1. **Push your code to your existing `my-portfolio` repository:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main
```

2. **Enable GitHub Pages:**
   - Go to your `my-portfolio` repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **The GitHub Actions workflow is already created** (`.github/workflows/deploy.yml`)

4. **Your site will be available at:** `https://vishnuvardhanreddy.me/` (using your custom domain)

### Alternative Deployment Options

- **Vercel:** Connect your GitHub repo and deploy automatically
- **Netlify:** Drag & drop the `dist` folder or connect via Git
- **Firebase Hosting:** Use Firebase CLI to deploy
```
