const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const srcDir = path.join(__dirname, '..', 'src');
const distDir = path.join(__dirname, '..', 'dist');

// Ensure dist exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Read JS files
const appJs = fs.readFileSync(path.join(srcDir, 'app.js'), 'utf8');
const spiralJs = fs.readFileSync(path.join(srcDir, 'spiral.js'), 'utf8');

async function build() {
  // Minify app.js (critical - loaded immediately)
  const appResult = await minify(appJs, {
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info'],
    },
    mangle: true,
    format: {
      comments: false,
    },
  });

  // Minify spiral.js (deferred - Three.js visualization)
  const spiralResult = await minify(spiralJs, {
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
    mangle: true,
    format: {
      comments: false,
    },
  });

  fs.writeFileSync(path.join(distDir, 'app.min.js'), appResult.code);
  fs.writeFileSync(path.join(distDir, 'spiral.min.js'), spiralResult.code);

  const appSize = (appResult.code.length / 1024).toFixed(2);
  const spiralSize = (spiralResult.code.length / 1024).toFixed(2);

  console.log(`✓ app.min.js     ${appSize} KB`);
  console.log(`✓ spiral.min.js  ${spiralSize} KB`);
  console.log(`  Total: ${(parseFloat(appSize) + parseFloat(spiralSize)).toFixed(2)} KB`);
}

build().catch(console.error);
