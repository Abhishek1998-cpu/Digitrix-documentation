---
sidebar_position: 5
---

# Strapi Usage Examples

Practical examples of how to use Strapi content in your code.

## Frontend Examples

### Example 1: Fetching Data in Server Component

```typescript
// app/home/page.tsx
const API_ROOT = process.env.NODE_ENV === "production"
  ? "https://api.dulyplan.com"
  : "http://local.dulyplan.com:8085";

async function getData(lang: string) {
  try {
    const url = `${API_ROOT}/v1/strapi/fetch-data?lang=${lang}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function HomePageWrapper() {
  const data = await getData("en");
  return <HomePage initialData={data} />;
}
```

### Example 2: Fetching Data in Client Component

```typescript
// components/HomePage.tsx
"use client";

import { useApi } from "@/hooks/useApi";
import { ApiService } from "@/services/api.service";
import { GetStrapiContentRoute } from "@/apis/auth/auth.route";
import { setHomePageContent } from "@/redux/slices/strapiContentSlice";
import { useDispatch } from "react-redux";

const HomePage = ({ initialData }) => {
  const dispatch = useDispatch();
  const { data, execute: fetchStrapiContent } = useApi();

  useEffect(() => {
    if (!initialData) {
      fetchStrapiContent(() =>
        ApiService.get(GetStrapiContentRoute("en"))
      );
    } else {
      dispatch(setHomePageContent(initialData));
    }
  }, [initialData]);

  return (
    <div>
      <Hero data={initialData?.heroContent} />
      <FeaturesSection data={initialData?.featuresContent} />
    </div>
  );
};
```

### Example 3: Using Strapi Content from Redux

```typescript
// components/Header.tsx
"use client";

import { useSelector } from "react-redux";

const Header = () => {
  const strapiContent = useSelector((state: any) => state.strapiContent);
  const headerContent = strapiContent?.homePageContent?.headerContent;

  return (
    <nav>
      {headerContent?.sub_items?.map((item) => (
        <a key={item.link} href={item.link}>
          {item.title}
        </a>
      ))}
    </nav>
  );
};
```

### Example 4: Rendering Hero Section

```typescript
// components/Hero.tsx
const Hero = ({ data }) => {
  if (!data) return null;

  return (
    <section className="hero">
      <h1>{data.title}</h1>
      <p>{data.sub_title}</p>
      <img src={data.hero_image} alt="Hero" />
      <button onClick={() => window.location.href = data.button1.link}>
        {data.button1.text}
      </button>
    </section>
  );
};
```

### Example 5: Filtering Free Tools

```typescript
// Filter tools by category
const strapiContent = useSelector((state: any) => state.strapiContent);
const freeToolsContent = strapiContent?.homePageContent?.freeToolsContent;

const toolCategory = freeToolsContent?.toolsList?.find(
  (category) => category.mainTitleSlug === "all-social-media-post-generator"
);

const tools = toolCategory?.toolsList || [];
```

## Backend Examples

### Example 1: Fetching from Strapi API

```javascript
// controllers/strapiController/strapiController.js
const axios = require("axios");
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const response = await axios.get(
  `https://strapi.dulyplan.com/api/header-texts?locale=${lang}`,
  {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  }
);

const data = response.data.data?.[0].attributes;
```

### Example 2: Caching in Redis

```javascript
const Redis = require("ioredis");
const redisClient = new Redis({ host: REDIS_URI, port: 6379 });

// Set cache
await redisClient.set(
  `strapi-data-${lang}`,
  JSON.stringify(strapiData),
  "EX",
  3600 // 1 hour TTL
);

// Get cache
const cachedData = await redisClient.get(`strapi-data-${lang}`);
if (cachedData) {
  return JSON.parse(cachedData);
}
```

### Example 3: Storing in MongoDB

```javascript
const { Strapi } = require("../../models/index.js");

// Create new entry
const strapiData = await Strapi.create({
  heroContent: data.hero_content,
  analyticsContent: data.analytics_content,
  featuresContent: data.features_content,
  lang: lang,
});

// Update existing entry
await Strapi.updateOne(
  { lang: lang },
  {
    $set: {
      heroContent: data.hero_content,
      // ... other fields
    },
  }
);
```

## Common Patterns

### Pattern 1: Server-Side Fetch with Fallback

```typescript
// Fetch on server, fallback to client if needed
export default async function Page() {
  const data = await getData("en");
  return <Component initialData={data} />;
}

// Component handles client-side fetch if initialData is null
const Component = ({ initialData }) => {
  const { data, execute } = useApi();
  
  useEffect(() => {
    if (!initialData) {
      execute(() => ApiService.get(GetStrapiContentRoute("en")));
    }
  }, [initialData]);
  
  const content = initialData || data;
  return <div>{/* Render content */}</div>;
};
```

### Pattern 2: Redux State Management

```typescript
// Fetch and store in Redux
useEffect(() => {
  if (data) {
    dispatch(setHomePageContent(data));
  }
}, [data, dispatch]);

// Use from Redux
const strapiContent = useSelector((state: any) => state.strapiContent);
const heroContent = strapiContent?.homePageContent?.heroContent;
```

### Pattern 3: Language-Aware Fetching

```typescript
// Get language from URL params
const { lang } = useParams();

// Fetch content for that language
fetchStrapiContent(() => ApiService.get(GetStrapiContentRoute(lang || "en")));
```

## Best Practices

1. **Always Check for Data**
   ```typescript
   if (!data) return null; // or show loading/fallback
   ```

2. **Use Optional Chaining**
   ```typescript
   const title = data?.heroContent?.title;
   ```

3. **Provide Fallbacks**
   ```typescript
   const title = data?.heroContent?.title || "Default Title";
   ```

4. **Handle Loading States**
   ```typescript
   if (loading) return <LoadingSpinner />;
   if (error) return <ErrorMessage />;
   ```

5. **Cache in Redux**
   ```typescript
   // Check Redux first before fetching
   const cached = useSelector((state) => state.strapiContent);
   if (cached?.homePageContent) {
     // Use cached data
   }
   ```

## Next Steps

- **[Backend Integration](./backend-integration)** - Understand backend implementation
- **[Frontend Integration](./frontend-integration)** - Understand frontend implementation

