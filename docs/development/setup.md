---
sidebar_position: 1
---

# Development Setup

This guide will help you set up your development environment for DulyPlan.

## Prerequisites

- **Node.js** >= 20.0
- **npm** or **yarn**
- **MongoDB** (local or remote connection)
- **Redis** (for job queue)
- **Git**

## Frontend Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Dulyplan-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://local.dulyplan.com:8085
NEXT_PUBLIC_STRAPI_URL=https://strapi.dulyplan.com
```

### 4. Start Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Backend Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Dulyplan-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/digitrix-media
JWT_SECRET=your-secret-key
REDIS_URL=redis://localhost:6379
BREVO_SERVER_USER_ID=your-brevo-id
BREVO_SERVER_PASSWORD=your-brevo-password
```

### 4. Start Development Server

```bash
npm run dev
```

The backend will be available at `http://local.dulyplan.com:8085`

## Database Setup

### MongoDB

1. Install MongoDB locally or use a cloud instance
2. Update `MONGO_URI` in backend `.env`
3. The application will create collections automatically

### Redis

1. Install Redis locally or use a cloud instance
2. Update `REDIS_URL` in backend `.env`
3. Required for background job processing

## Next Steps

- **[Development Workflow](./workflow)** - Learn the development workflow
- **[Code Structure](./code-structure)** - Understand the codebase structure

