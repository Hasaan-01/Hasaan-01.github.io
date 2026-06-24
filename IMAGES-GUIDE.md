# Portfolio Images & Media Guide

## ✅ What I've Done

### 1. **Created Images Folder Structure**
```
hasaan-portfolio/
└── images/
    ├── lars-chatbot/
    │   ├── thumbnail.png ✓
    │   └── dashboard.pdf ✓
    ├── department-dashboard/
    │   ├── thumbnail.png ✓
    │   └── 16 dashboard screenshots ✓
    ├── devops-dashboard/
    │   └── thumbnail.png ✓
    ├── attendance-system/
    │   └── thumbnail.png ✓
    ├── leave-app/ (empty - needs images)
    └── employee-skills/ (empty - needs images)
```

### 2. **Updated Tile Grid Cards**
✅ LARS Chatbot - now shows real dashboard screenshot
✅ Department Dashboard - shows analytics dashboard
✅ DevOps Dashboard - shows AWS/GitHub monitoring
✅ Attendance System - shows attendance report
❌ Leave App - still using SVG placeholder
❌ Employee Skills - still using SVG placeholder

---

## 📸 How to Add More Images

### **For Tile Grid Cards (Home Page)**

Location in `index.html`: Search for the project card

**Current format:**
```html
<div class="pf w-full h-64 relative overflow-hidden">
  <img src="images/project-name/thumbnail.png" alt="Description" 
       class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
  <div class="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
</div>
```

**To add Leave App thumbnail:**
1. Get a screenshot of your Leave Management app
2. Save it as: `images/leave-app/thumbnail.png`
3. Replace the SVG in Leave App card with the img format above

**To add Employee Skills thumbnail:**
1. Get a screenshot of your Skills Dashboard
2. Save it as: `images/employee-skills/thumbnail.png`
3. Replace the SVG with img format

---

## 🎨 3D Spiral Cards

The 3D spiral currently uses **dynamically generated canvas textures** with gradients and text.

### Option 1: Keep Current Design (Text + Gradients)
✅ Works well, looks clean
✅ No image loading needed
✅ Consistent across all projects

### Option 2: Use Real Dashboard Images
To replace with actual screenshots, update the JavaScript section in `index.html`:

**Find this code (around line 520):**
```javascript
// Create gradient texture
const canvas2d = document.createElement('canvas');
canvas2d.width = 512;
canvas2d.height = 712;
const ctx = canvas2d.getContext('2d');

// Draw gradient
const gradient = ctx.createLinearGradient(0, 0, 0, canvas2d.height);
gradient.addColorStop(0, project.gradient[0] + '33');
gradient.addColorStop(1, project.gradient[1] + '33');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas2d.width, canvas2d.height);

// Draw text...
```

**Replace with:**
```javascript
// Load image as texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(project.thumbnail);
```

**And update project data:**
```javascript
const projects = [
  {
    title: 'AI-Powered Learning Analytics',
    subtitle: 'LARS Chatbot',
    url: 'project-lars-chatbot.html',
    thumbnail: 'images/lars-chatbot/thumbnail.png', // Add this
    ...
  },
  ...
];
```

---

## 🎥 Adding Videos

### **For Project Detail Pages**

Add videos to individual project pages (e.g., `project-lars-chatbot.html`):

```html
<!-- Video Demo Section -->
<section class="py-16 bg-zinc-50 dark:bg-zinc-900/40">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-8">Demo Video</h2>
    
    <!-- YouTube Embed -->
    <div class="relative w-full" style="padding-bottom: 56.25%;">
      <iframe 
        class="absolute inset-0 w-full h-full rounded-2xl shadow-2xl"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="Project Demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    
    <!-- OR: Self-hosted video -->
    <video class="w-full rounded-2xl shadow-2xl" controls>
      <source src="videos/lars-demo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</section>
```

### **Video Recommendations:**
- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080 or 1280x720
- **Length:** 30-90 seconds per project
- **Size:** Keep under 50MB (compress if needed)

---

## 📊 Image Gallery for Project Pages

Add multiple screenshots to detail pages:

```html
<!-- Screenshots Gallery -->
<section class="py-16">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-8">Dashboard Views</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      <img src="images/department-dashboard/Screenshot 2026-06-24 202703.png" 
           alt="HR Dashboard View" 
           class="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
      
      <img src="images/department-dashboard/Screenshot 2026-06-24 202722.png" 
           alt="Finance Dashboard View" 
           class="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
      
      <img src="images/department-dashboard/Screenshot 2026-06-24 202737.png" 
           alt="DevOps Dashboard View" 
           class="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
      
      <img src="images/department-dashboard/Screenshot 2026-06-24 202752.png" 
           alt="QA Dashboard View" 
           class="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
    </div>
  </div>
</section>
```

---

## 🖼️ Image Optimization Tips

### **Before Adding Images:**

1. **Resize for web:**
   - Thumbnails: 800x600px
   - Detail images: 1920x1080px max
   - Use tools: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)

2. **File size targets:**
   - Thumbnails: < 200KB
   - Screenshots: < 500KB
   - PDFs: < 5MB

3. **Format:**
   - Use `.webp` for best compression (fallback to `.png`)
   - Use `.jpg` for photos
   - Keep `.png` for dashboards/charts (crisp text)

---

## 📁 Available Images Summary

### Department Dashboard (17 images total):
- `thumbnail.png` - Main dashboard view (961 KB)
- Multiple views showing HR, Finance, DevOps, QA dashboards
- All copied to `images/department-dashboard/`

### LARS Chatbot (2 files):
- `thumbnail.png` - Chatbot interface (153 KB)
- `dashboard.pdf` - Full PDF dashboard (2.8 MB)

### DevOps Dashboard (1 image):
- `thumbnail.png` - AWS/GitHub dashboard (82 KB)

### Attendance System (1 image):
- `thumbnail.png` - SQL attendance report (595 KB)

---

## 🚀 Next Steps

1. **Get screenshots for missing projects:**
   - Leave Management App (Power Apps interface)
   - Employee Skills Dashboard

2. **Optional: Record demo videos**
   - Use OBS Studio or Loom
   - Show key features in action
   - Upload to YouTube or host locally

3. **Add image galleries to project detail pages**
   - Copy the gallery HTML above
   - Use the department dashboard screenshots as reference

4. **Optimize large images**
   - Compress PNGs over 500KB
   - Consider converting to WebP

---

## 💡 Pro Tips

- **Hover effects work automatically** - images scale on hover
- **Lazy loading** - add `loading="lazy"` to images below fold
- **Alt text** - always describe what's in the image for accessibility
- **Captions** - add `<figcaption>` to explain dashboard metrics

Need help adding images to specific pages? Let me know which project!
