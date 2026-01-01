---
sidebar_position: 3
---

# Frontend Strapi Integration

Learn how the frontend integrates with Strapi content.

## Overview

The frontend fetches Strapi content through the backend API and uses it to render marketing pages, navigation menus, and dynamic content.

## How Frontend Fetches Data

### Server-Side Rendering (SSR)

Some pages fetch Strapi data on the server:

**Example:** `app/home/page.tsx`

```typescript
async function getData(lang: string) {
  const url = `${API_ROOT}/v1/strapi/fetch-data?lang=${lang}`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

// Server component
export default async function HomePageWrapper() {
  const data = await getData("en");
  return <HomePage initialData={data} />;
}
```

**Benefits:**
- Faster initial page load
- Better SEO (content in HTML)
- Reduced client-side API calls

### Client-Side Fetching

Some components fetch data on the client:

**Example:** `components/HomePage.tsx`

```typescript
const { data, execute: fetchStrapiContent } = useApi();

useEffect(() => {
  if (!initialData) {
    fetchStrapiContent(() =>
      ApiService.get(GetStrapiContentRoute(lang || "en"))
    );
  }
}, [lang]);
```

## Redux State Management

### Strapi Content Slice

**Location:** `src/redux/slices/strapiContentSlice.ts`

**State Structure:**
```typescript
{
  homePageContent: {
    heroContent: { ... },
    analyticsContent: { ... },
    featuresContent: { ... },
    // ... other sections
  }
}
```

**Actions:**
- `setHomePageContent(data)` - Store Strapi content in Redux

### Usage in Components

```typescript
// Get Strapi content from Redux
const strapiContent = useSelector((state: any) => state.strapiContent);

// Access specific sections
const headerContent = strapiContent?.homePageContent?.headerContent;
const heroContent = strapiContent?.homePageContent?.heroContent;
```

## Where Strapi Content is Used

### Homepage (`/home`)

- **Hero Section** - Main banner and headline
- **Features Section** - Feature cards and descriptions
- **Analytics Section** - Analytics content
- **Services Section** - Services offered
- **Testimonials** - Customer testimonials
- **Milestones** - Company milestones
- **FAQ Section** - Frequently asked questions
- **Footer** - Footer links and information

### Navigation Header

- **Menu Items** - Navigation links (Features, Resources, Blogs, etc.)
- **Dropdown Content** - Dropdown menu items and descriptions

### Free Tools Pages (`/tools`)

- **Tools Listings** - List of available free tools
- **Tool Descriptions** - Descriptions for each tool
- **Tool Categories** - Tool categories and groupings

## API Route Helper

**Location:** `src/apis/auth/auth.route.ts`

```typescript
export const GetStrapiContentRoute = (lang: string) =>
  urlJoin(StrapiUrl, `fetch-data?lang=${lang}`);
```

**Usage:**
```typescript
const route = GetStrapiContentRoute("en");
// Returns: "/v1/strapi/fetch-data?lang=en"
```

## Custom Hook

**Location:** `src/hooks/useApi.ts`**

A custom hook for API calls with loading and error states:

```typescript
const { data, loading, error, execute } = useApi();

// Fetch Strapi content
execute(() => ApiService.get(GetStrapiContentRoute("en")));
```

## Data Flow Example

### Homepage Rendering

1. **Server Component** (`app/home/page.tsx`)
   - Fetches Strapi data on server
   - Passes `initialData` to client component

2. **Client Component** (`components/HomePage/HomePage.tsx`)
   - Receives `initialData` prop
   - If no `initialData`, fetches on client
   - Dispatches to Redux store
   - Renders sections using Strapi data

3. **Child Components**
   - Receive Strapi data as props
   - Render content dynamically
   - Example: `<Hero data={heroContent} />`

## Language Support

### Multi-Language Content

- Content is fetched by language: `?lang=en`, `?lang=es`, etc.
- Each language has separate cached data
- Frontend passes language from URL params

**Example:**
```typescript
// From URL: /en/home
const { lang } = useParams(); // "en"
fetchStrapiContent(() => ApiService.get(GetStrapiContentRoute(lang)));
```

## Error Handling

### Fallback Behavior

- If Strapi fetch fails → Component handles gracefully
- Shows default/fallback content if available
- Logs errors for debugging

### Loading States

- Components show loading state while fetching
- `useApi` hook provides `loading` state
- Prevents content flash

## Best Practices

1. **Use SSR When Possible** - Faster initial load
2. **Cache in Redux** - Avoid redundant API calls
3. **Handle Missing Data** - Always check if data exists
4. **Language Support** - Always pass language parameter
5. **Error Boundaries** - Wrap components in error boundaries

## Next Steps

- **[Data Structure](./data-structure)** - Understanding the data format
- **[Usage Examples](./usage-examples)** - Code examples

