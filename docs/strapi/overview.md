---
sidebar_position: 1
---

# Strapi Integration Overview

Learn how DulyPlan integrates with Strapi CMS for content management.

## What is Strapi?

Strapi is a headless Content Management System (CMS) that DulyPlan uses to manage marketing and public-facing content. Instead of hardcoding content in the application, content editors can update text, images, and other content through Strapi's admin panel.

## Why Strapi?

DulyPlan uses Strapi to:

- **Manage Marketing Content** - Homepage content, features, testimonials, FAQs
- **Support Multiple Languages** - Content can be stored in different languages
- **Easy Content Updates** - Non-technical team members can update content without code changes
- **Centralized Content** - All marketing content in one place

## How It Works

### The Flow

```
Strapi CMS (strapi.dulyplan.com)
    ↓
Backend API (/v1/strapi/fetch-data)
    ↓
MongoDB Cache (stores Strapi data)
    ↓
Redis Cache (fast retrieval)
    ↓
Frontend (displays content)
```

### Step-by-Step Process

1. **Content Creation** - Content editors create/update content in Strapi admin panel
2. **Webhook Trigger** - When content is updated, Strapi sends a webhook to DulyPlan backend
3. **Data Fetching** - Backend fetches latest content from Strapi API
4. **Caching** - Data is stored in MongoDB and Redis for fast access
5. **Frontend Display** - Frontend fetches cached data and displays it

## What Content is Managed?

Strapi manages the following content sections:

- **Hero Content** - Main homepage banner and headline
- **Header Content** - Navigation menu items and dropdowns
- **Features Content** - Features section on homepage
- **Analytics Content** - Analytics section content
- **Services Content** - Services offered
- **Testimonials Content** - Customer testimonials
- **Milestones Content** - Company milestones
- **FAQ Content** - Frequently asked questions
- **Footer Content** - Footer links and information
- **Free Tools Content** - Free tools listings and descriptions
- **Newsletter Content** - Newsletter signup section

## Key Features

### Multi-Language Support

- Content can be stored in different languages (en, es, fr, etc.)
- Frontend requests content by language: `/v1/strapi/fetch-data?lang=en`
- Each language has its own cached data

### Caching Strategy

- **Redis Cache** - Fast in-memory cache (1 hour TTL)
- **MongoDB Cache** - Persistent cache storage
- **Fallback** - If cache misses, fetches from Strapi API

### Webhook Integration

- Strapi sends webhooks when content is updated
- Backend automatically updates cached data
- Ensures frontend always has latest content

## Next Steps

- **[Backend Integration](./backend-integration)** - How backend integrates with Strapi
- **[Frontend Integration](./frontend-integration)** - How frontend uses Strapi data
- **[Data Structure](./data-structure)** - Understanding the data structure

