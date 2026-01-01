---
sidebar_position: 3
---

# Frontend Architecture

This document describes the frontend architecture of DulyPlan.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **State Management**: Redux Toolkit
- **UI Components**: 
  - Material-UI (MUI)
  - Radix UI
  - Custom components
- **Styling**: 
  - CSS Modules
  - Tailwind CSS
- **Date Handling**: date-fns
- **Form Handling**: React Hook Form

## Project Structure

```
Dulyplan-frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── auth/              # Authentication pages
│   │   └── [lang]/            # Internationalized routes
│   ├── components/            # Reusable components
│   │   ├── Dashboard/         # Dashboard components
│   │   ├── Calendar/           # Calendar components
│   │   └── ui/                 # Base UI components
│   ├── features/              # Feature modules
│   ├── redux/                 # Redux store and slices
│   ├── services/              # API service layer
│   ├── apis/                  # API route definitions
│   ├── assets/                # Static assets
│   └── common/               # Shared utilities
├── public/                    # Public static files
└── package.json
```

## Key Features

### Routing

- Next.js App Router for file-based routing
- Server-side rendering (SSR) for SEO
- Client-side navigation for SPA-like experience

### State Management

- Redux Toolkit for global state
- React Context for component-level state
- Local state with React hooks

### Component Architecture

- **Pages**: Route-level components
- **Features**: Feature-specific components
- **Components**: Reusable UI components
- **Atoms**: Basic building blocks

### Styling Approach

- CSS Modules for component-scoped styles
- Tailwind CSS for utility classes
- Material-UI for complex components
- Custom CSS for specific designs

## Development Workflow

1. Create pages in `src/app/`
2. Build reusable components in `src/components/`
3. Manage state with Redux in `src/redux/`
4. Call APIs through services in `src/services/`

## Next Steps

- **[Backend Architecture](./backend)** - Backend implementation details
- **[Development Setup](../development/setup)** - Development environment setup

