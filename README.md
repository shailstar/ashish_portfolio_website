# Dr. Ashish - Psychiatrist Website

A professional, responsive psychiatric practice website built with Vue.js and Vite.

## Features

- **Home Page**: Professional introduction with practice highlights
- **About Page**: Doctor's qualifications, credentials, and philosophy
- **Services Page**: Comprehensive overview of psychiatric services offered
- **Appointment Page**: Appointment booking form with contact information
- **Professional Design**: Clean, calming aesthetics appropriate for mental health practice
- **Responsive Layout**: Mobile-friendly design for accessibility
- **Client-Side Routing**: Smooth navigation between pages with Vue Router

## Tech Stack

- **Vue.js 3**: Progressive JavaScript framework
- **Vite**: Next generation frontend tooling
- **Vue Router**: Client-side routing
- **CSS3**: Modern, professional styling

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
├── App.vue              # Navigation and layout
├── style.css            # Global styles and color scheme
└── pages/
    ├── Home.vue         # Welcome page with highlights
    ├── About.vue        # Doctor's bio and credentials
    ├── Services.vue     # Psychiatric services offered
    └── Contact.vue      # Appointment booking form

index.html              # HTML template
vite.config.js         # Vite configuration
package.json           # Project dependencies
```

## Customization

1. **Doctor Information**: Update name and bio in `src/pages/About.vue`
2. **Qualifications**: Edit credentials and specializations in `src/pages/About.vue`
3. **Services**: Modify service offerings in `src/pages/Services.vue`
4. **Contact Details**: Update phone, email, address, and hours in `src/pages/Contact.vue`
5. **Colors & Styling**: Professional color scheme in component `<style>` blocks or `src/style.css`

## Deployment

Build the project for production:

```bash
npm run build
```

This creates a `dist` folder with the optimized production build ready to deploy to:
- Netlify
- Vercel
- AWS
- Any static hosting service

## Privacy & Security

- Ensure all patient data handling complies with HIPAA regulations
- Use secure connections (HTTPS) in production
- Implement proper backend for form submission
- Regular security audits recommended

## License

MIT
