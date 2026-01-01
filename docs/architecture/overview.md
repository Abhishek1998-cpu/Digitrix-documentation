---
sidebar_position: 1
---

# Architecture Overview

This document provides a high-level overview of the DulyPlan system architecture.

## System Components

DulyPlan consists of the following main components:

### Frontend (Dulyplan-frontend)

- **Technology**: Next.js 14 with React
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **UI Components**: Material-UI (MUI), Radix UI
- **Styling**: CSS Modules, Tailwind CSS

### Backend (Dulyplan-backend)

- **Technology**: Node.js with Express
- **Language**: JavaScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Job Queue**: BullMQ with Redis

### Additional Services

- **Strapi CMS**: Content management for marketing pages
- **Redis**: Caching and job queue management
- **OAuth Providers**: Integration with social media platforms

## Architecture Diagram

```
┌─────────────────┐
│   Frontend      │
│  (Next.js/React) │
└────────┬─────────┘
         │
         │ HTTP/REST API
         │
┌────────▼─────────┐
│    Backend       │
│  (Node.js/Express)│
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌──▼────┐
│ MongoDB│ │ Redis │
└───────┘ └───────┘
```

## Data Flow

1. User interacts with the frontend
2. Frontend makes API calls to the backend
3. Backend processes requests and interacts with MongoDB
4. Background jobs are queued in Redis/BullMQ
5. Jobs are processed asynchronously
6. Results are returned to the frontend

## Next Steps

- **[Backend Architecture](./backend)** - Detailed backend documentation
- **[Frontend Architecture](./frontend)** - Detailed frontend documentation

