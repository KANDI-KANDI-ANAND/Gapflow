# Integration Pages - Complete Guide

## Overview

This document explains how integrations and templates work together, and how to ensure products appear consistently across the site.

## How Integrations Work

### 1. Integration Detail Pages
Each integration has a JSON file in `/src/data/integration-{slug}.json` that contains:
- `id`: Integration identifier (e.g., "bright-pattern", "genesys-cloud")
- `name`: Display name
- `categories`: Array of categories the integration belongs to
- Content sections: hero, possibilities, documentation, tutorials, FAQs, etc.

### 2. Catalog Display
Integrations are displayed in the catalog from `/src/data/gapflow_integrations.json`:
- `title`: Product name
- `tags`: Short category tags for display
- `action`: Link to the detail page

### 3. Category Normalization
The system automatically handles category variations:
- "Contact Centre" = "Contact Center" = "Comms" = "Communication"
- "BI" = "Business Intelligence" = "Analytics"

See `src/utils/categoryMapping.ts` for the complete mapping.

## Templates and Integrations

### Template Structure
Each template in `/src/data/templates.json` has:
- `categories`: Template categories (e.g., "Contact Centre")
- `integrations`: Array of integration IDs that this template works with

### How Templates Appear

**1. On Integration Detail Pages**
The "Explore the Ecosystem" section shows templates where:
```typescript
template.integrations.includes(integrationId)
```

**2. In Templates Sidebar**
When filtering by subcategories like "Genesys", the system checks:
- Template tags
- Template categories
- Template integrations array
- Template title

## Adding New Integrations

### Step 1: Create Integration Data
Create `/src/data/integration-{slug}.json`:
```json
{
  "id": "your-integration",
  "name": "Your Integration",
  "categories": ["Contact Centre", "Communication"],
  ...
}
```

### Step 2: Add to Catalog
Add to `/src/data/gapflow_integrations.json`:
```json
{
  "title": "Your Integration",
  "tags": ["Contact Centre"],
  "actions": [{"label": "View", "action": "/integrations/your-integration"}]
}
```

### Step 3: Add to Related Templates
For each relevant template in `templates.json`, add your integration ID:
```json
{
  "integrations": ["bright-pattern", "genesys-cloud", "your-integration", ...]
}
```

### Step 4: Add to Category Subcategories (if applicable)
If your integration should appear in sidebar subcategories:

**In Templates.tsx:**
```typescript
const contactCentreSubFilters = [
  'List Management',
  'Outbound Dialling',
  'Bright Pattern',
  'Genesys',
  'Your Integration'  // Add here
];
```

**In Integrations.tsx:**
```typescript
const contactCentreSubcategories = [
  'Bright Pattern',
  'Genesys',
  'Your Integration'  // Add here
];
```

## Verification Checklist

When adding a new integration, verify:

- [ ] Integration detail page exists (`/integrations/{slug}`)
- [ ] Integration appears in catalog (`/integrations`)
- [ ] Categories are normalized (check categoryMapping.ts)
- [ ] Related templates include the integration ID
- [ ] Templates appear on integration detail page
- [ ] Sidebar filtering works (if applicable)
- [ ] Search finds the integration by name and categories
- [ ] Related integrations appear together

## Best Practices

1. **Use consistent IDs**: Integration IDs should be lowercase with hyphens (e.g., "genesys-cloud")
2. **Add to related templates**: When two products serve the same purpose, add both to templates
3. **Update category mapping**: Add spelling variations to avoid inconsistencies
4. **Test filtering**: Verify sidebar filters work on both `/integrations` and `/templates`
5. **Document relationships**: Keep this file updated when adding integrations
