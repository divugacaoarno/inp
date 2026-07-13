const sharp = require('sharp');
const fs = require('fs');

const input = 'public/logo.dry.jpeg';
const output = 'public/logo.dry.png';

async function run() {
  if (!fs.existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }

  try {
    const maskBuffer = await sharp(input)
      .grayscale()
      .threshold(40)
      .toFormat('png')
      .toBuffer();

    await sharp(input)
      .ensureAlpha()
      .composite([
        { input: maskBuffer, blend: 'dest-in' }
      ])
      .png()
      .toFile(output);

    console.log('Created', output);
  } catch (err) {
    console.error('Error processing image:', err);
    process.exit(1);
  }
}

run();
