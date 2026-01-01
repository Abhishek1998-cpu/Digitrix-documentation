---
sidebar_position: 1
---

# API Overview

The DulyPlan API provides programmatic access to the platform's features and data.

## Base URL

```
Production: https://api.dulyplan.com/v1
Development: http://local.dulyplan.com:8085/v1
```

## Authentication

All API requests require authentication using JWT tokens. The token is sent as a cookie named `token`.

## API Structure

- **Authentication APIs** - User registration, login, email verification
- **Dashboard APIs** - Post management, scheduling, drafts
- **Social Media APIs** - Account connections, OAuth integrations
- **Calendar/Gantt APIs** - Calendar view data, date filtering
- **Error Logs APIs** - Error tracking and resolution

## Response Format

All API responses follow a consistent format:

```json
{
  "message": "Success message",
  "data": { ... }
}
```

## Error Handling

Errors are returned with appropriate HTTP status codes:

- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## Next Steps

- **[Authentication API](./authentication)** - Authentication endpoints
- **[Post Management API](./posts)** - Post creation and management
- **[Social Accounts API](./social-accounts)** - Social media account management

