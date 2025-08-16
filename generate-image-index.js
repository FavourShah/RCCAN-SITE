// generate-image-index.js
// Run this script in your project root to generate an image index

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public/images');
const outputFile = path.join(__dirname, 'public/images-index.json');

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff'];

function generateImageIndex() {
  try {
    // Read all files in the images directory
    const files = fs.readdirSync(imagesDir);
    
    // Filter for image files only
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    
    // Create the index object
    const imageIndex = {
      generated: new Date().toISOString(),
      count: imageFiles.length,
      images: imageFiles.map((filename, index) => ({
        id: `img-${index}`,
        filename: filename,
        src: `/images/${filename}`,
        thumb: `/images/${filename}` // You can modify this if you have separate thumbnails
      }))
    };
    
    // Write to JSON file
    fs.writeFileSync(outputFile, JSON.stringify(imageIndex, null, 2));
    
    console.log(`✅ Generated image index with ${imageFiles.length} images`);
    console.log(`📁 Index saved to: ${outputFile}`);
    console.log('\nFound images:');
    imageFiles.forEach(file => console.log(`  - ${file}`));
    
  } catch (error) {
    console.error('❌ Error generating image index:', error);
  }
}

generateImageIndex();