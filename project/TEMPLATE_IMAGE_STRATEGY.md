# Template Image Organization Strategy

## Overview
Each template gets its own dedicated folder with sequentially numbered images.

## Folder Structure
```
/public/templates/
  ├── {template-slug}/
  │   ├── 01.jpg
  │   ├── 02.jpg
  │   ├── 03.jpg
  │   └── ...
```

## Adding New Template Images

### Step 1: Create Template Folder
When creating a new template, create a folder using the template's slug:
```bash
mkdir -p /public/templates/{template-slug}
```

### Step 2: Add Images
Place images in the template folder with sequential numbering:
- `01.jpg` - First screenshot/image
- `02.jpg` - Second screenshot/image
- `03.jpg` - Third screenshot/image
- etc.

### Step 3: Update Template JSON
In the template JSON file (`src/data/template-{slug}.json`), update the thumbnails array:
```json
{
  "thumbnails": [
    "/templates/{template-slug}/01.jpg",
    "/templates/{template-slug}/02.jpg",
    "/templates/{template-slug}/03.jpg"
  ]
}
```

## Examples

### Example 1: Bright Pattern Weekly Backup Template
**Folder:** `/public/templates/brightpattern-weekly-list-backup-cleanup/`

**Files:**
- `01.jpg` - Workflow overview
- `02.jpg` - Delete records block configuration
- `03.jpg` - Email confirmation setup

**JSON Reference:**
```json
"thumbnails": [
  "/templates/brightpattern-weekly-list-backup-cleanup/01.jpg",
  "/templates/brightpattern-weekly-list-backup-cleanup/02.jpg",
  "/templates/brightpattern-weekly-list-backup-cleanup/03.jpg"
]
```

### Example 2: New Template with 2 Images
**Template:** `salesforce-lead-sync`

**Steps:**
1. Create folder: `/public/templates/salesforce-lead-sync/`
2. Add images: `01.jpg`, `02.jpg`
3. Update JSON:
```json
"thumbnails": [
  "/templates/salesforce-lead-sync/01.jpg",
  "/templates/salesforce-lead-sync/02.jpg"
]
```

## Workflow for Providing New Images

When you provide new images for a template:

1. **Specify the template name/slug**
   Example: "brightpattern-weekly-list-backup-cleanup"

2. **Provide images in order**
   Example: "Here are 3 images for the Salesforce lead template"

3. **Images will be automatically organized:**
   - Folder created: `/public/templates/{template-slug}/`
   - Images saved as: `01.jpg`, `02.jpg`, `03.jpg`, etc.
   - JSON updated with correct paths

## Benefits

✅ **No naming conflicts** - Each template has its own folder
✅ **Simple numbering** - Easy to remember (01, 02, 03...)
✅ **Scalable** - Add as many images as needed
✅ **Organized** - All template assets grouped together
✅ **Future-proof** - Easy to add/remove/replace images

## Notes

- Use `.jpg` format for consistency
- Number images in the order they should appear
- If a template has no images yet, set `"thumbnails": []` in the JSON
- Old images in `/public/templates/` root can be removed after migration
