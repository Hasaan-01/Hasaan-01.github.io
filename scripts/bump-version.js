const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');

// Read current index.html
let html = fs.readFileSync(indexPath, 'utf8');

// Find current version (e.g., ?v=2)
const versionMatch = html.match(/\?v=(\d+)/);
const currentVersion = versionMatch ? parseInt(versionMatch[1]) : 1;
const newVersion = currentVersion + 1;

// Replace all ?v=X with ?v=newVersion
html = html.replace(/\?v=\d+/g, `?v=${newVersion}`);

// Write back
fs.writeFileSync(indexPath, html);

console.log(`✓ Cache bust version bumped: v${currentVersion} → v${newVersion}`);
console.log('  All asset URLs updated in index.html');
