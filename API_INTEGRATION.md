# Single Page Application - API Integration

This project has been updated to fetch dynamic content from a backend API instead of using static data arrays.

## API Integration Overview

### Backend API

- **Base URL**: `https://dash-1-iefb.onrender.com/`
- **Main Endpoint**: `/api/sections` - Returns all sections data
- **Individual Section**: `/api/sections/:sectionName` - Returns specific section data

### Project Structure

```
lib/
├── api.js                 # API service functions
contexts/
├── DataContext.js         # React context for global data management
app/
├── components/
│   ├── LoadingSpinner.jsx # Loading components
│   ├── Hero.jsx           # ✅ Updated to use API data
│   ├── Header.jsx         # ✅ Updated to use API data
│   ├── Footer.jsx         # ✅ Updated to use API data
│   └── Sections/
│       ├── Section2.jsx   # ✅ Updated (About - Features)
│       ├── Section3.jsx   # ✅ Updated (About - Creative Spirit)
│       ├── Section4.jsx   # ✅ Updated (About - Accordion)
│       ├── Section5.jsx   # ✅ Updated (Our Work - Case Studies)
│       ├── Section14.jsx  # ✅ Updated (News - Recent Writings)
│       └── ...            # Other sections (can be updated similarly)
```

## API Data Structure

The backend API returns data organized by sections and subsections:

### Main Sections

- `about` - About page content (section1, section2, section3)
- `our_work` - Portfolio/work showcase (section1, section2, section3, section4)
- `services` - Services information (section1, section2)
- `team` - Team information (section1, section2, section3)
- `news` - News/blog content (section1, section2)
- `contact` - Contact information (section1, section2)
- `header` - Header configuration (navigation, logo)
- `footer` - Footer content (about, news, links, contact)
- `general-info` - Site-wide settings (title, colors, etc.)

### Example API Response Structure

```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "sectionName": "about",
      "subsectionName": "section1",
      "title": "Our Story",
      "content": "About section 1 content",
      "data": {
        "welcome": {
          "title": "Welcome",
          "content": "We are the comprehensive design..."
        },
        "features": {
          "title": "Outstanding Features",
          "items": [
            {
              "title": "Brand Development",
              "description": "Our energy and expertise...",
              "image": "..."
            }
          ]
        }
      }
    }
  ]
}
```

## Implementation Details

### 1. API Service (`lib/api.js`)

Contains helper functions to:

- Fetch all sections data
- Organize data by section/subsection
- Extract specific data for each component
- Provide fallback data if API fails

### 2. Data Context (`contexts/DataContext.js`)

- Global state management using React Context
- Fetches data on app initialization
- Provides loading and error states
- Makes data available to all components

### 3. Component Updates

Each component has been updated to:

- Import and use `useData()` hook
- Access relevant API data
- Fallback to default data if API data unavailable
- Show loading states where appropriate

### 4. Loading States

- Full-screen loading for initial data fetch
- Section-level loading for individual components
- Error handling with retry functionality

## Updated Components

### Hero Component

- Uses API data for slides (or falls back to default)
- Shows loading spinner while data loads

### Header Component

- Uses API data for navigation labels
- Uses API logo image if available
- Falls back to default navigation items

### Footer Component

- Uses API data for all footer sections (about, news, links, contact)
- Dynamic social links and contact information
- Fallback to default content

### About Sections (Section2, Section3, Section4)

- **Section2**: Uses API data for welcome message and features list
- **Section3**: Uses API data for creative spirit content and button text
- **Section4**: Uses API data for unique space content and accordion items

### Our Work Section (Section5)

- Uses API data for case studies/portfolio items
- Dynamic titles and project descriptions
- Fallback to default portfolio items

### News Section (Section14)

- Uses API data for news articles
- Dynamic titles and content
- Supports multiple news items from API

## Benefits of API Integration

1. **Dynamic Content**: Content can be updated via the backend without code changes
2. **Scalability**: Easy to add new sections or modify existing ones
3. **Performance**: Loading states provide better user experience
4. **Error Handling**: Graceful fallbacks if API is unavailable
5. **Maintainability**: Centralized data management through context
6. **Flexibility**: Components can use API data or default data seamlessly

## Running the Application

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the application

## Next Steps

To complete the full integration, you can update the remaining sections following the same pattern:

1. Import `useData` hook in the component
2. Access relevant API data from `data` object
3. Add fallback to default data
4. Update JSX to use dynamic data
5. Add loading states if needed

### Example Pattern for Other Sections:

```jsx
"use client";
import { useData } from "@/contexts/DataContext";

const SectionX = () => {
  const { data, loading } = useData();

  // Get API data or use defaults
  const sectionData = data.sectionName?.subsectionName || {};
  const items = sectionData.items || defaultItems;

  if (loading) {
    return <SectionLoading />;
  }

  return (
    <div>
      <h2>{sectionData.title || "Default Title"}</h2>
      {/* Use dynamic data throughout component */}
    </div>
  );
};
```

## API Data Mapping

Each section maps to specific API data:

- **Hero**: Custom data (currently using defaults)
- **About**: `data.about.section1`, `data.about.section2`, `data.about.section3`
- **Our Work**: `data.ourWork.section1`, `data.ourWork.section2`, etc.
- **Services**: `data.services.section1`, `data.services.section2`
- **Team**: `data.team.section1`, `data.team.section2`, `data.team.section3`
- **News**: `data.news.section1`, `data.news.section2`
- **Contact**: `data.contact.section1`, `data.contact.section2`
- **Header**: `data.header`
- **Footer**: `data.footer`

This integration provides a solid foundation for a dynamic, API-driven single-page application that can be easily maintained and updated through the backend system.
