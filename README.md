# Ashish's Portfolio Website

A modern, responsive portfolio website built with Vue.js and Vite.

## Features

- **Home Page**: Hero section with call-to-action buttons
- **About Page**: Personal bio and skills listing
- **Projects Page**: Showcase of your projects with technologies used
- **Contact Page**: Contact form and social links
- **Responsive Design**: Mobile-friendly layout
- **Navigation**: Smooth navigation between pages with Vue Router

## Tech Stack

- **Vue.js 3**: Progressive JavaScript framework
- **Vite**: Next generation frontend tooling
- **Vue Router**: Client-side routing
- **CSS3**: Modern styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── main.js              # Application entry point
├── App.vue              # Root component with navigation
├── style.css            # Global styles
└── pages/
    ├── Home.vue         # Home page
    ├── About.vue        # About page
    ├── Projects.vue     # Projects showcase
    └── Contact.vue      # Contact form

index.html              # HTML template
vite.config.js         # Vite configuration
package.json           # Project dependencies
```

## Customization

1. **Update Personal Info**: Edit the content in each page component
2. **Add Projects**: Modify the projects array in `src/pages/Projects.vue`
3. **Styling**: Customize colors and styles in component `<style>` blocks or `src/style.css`
4. **Social Links**: Update links in `src/pages/Contact.vue`

## Deployment

Build the project for production:

```bash
npm run build
```

This creates a `dist` folder with the optimized production build ready to deploy to services like:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## License

MIT
