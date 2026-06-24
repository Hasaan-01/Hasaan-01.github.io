# ✅ Customization Checklist

Before deploying, update these items in `index.html`:

## Required Updates

- [ ] **Email** (Line ~454) - Replace `your.email@example.com`
- [ ] **LinkedIn** (Line ~462) - Replace `https://linkedin.com/in/yourprofile`
- [ ] **GitHub Username** - When creating the repo and pushing code

## Optional Enhancements

### Hero Section
- [ ] Add your professional photo (replace SVG icon)
- [ ] Update tagline/description if needed

### Projects
- [ ] Add real project screenshots/images
- [ ] Update project descriptions with more details
- [ ] Add links to live demos or GitHub repos
- [ ] Add more projects if you have them

### Services
- [ ] Add more services if needed
- [ ] Customize service descriptions

### About Section
- [ ] Add your photo (replace SVG icon)
- [ ] Expand your bio/story
- [ ] Update skills if needed

### Styling
- [ ] Change accent color (Line ~25 in Tailwind config)
  - Current: `#FF6B2B` (orange)
  - Try: `#0066CC` (blue), `#7C3AED` (purple), `#10B981` (green)

### SEO & Meta
- [ ] Update meta description (Line ~6)
- [ ] Add favicon (create and add to `<head>`)
- [ ] Update page title if desired

## After Deployment

- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Test dark mode toggle
- [ ] Share with friends for feedback
- [ ] Add Google Analytics (optional)

## Pro Tips

### Add Project Images
1. Create an `images/` folder
2. Add screenshots of your projects
3. Replace gradient backgrounds:
```html
<div class="pf w-full h-64">
  <img src="images/project1.jpg" alt="Project name" loading="lazy">
</div>
```

### Custom Favicon
Add to `<head>`:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

### Custom Domain (Optional)
1. Buy a domain (e.g., `hasaandev.com`)
2. In your GitHub repo: Settings → Pages → Custom domain
3. Add DNS records from your domain provider

---

**Ready?** Open `index.html` in your browser to preview! 🚀
