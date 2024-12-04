const fs = require('fs');
const path = require('path');
const { filePolicy } = require('./filePolicy');

/**
 * Copies files from the source data directory to their corresponding target locations.
 *
 * @param {string} baseDir - The root directory of the Shopify theme.
 * @returns {Promise<void>}
 */
async function copyFilesFromData(baseDir) {
  const dataDir = path.join(__dirname, '../data');

  // Iterates through filePolicy to determine source and destination paths
  Object.entries(filePolicy).forEach(([sourceFile, targetDir]) => {
    const sourcePath = findFileInData(dataDir, sourceFile); // Updated to search recursively
    const targetPath = path.join(baseDir, targetDir, path.basename(sourceFile));

    try {
      const targetDirPath = path.dirname(targetPath);
      if (!fs.existsSync(targetDirPath)) {
        fs.mkdirSync(targetDirPath, { recursive: true });
      }

      if (sourcePath) {
        fs.copyFileSync(sourcePath, targetPath);
      } else {
        console.warn(`Missing source file: ${sourceFile}`);
      }
    } catch (error) {
      console.error(`Error copying file: ${sourceFile} - ${error.message}`);
    }
  });
}

/**
 * Searches for a file in the given directory and its subdirectories.
 *
 * @param {string} dir - The root directory to search.
 * @param {string} fileName - The name of the file to find.
 * @returns {string|null} - The full path to the file, or null if not found.
 */
function findFileInData(dir, fileName) {
  const filesAndDirs = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of filesAndDirs) {
    const itemPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      // Searches subdirectories
      const found = findFileInData(itemPath, fileName);
      if (found) return found;
    } else if (item.isFile() && item.name === fileName) {
      return itemPath;
    }
  }

  return null; // When file is not found
}

module.exports = { copyFilesFromData };
