---
sidebar_position: 2
---

# Backend Strapi Integration

Learn how the backend integrates with Strapi CMS.

## Overview

The backend acts as a **middleware layer** between Strapi CMS and the frontend. It fetches content from Strapi, caches it for performance, and serves it to the frontend.

## API Endpoints

### Fetch Strapi Data

```http
GET /v1/strapi/fetch-data?lang=en
```

**Purpose:** Fetch content from Strapi (or cache) and return it to the frontend.

**Query Parameters:**
- `lang` (optional) - Language code (default: "en")

**Response:**
```json
{
  "heroContent": { ... },
  "analyticsContent": { ... },
  "featuresContent": { ... },
  // ... other content sections
  "lang": "en"
}
```

### Update Strapi Data (Webhook)

```http
POST /v1/strapi/
```

**Purpose:** Webhook endpoint that Strapi calls when content is updated.

**Request Body:**
```json
{
  "entry": {
    "locale": "en",
    "hero_content": { ... },
    "analytics_content": { ... },
    // ... other content
  }
}
```

## How It Works

### Fetching Data Flow

1. **Check Redis Cache First**
   - Look for cached data in Redis
   - Cache key: `strapi-data-{lang}`
   - If found → Return cached data immediately

2. **Check MongoDB Cache**
   - If Redis cache miss, check MongoDB
   - Look for existing entry with matching language
   - If found → Cache in Redis and return

3. **Fetch from Strapi API**
   - If no cache found, fetch from Strapi
   - API URL: `https://strapi.dulyplan.com/api/header-texts?locale={lang}`
   - Uses Bearer token authentication
   - Transform and store in MongoDB
   - Cache in Redis for 1 hour
   - Return to frontend

### Webhook Update Flow

1. **Strapi Triggers Webhook**
   - Content editor updates content in Strapi
   - Strapi sends POST request to `/v1/strapi/`

2. **Backend Processes Update**
   - Extract content from webhook payload
   - Update or create MongoDB entry
   - Update Redis cache
   - Return updated data

## Caching Strategy

### Redis Cache

- **Purpose:** Fast in-memory cache for quick responses
- **TTL:** 3600 seconds (1 hour)
- **Key Format:** `strapi-data-{lang}`
- **Benefits:** Very fast, reduces Strapi API calls

### MongoDB Cache

- **Purpose:** Persistent storage of Strapi content
- **Collection:** `strapi_data`
- **Fields:** All content sections + language
- **Benefits:** Backup cache, survives Redis restarts

## Code Structure

### Controller

**Location:** `Digitrix-backend/controllers/strapiController/strapiController.js`

**Functions:**
- `strapiFetchData()` - Fetches data with caching
- `strapiDataUpdate()` - Handles webhook updates

### Model

**Location:** `Digitrix-backend/models/strapi_data.model.js`

**Schema Fields:**
- `heroContent` - Hero section content
- `analyticsContent` - Analytics section
- `featuresContent` - Features section
- `servicesContent` - Services section
- `testimonialsContent` - Testimonials
- `milestonesContent` - Milestones
- `trustedCompaniesContent` - Trusted companies
- `faqContent` - FAQ section
- `newsLetterContent` - Newsletter section
- `footerContent` - Footer content
- `headerContent` - Header/navigation content
- `freeToolsContent` - Free tools listings
- `lang` - Language code

### Routes

**Location:** `Digitrix-backend/routes/strapiApis/routes.js`

**Endpoints:**
- `GET /v1/strapi/fetch-data` - Fetch content
- `POST /v1/strapi/` - Webhook callback

## Environment Variables

Required environment variables:

```env
STRAPI_API_TOKEN=your-strapi-api-token
REDIS_URI=localhost  # or your Redis host
```

## Error Handling

- If Strapi API fails → Returns 500 error
- If no data found → Returns 404 error
- If cache fails → Falls back to Strapi API
- All errors are logged for debugging

## Performance Benefits

1. **Fast Response Times** - Redis cache provides sub-millisecond responses
2. **Reduced API Calls** - Caching reduces calls to Strapi API
3. **Offline Resilience** - MongoDB cache works even if Strapi is temporarily unavailable
4. **Cost Efficiency** - Fewer API calls to Strapi

## Next Steps

- **[Frontend Integration](./frontend-integration)** - How frontend uses this data
- **[Data Structure](./data-structure)** - Understanding the data format

