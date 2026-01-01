# DulyPlan Documentation

Official documentation for DulyPlan - A comprehensive social media management platform.

## Overview

This documentation site is built with [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Getting Started

### Prerequisites

- Node.js >= 20.0
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

Generate static content into the `build` directory:

```bash
npm run build
```

This can be served using any static contents hosting service.

### Serve

Serve the built site locally:

```bash
npm run serve
```

## Documentation Structure

```
docs/
├── intro.md                    # Getting started
├── architecture/              # System architecture
│   ├── overview.md
│   ├── backend.md
│   └── frontend.md
├── features/                  # Feature documentation
│   ├── authentication.md
│   ├── posts.md
│   └── scheduling.md
├── api/                       # API documentation
│   ├── authentication.md
│   └── endpoints.md
├── deployment/                # Deployment guides
│   └── setup.md
└── development/               # Development guides
    ├── setup.md
    └── contributing.md
```

## Contributing

When contributing to the documentation:

1. Create a new branch for your changes
2. Make your edits in the `docs/` directory
3. Test locally using `npm start`
4. Submit a pull request

## License

Copyright © 2025 DulyPlan. All rights reserved.
