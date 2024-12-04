const fs = require('fs');
const path = require('path');

/**
 * Creates the necessary directories for a Shopify theme.
 * The following directories will be created:
 * - assets
 * - config
 * - layout
 * - locales
 * - sections
 * - snippets
 * - templates/customers
 * 
 * @param {string} baseDir - The base directory where the theme should be created (usually the current working directory).
 * @returns {Promise<void>} - A promise that resolves when all the directories are successfully created.
 * @throws {Error} - Throws an error if directory creation fails.
 */
async function createThemeDirectories(baseDir) {
  const directories = [
    'assets',
    'config',
    'layout',
    'locales',
    'sections',
    'snippets',
    'templates/customers'
  ];

  try {
    // Iterates through all the [7]directories and create them
    for (let dir of directories) {
      const dirPath = path.join(baseDir, dir);
      fs.mkdirSync(dirPath, { recursive: true });
    }
  } catch (err) {
    throw new Error(`Failed to create directories: ${err.message}`);
  }
}

module.exports = { createThemeDirectories };
