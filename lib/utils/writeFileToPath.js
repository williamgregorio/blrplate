const fs = require('fs');
const path = require('path');

function writeFileToPath(filePath, content) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8'); // Write file
    console.log(`Created: ${filePath}`);
  } catch (err) {
    console.error(`Error creating file ${filePath}:`, err);
  }
}

module.exports = { writeFileToPath };
