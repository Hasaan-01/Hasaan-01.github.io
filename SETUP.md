# 🚀 GitHub Portfolio Setup Guide

Follow these steps to deploy your portfolio to GitHub Pages.

## Step 1: Customize Your Content

Before deploying, update these sections in `index.html`:

### Contact Information (Lines ~450-460)
```html
<!-- Update email and LinkedIn links -->
<a href="mailto:your.email@example.com">
<a href="https://linkedin.com/in/yourprofile">
```

### Personal Details
- Hero section: Already set to "Muhammad Hasaan"
- Projects: Already populated with your projects
- Services: Power BI, Power Apps, ETL, Automation

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click **"New repository"** (green button)
3. Name it: `hasaan-portfolio` or `yourname.github.io`
   - If you use `yourname.github.io`, it will be your main GitHub Pages site
4. Keep it **Public**
5. **Do NOT** initialize with README (we already have one)
6. Click **"Create repository"**

## Step 3: Push Your Code

Open PowerShell or Terminal in your portfolio folder and run:

```bash
cd C:\Users\Hasaannn\.openclaw\workspace\hasaan-portfolio

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/hasaan-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will deploy automatically!

## Step 5: Access Your Live Site

After a few minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/hasaan-portfolio/
```

Or if you named it `yourname.github.io`:
```
https://YOUR_USERNAME.github.io/
```

## 🎨 Customization Tips

### Change Accent Color
In `index.html`, find the Tailwind config (around line 25):
```javascript
colors: { accent: '#FF6B2B', 'accent-light': '#FF8F5C' }
```
Change to your preferred color (try: `#0066CC` for blue, `#7C3AED` for purple)

### Add Your Photo
Replace the SVG placeholder in the Hero section with:
```html
<img src="path/to/your-photo.jpg" alt="Muhammad Hasaan" loading="eager">
```

### Add Project Images
Replace the gradient backgrounds in project cards with real images:
```html
<div class="pf w-full h-64">
  <img src="images/project1.jpg" alt="Project name" loading="lazy">
</div>
```

## 📁 Recommended Folder Structure

```
hasaan-portfolio/
├── index.html
├── README.md
├── SETUP.md
├── .gitignore
├── .github/
│   └── workflows/
│       └── pages.yml
└── images/              ← Create this for project screenshots
    ├── hero-photo.jpg
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

## 🔧 Troubleshooting

### Pages Not Deploying?
1. Check **Actions** tab in your GitHub repo for errors
2. Ensure repository is **Public**
3. Verify **Pages** settings point to **GitHub Actions**

### Site Not Loading?
- Wait 2-3 minutes after first push
- Clear browser cache
- Check the exact URL format

### Need to Update?
Just edit files and push:
```bash
git add .
git commit -m "Update projects"
git push
```

## 📧 Need Help?

Check the Actions tab in your GitHub repository for deployment logs.

---

**Ready to go!** Your portfolio should be live within 3-5 minutes of pushing to GitHub. 🎉
