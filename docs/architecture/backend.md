---
sidebar_position: 2
---

# Backend Architecture

This document describes the backend architecture of DulyPlan.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Job Queue**: BullMQ with Redis
- **File Storage**: DigitalOcean Spaces / AWS S3

## Project Structure

```
Dulyplan-backend/
├── controllers/          # Request handlers
│   ├── userAuth/       # Authentication controllers
│   ├── dashboard/      # Dashboard controllers
│   └── social/         # Social media platform controllers
├── models/             # Mongoose models
│   ├── user.model.js
│   ├── org.model.js
│   ├── post.model.js
│   └── channel.model.js
├── routes/             # API routes
├── services/           # Business logic
│   ├── user-auth/
│   ├── dashboard/
│   ├── oauth/
│   └── post-creation/
├── middlewares/        # Express middlewares
│   └── auth.js        # Authentication middleware
├── workers/            # Background job workers
└── connections/        # Database connections
```

## Key Components

### Authentication

- JWT-based authentication
- Cookie-based session management
- OAuth integration (Google, Facebook)
- Email verification system

### Database

- MongoDB for primary data storage
- Mongoose for schema modeling
- Organization-based data isolation

### Job Processing

- BullMQ for background job processing
- Redis for job queue management
- Workers for async operations (post publishing, etc.)

## API Structure

All protected routes are prefixed with `/v1/` and require authentication:

- `/v1/auth/` - Authentication endpoints
- `/v1/dashboard/` - Dashboard operations
- `/v1/gantt/` - Calendar/Gantt chart data
- `/v1/oauth/` - OAuth integrations
- `/v1/social/` - Social media platform APIs

## Next Steps

- **[Frontend Architecture](./frontend)** - Frontend implementation details
- **[API Reference](../api/overview)** - Complete API documentation

