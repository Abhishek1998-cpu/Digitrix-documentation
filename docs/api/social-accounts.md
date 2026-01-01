---
sidebar_position: 4
---

# Social Accounts API

API endpoints for managing social media account connections.

## Endpoints

### Get Connected Accounts

```http
GET /v1/dashboard/channel/accounts
```

### Connect Account

```http
POST /v1/oauth/connect/:platform
```

### Disconnect Account

```http
DELETE /v1/dashboard/channel/accounts/:accountId
```

## Next Steps

- **[API Overview](./overview)** - Return to API overview
- **[Authentication API](./authentication)** - Authentication endpoints

