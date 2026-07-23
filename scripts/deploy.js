const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

console.log('🚀 Deploying to GitHub Pages...\n');

// Step 1: Bump version
const indexPath = path.join(rootDir, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
const versionMatch = html.match(/\?v=(\d+)/);
const currentVersion = versionMatch ? parseInt(versionMatch[1]) : 1;
const newVersion = currentVersion + 1;
html = html.replace(/\?v=\d+/g, `?v=${newVersion}`);
fs.writeFileSync(indexPath, html);
console.log(`✓ Cache bust version bumped: v${currentVersion} → v${newVersion}`);

// Step 2: Copy dist files to root
const files = [
  { src: 'dist/styles.css', dest: 'styles.css' },
  { src: 'dist/app.min.js', dest: 'app.min.js' },
  { src: 'dist/spiral.min.js', dest: 'spiral.min.js' }
];

files.forEach(({ src, dest }) => {
  const srcPath = path.join(rootDir, src);
  const destPath = path.join(rootDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${src} → ${dest}`);
  } else {
    console.log(`⚠ ${src} not found, skipping`);
  }
});

console.log('\n📦 Ready to commit and push!');
console.log('   Run: git add -A && git commit -m "deploy: v' + newVersion + '" && git push origin main');
