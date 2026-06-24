# How to View Your Portfolio with Images in 3D Spiral

## ⚠️ Why Images Don't Show When Opening HTML Directly

When you double-click `index.html` and open it directly in your browser, the URL looks like:
```
file:///C:/Users/Hasaannn/.openclaw/workspace/hasaan-portfolio/index.html
```

**Browsers block loading images in WebGL/3D contexts from `file://` URLs for security reasons.**

This is a browser security restriction called **CORS (Cross-Origin Resource Sharing)**.

---

## ✅ SOLUTION: Use a Local Web Server

You need to serve the files through a local web server instead.

### **Method 1: Using Python (Recommended)**

1. **Double-click** `start-server.bat` in the portfolio folder
2. **Open your browser** to: http://localhost:8000
3. **You'll see the 3D spiral with images!** 🎉

Press `Ctrl+C` in the command window to stop the server.

---

### **Method 2: Using Node.js**

If Python doesn't work, try:

1. **Double-click** `start-server-node.bat`
2. **Open your browser** to: http://localhost:8000

---

### **Method 3: VS Code Live Server (If you have VS Code)**

1. Open the portfolio folder in **VS Code**
2. Right-click `index.html`
3. Select **"Open with Live Server"**
4. Your browser will open automatically with images working!

---

### **Method 4: Manual Python Command**

Open Command Prompt in the portfolio folder and run:

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

---

### **Method 5: Manual Node Command**

```bash
# Using npx (comes with Node.js)
npx http-server -p 8000

# Then open: http://localhost:8000
```

---

## 🎨 What You'll See

Once you use a local server, you'll see:

### **3D Spiral (Top Section):**
✅ Your actual dashboard screenshots on 3D cards
✅ Rotating spiral you can drag and move
✅ Click any card to view project details

### **Tile Grid (Bottom Section):**
✅ All 6 projects with real thumbnails
✅ Hover effects and animations
✅ Full project descriptions

---

## 🔧 Troubleshooting

### "Python is not recognized..."
- **Install Python:** https://www.python.org/downloads/
- Or use Method 2 (Node.js) or Method 3 (VS Code)

### "npx is not recognized..."
- **Install Node.js:** https://nodejs.org/
- Or use Method 1 (Python) or Method 3 (VS Code)

### Port 8000 already in use
Change the port number:
```bash
python -m http.server 8001
# Then open: http://localhost:8001
```

### Images still not showing
1. Make sure you're accessing via `http://localhost:8000` NOT `file://`
2. Check browser console (F12) for errors
3. Make sure images folder is in the same directory as index.html

---

## 📁 File Structure

Your portfolio should look like this:

```
hasaan-portfolio/
├── index.html              ← Your main page
├── images/                 ← Images folder
│   ├── lars-chatbot/
│   │   └── thumbnail.png
│   ├── department-dashboard/
│   │   └── thumbnail.png
│   └── ... (other projects)
├── start-server.bat        ← Quick start script (Python)
├── start-server-node.bat   ← Alternative (Node.js)
└── HOW-TO-VIEW.md         ← This file
```

---

## 🚀 For Deployment (GitHub Pages)

When you deploy to GitHub Pages, this issue goes away automatically because files are served through `https://` instead of `file://`.

The spiral will work perfectly online! 🎉

---

## 💡 Quick Summary

**Problem:** Opening `index.html` directly = No 3D images (browser security)

**Solution:** Use a local web server (any of the 5 methods above)

**Result:** Beautiful 3D spiral with your actual dashboard screenshots! ✨
