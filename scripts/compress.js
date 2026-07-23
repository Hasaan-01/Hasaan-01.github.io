const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { promisify } = require('util');

const gzip = promisify(zlib.gzip);
const brotli = promisify(zlib.brotliCompress);

const distDir = path.join(__dirname, '..', 'dist');

async function compressFile(filePath) {
  const content = fs.readFileSync(filePath);
  const originalSize = content.length;

  const gzipped = await gzip(content, { level: 9 });
  const brotlied = await brotli(content, {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    },
  });

  fs.writeFileSync(`${filePath}.gz`, gzipped);
  fs.writeFileSync(`${filePath}.br`, brotlied);

  const gzSize = gzipped.length;
  const brSize = brotlied.length;

  console.log(`  ${path.basename(filePath)}:`);
  console.log(`    Original: ${(originalSize / 1024).toFixed(2)} KB`);
  console.log(`    Gzip:     ${(gzSize / 1024).toFixed(2)} KB (${((1 - gzSize / originalSize) * 100).toFixed(1)}% smaller)`);
  console.log(`    Brotli:   ${(brSize / 1024).toFixed(2)} KB (${((1 - brSize / originalSize) * 100).toFixed(1)}% smaller)`);
}

async function build() {
  console.log('Compressing assets...\n');

  const files = ['styles.css', 'app.min.js', 'spiral.min.js']
    .map(f => path.join(distDir, f))
    .filter(f => fs.existsSync(f));

  for (const file of files) {
    await compressFile(file);
  }

  console.log('\n✓ Compression complete');
}

build().catch(console.error);
