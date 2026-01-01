---
sidebar_position: 4
---

# Strapi Data Structure

Understand the structure of Strapi content data in DulyPlan.

## Overall Structure

Strapi content is organized into sections, each containing specific content for different parts of the website.

```json
{
  "_id": "document-id",
  "heroContent": { ... },
  "analyticsContent": { ... },
  "featuresContent": { ... },
  "servicesContent": { ... },
  "testimonialsContent": { ... },
  "milestonesContent": { ... },
  "trustedCompaniesContent": { ... },
  "faqContent": { ... },
  "newsLetterContent": { ... },
  "footerContent": { ... },
  "headerContent": { ... },
  "freeToolsContent": { ... },
  "lang": "en",
  "createdAt": "2025-01-01T00:00:00.000Z",
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```

## Content Sections

### Hero Content

Main homepage banner section:

```json
{
  "heroContent": {
    "title": "Plan, Schedule and Manage your Social Media Presence",
    "sub_title": "Redefine the social media presence with...",
    "button1": {
      "link": "/",
      "text": "Watch Demo"
    },
    "button2": {
      "link": "/",
      "text": "Sign up for Free"
    },
    "hero_image": "https://cdn.pixelbin.io/..."
  }
}
```

### Header Content

Navigation menu items:

```json
{
  "headerContent": {
    "title": "Features",
    "sub_items": [
      {
        "title": "Feature Name",
        "subtitle": "Feature description",
        "icon": "icon-name",
        "link": "/feature-url",
        "category": "features"
      }
    ]
  }
}
```

### Features Content

Features section on homepage:

```json
{
  "featuresContent": {
    "title": "Features Section Title",
    "sub_title": "Features description",
    "badge_title": "Features",
    "sub_sections": [
      {
        "icon": "MessageIcon",
        "title": "Feature Title",
        "subtitle": "Feature description"
      }
    ]
  }
}
```

### Analytics Content

Analytics section:

```json
{
  "analyticsContent": {
    "image": "https://strapi.dulyplan.com/uploads/...",
    "title": "Get the cutting-edge features...",
    "sub_title": "Powerful analytics...",
    "badge_title": "Analytics"
  }
}
```

### Free Tools Content

Free tools listings:

```json
{
  "freeToolsContent": {
    "toolsList": [
      {
        "mainTitle": "Social Media Post Generator",
        "mainTitleSlug": "all-social-media-post-generator",
        "toolsList": [
          {
            "title": "Facebook Post Generator",
            "slug": "facebook-post-generator",
            "description": "Generate Facebook posts...",
            "icon": "FacebookIcon"
          }
        ]
      }
    ]
  }
}
```

### FAQ Content

Frequently asked questions:

```json
{
  "faqContent": {
    "questions": [
      {
        "question": "What is DulyPlan?",
        "answer": "DulyPlan is a social media management platform..."
      }
    ]
  }
}
```

### Footer Content

Footer links and information:

```json
{
  "footerContent": {
    "links": [
      {
        "title": "Company",
        "items": [
          { "text": "About Us", "link": "/about" },
          { "text": "Contact", "link": "/contact" }
        ]
      }
    ]
  }
}
```

## Data Access Patterns

### In Redux

```typescript
const strapiContent = useSelector((state: any) => state.strapiContent);

// Access hero content
const heroTitle = strapiContent?.homePageContent?.heroContent?.title;

// Access header content
const headerItems = strapiContent?.homePageContent?.headerContent;
```

### In Components

```typescript
// Direct prop access
<Hero data={initialData?.heroContent} />

// From Redux
const features = strapiContent?.homePageContent?.featuresContent;
<FeaturesSection data={features} />
```

## Language-Specific Data

Each language has its own data entry:

- English: `lang: "en"`
- Spanish: `lang: "es"`
- French: `lang: "fr"`
- etc.

Data is fetched by language:
```typescript
GET /v1/strapi/fetch-data?lang=en
GET /v1/strapi/fetch-data?lang=es
```

## Data Transformation

### From Strapi to Backend

Strapi API returns:
```json
{
  "data": [{
    "attributes": {
      "hero_content": { ... },
      "analytics_content": { ... }
    }
  }]
}
```

Backend transforms to:
```json
{
  "heroContent": { ... },
  "analyticsContent": { ... }
}
```

### Field Name Mapping

- `hero_content` → `heroContent`
- `analytics_content` → `analyticsContent`
- `features_content` → `featuresContent`
- etc. (camelCase conversion)

## Next Steps

- **[Usage Examples](./usage-examples)** - See how to use this data in code
- **[Backend Integration](./backend-integration)** - Understand backend processing

