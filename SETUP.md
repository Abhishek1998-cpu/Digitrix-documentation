# DulyPlan Documentation Setup Guide

This guide will help you set up the DulyPlan documentation site locally.

## Prerequisites

- **Node.js** >= 20.0
- **npm** or **yarn**

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

This will:
- Start the development server
- Open http://localhost:3000 in your browser
- Enable hot-reloading for live updates

### 3. Build for Production

```bash
npm run build
```

This creates a `build/` directory with static files ready for deployment.

### 4. Serve Production Build Locally

```bash
npm run serve
```

## Project Structure

```
Dulyplan-documentation/
├── docs/                    # Documentation markdown files
│   ├── intro.md            # Homepage content
│   ├── getting-started/    # Getting started guides
│   ├── features/           # Feature documentation
│   ├── architecture/       # Architecture documentation
│   ├── api/                # API documentation
│   ├── development/        # Development guides
│   └── deployment/         # Deployment guides
├── blog/                    # Blog posts (optional)
├── src/                     # Source files
│   ├── components/         # React components
│   ├── css/                # Custom CSS
│   └── pages/              # Additional pages
├── static/                  # Static assets (images, etc.)
├── docusaurus.config.ts    # Docusaurus configuration
├── sidebars.ts             # Sidebar configuration
└── package.json            # Dependencies and scripts
```

## Configuration

### Main Configuration

Edit `docusaurus.config.ts` to customize:
- Site title and tagline
- Logo and favicon
- Navigation items
- Footer links
- Theme colors

### Sidebar Configuration

Edit `sidebars.ts` to customize the documentation sidebar structure.

## Adding New Documentation

1. Create a new markdown file in the appropriate `docs/` subdirectory
2. Add frontmatter at the top:

```markdown
---
sidebar_position: 1
---

# Your Page Title
```

3. The sidebar will auto-generate based on the file structure

## Customization

### Adding Custom CSS

Edit `src/css/custom.css` to add custom styles.

### Adding Custom Components

Add React components in `src/components/` and import them in your markdown files using MDX.

## Deployment

### Build the Site

```bash
npm run build
```

### Deploy Options

1. **Vercel/Netlify**: Connect your repository for automatic deployments
2. **GitHub Pages**: Use `npm run deploy`
3. **Static Hosting**: Upload the `build/` directory to any static host

## Next Steps

- Review the [Docusaurus Documentation](https://docusaurus.io/docs)
- Customize the homepage in `src/pages/index.tsx`
- Add your logo to `static/img/logo.svg`
- Update the configuration in `docusaurus.config.ts`

## Support

For issues or questions:
- Check [Docusaurus Documentation](https://docusaurus.io/docs)
- Review [Docusaurus GitHub Issues](https://github.com/facebook/docusaurus/issues)

