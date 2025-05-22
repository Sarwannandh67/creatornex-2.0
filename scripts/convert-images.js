const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function convertToWebP(inputDir) {
  try {
    const files = await fs.readdir(inputDir);
    
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const stats = await fs.stat(inputPath);
      
      if (stats.isDirectory()) {
        await convertToWebP(inputPath);
        continue;
      }
      
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const outputPath = path.join(
          path.dirname(inputPath),
          `${path.basename(file, ext)}.webp`
        );
        
        await sharp(inputPath)
          .webp({ quality: 85, lossless: false })
          .toFile(outputPath);
        
        console.log(`Converted ${file} to WebP`);
      }
    }
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

// Convert images in public and src directories
(async () => {
  const directories = ['./public/images', './src/assets'];
  for (const dir of directories) {
    try {
      await fs.access(dir);
      console.log(`Converting images in ${dir}...`);
      await convertToWebP(dir);
    } catch (error) {
      console.log(`Directory ${dir} not found, skipping...`);
    }
  }
})(); 