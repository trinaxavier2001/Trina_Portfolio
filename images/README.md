# Portfolio Images

This folder contains images for your portfolio website.

**IMPORTANT:** Your portfolio uses Vite, so images must be in the `static/images/` folder (not `public/images/`).

## How to Add Images

### 1. Profile Photo
- Add your profile photo as `profile.jpg` (or `.png`) in this folder: `static/images/`
- Recommended size: 400x400 pixels (square)
- The image will be displayed as a circular profile picture on the home page

### 2. Project Images
To add images to your projects:
1. Add project images to this folder (e.g., `project-ocean.jpg`, `project-ml.jpg`)
2. In your project markdown files, add an `image` field to the frontmatter:

```markdown
---
title: "My Amazing Project"
stack: ["Python", "PyTorch"]
image: "/images/project-ocean.jpg"
---
```

### 3. Article Images
To add images to your articles:
1. Add article cover images to this folder
2. In your article markdown files, add an `image` field to the frontmatter:

```markdown
---
title: "My Article Title"
date: "2025-01-01"
tagline: "A brief description"
image: "/images/article-cover.jpg"
---
```

### Image Recommendations

**Profile Photo:**
- Format: JPG or PNG
- Dimensions: 400x400px (minimum 300x300px)
- File size: Under 500KB

**Project/Article Images:**
- Format: JPG or PNG
- Dimensions: 800x450px (16:9 ratio works well)
- File size: Under 1MB per image
- Use descriptive filenames (e.g., `ocean-ml-project.jpg`)

## Image Types Needed

### 1. Profile Photo
- **Filename**: `profile.jpg` ✅ ADDED
- **Size**: 400x400px (square)
- **Location**: Homepage hero section
- **Current**: 259KB ✅

### 2. Featured Story Image
- **Filename**: `feature-story.jpg` ⏳ NEEDED
- **Size**: 300x300px (square)
- **Location**: Featured story card on homepage
- **Purpose**: Visual for your UMass Dartmouth feature

### 3. Project Images (optional)
- **Naming**: `project-name.jpg`
- **Size**: 800x450px (16:9)
- **Location**: Project cards
- **Example**: `ocean-chlorophyll.jpg`

### 4. Article Images (optional)
- **Naming**: `article-name.jpg`
- **Size**: 800x450px (16:9)
- **Location**: Article cards
- **Example**: `marine-ml-article.jpg`

## Current Images

✅ `profile.jpg` - Your profile photo (259KB)
⏳ `feature-story.jpg` - Add this for featured section!

## Important Notes

- All images must be in `static/images/` folder (Vite configuration)
- Restart your dev server after adding new images: `npm run dev`
- Images are served from `/images/` in your code (the path in frontmatter)
