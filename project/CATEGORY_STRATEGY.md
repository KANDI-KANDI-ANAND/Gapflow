# Category Management Strategy

## Problem Statement

We had inconsistent categorization across integration data:

1. **Spelling variations**: "Contact Centre" (British) vs "Contact Center" (American)
2. **Naming variations**: "Comms" vs "Communication"
3. **Multiple sources**: Catalog cards have `tags`, detail files have `categories`

This caused products like Bright Pattern and Genesys Cloud to not show up consistently when filtering by "Contact Centre".

## Solution: Category Normalization System

### 1. Category Mapping (`categoryMapping.ts`)

Created a centralized mapping system that defines:

- **Canonical categories**: The "official" category names used in the UI
- **Category aliases**: All variations that should map to each canonical category

Example:
```typescript
'Contact Centre': ['Contact Center', 'Contact Centre', 'Comms', 'Communication']
```

This means searching or filtering for "Contact Centre" will match any product tagged with:
- Contact Centre
- Contact Center
- Comms
- Communication

### 2. Unified Category Collection

**integrationLoader.ts** now:
- Loads all integration detail files
- Merges `tags` from catalog cards with `categories` from detail files
- Creates an `allCategories` array containing all category variations
- Uses category matching for filtering

### 3. Smart Filtering

The Integrations page now uses `hasCategory()` which:
- Normalizes both the filter name and product categories
- Matches categories using aliases
- Handles spelling variations automatically

## How It Works

### Before:
```
Filter: "Contact Centre"
Bright Pattern tags: ["Comms", "Contact Centre"] ✓ MATCH
Bright Pattern categories: ["Communication", "Contact Center"] ✗ NO MATCH
→ Only matched on catalog tags
```

### After:
```
Filter: "Contact Centre"
Bright Pattern allCategories: ["Comms", "Contact Centre", "Communication", "Contact Center"]
→ hasCategory normalizes all variations
→ ✓ FULL MATCH on all variations
```

## Benefits

1. **Spelling-agnostic**: British/American spellings work interchangeably
2. **Abbreviation support**: "Comms" matches "Communication"
3. **Comprehensive search**: Searches both catalog tags AND detail categories
4. **Easy maintenance**: Add new aliases in one place
5. **No data changes needed**: Works with existing inconsistent data

## Future Recommendations

### Short-term (Optional)
Standardize data files to use consistent naming:
- Pick one spelling (suggest "Contact Centre" for brand consistency)
- Use full names ("Communication" not "Comms")
- Keep the mapping system as a safety net

### Long-term
- Add category validation to catch inconsistencies early
- Create category management UI for non-technical team members
- Implement analytics to see which categories are most used
- Consider adding parent-child category relationships

## Adding New Categories

1. Open `src/utils/categoryMapping.ts`
2. Add to `categoryAliases` object:
```typescript
'Your Category': ['Your Category', 'Alternate Name', 'Another Variation']
```
3. Update filters in `Integrations.tsx` if needed
4. Done! The system automatically handles matching

## Testing Categorization

Search for any product using different category variations:
- "Contact Centre" vs "Contact Center"
- "Comms" vs "Communication"
- "BI" vs "Business Intelligence" vs "Analytics"

All variations should return the same results.
