---
sidebar_position: 6
---

# Strapi Webhook Configuration

Learn how to configure Strapi webhooks to automatically update content in DulyPlan.

## What are Webhooks?

Webhooks allow Strapi to automatically notify DulyPlan backend when content is updated. This ensures that the cached content in MongoDB and Redis is always up-to-date without manual intervention.

## How It Works

1. **Content Update** - Content editor updates content in Strapi admin panel
2. **Webhook Trigger** - Strapi sends HTTP POST request to DulyPlan backend
3. **Backend Processing** - Backend receives webhook, updates MongoDB and Redis cache
4. **Automatic Sync** - Frontend automatically gets updated content on next request

## Webhook Endpoint

**URL:** `https://api.dulyplan.com/v1/strapi/` (production)
**URL:** `http://local.dulyplan.com:8085/v1/strapi/` (development)

**Method:** `POST`

**Authentication:** None required (webhook is public endpoint)

## Webhook Payload

Strapi sends the following payload structure:

```json
{
  "event": "entry.update",
  "model": "header-text",
  "entry": {
    "locale": "en",
    "hero_content": {
      "title": "Updated Title",
      "sub_title": "Updated subtitle",
      // ... other hero content
    },
    "analytics_content": { ... },
    "features_content": { ... },
    "services_content": { ... },
    "testimonials_content": { ... },
    "milestones_content": { ... },
    "trusted_companies_content": { ... },
    "faq_content": { ... },
    "newsletter_content": { ... },
    "footer_content": { ... },
    "header_content": { ... },
    "free_tools_content": { ... }
  }
}
```

## Configuring in Strapi

### Step 1: Access Webhook Settings

1. Log in to Strapi admin panel: `https://strapi.dulyplan.com/admin`
2. Go to **Settings** → **Webhooks**
3. Click **Create new webhook**

### Step 2: Configure Webhook

**Name:** DulyPlan Content Update

**URL:** 
- Production: `https://api.dulyplan.com/v1/strapi/`
- Development: `http://local.dulyplan.com:8085/v1/strapi/`

**Events to Trigger:**
- ✅ `entry.create` - When new content is created
- ✅ `entry.update` - When content is updated
- ✅ `entry.delete` - When content is deleted (optional)

**HTTP Headers (Optional):**
```
Content-Type: application/json
```

### Step 3: Test Webhook

1. Click **Trigger** button in Strapi webhook settings
2. Check backend logs to verify webhook was received
3. Verify content is updated in MongoDB and Redis

## Backend Processing

When webhook is received:

1. **Extract Data** - Backend extracts `entry` from payload
2. **Get Language** - Extracts `locale` from entry
3. **Update MongoDB** - Updates or creates document in `strapi_data` collection
4. **Update Redis** - Updates Redis cache with new data
5. **Return Response** - Returns updated document

### Code Flow

```javascript
// Backend receives webhook
const updatedData = req.body.entry;
const lang = req.body.entry.locale;

// Update MongoDB
await Strapi.updateOne(
  { lang: lang },
  { $set: { /* updated content */ } }
);

// Update Redis cache
await redisClient.set(
  `strapi-data-${lang}`,
  JSON.stringify(updatedDocument),
  "EX",
  3600
);
```

## Testing Webhooks

### Manual Test

You can manually test the webhook using curl:

```bash
curl -X POST http://local.dulyplan.com:8085/v1/strapi/ \
  -H "Content-Type: application/json" \
  -d '{
    "event": "entry.update",
    "model": "header-text",
    "entry": {
      "locale": "en",
      "hero_content": {
        "title": "Test Title"
      }
    }
  }'
```

### Verify Update

1. Check MongoDB:
   ```javascript
   db.strapi_data.findOne({ lang: "en" })
   ```

2. Check Redis:
   ```bash
   redis-cli GET strapi-data-en
   ```

3. Check Frontend:
   - Visit homepage
   - Content should reflect update

## Troubleshooting

### Webhook Not Received

1. **Check Strapi Configuration**
   - Verify webhook URL is correct
   - Check if events are enabled
   - Verify webhook is active

2. **Check Backend Logs**
   - Look for webhook POST requests
   - Check for errors in processing

3. **Check Network**
   - Verify Strapi can reach backend URL
   - Check firewall rules
   - Verify SSL certificates (for production)

### Content Not Updating

1. **Check Cache**
   - Redis cache might need to expire
   - Clear Redis cache manually if needed

2. **Check MongoDB**
   - Verify document was updated
   - Check language field matches

3. **Check Frontend**
   - Frontend might be using cached data
   - Clear browser cache
   - Check Redux state

### Common Errors

**Error: "No data found"**
- Webhook payload might be missing required fields
- Check `entry` structure in payload

**Error: "Something went wrong"**
- Check backend logs for detailed error
- Verify MongoDB connection
- Verify Redis connection

## Best Practices

1. **Monitor Webhooks** - Set up logging to track webhook calls
2. **Error Handling** - Implement retry logic for failed webhooks
3. **Security** - Consider adding webhook signature verification
4. **Testing** - Test webhooks in development before production
5. **Documentation** - Document webhook payload structure

## Next Steps

- **[Backend Integration](./backend-integration)** - Understand backend processing
- **[Usage Examples](./usage-examples)** - See how content is used

