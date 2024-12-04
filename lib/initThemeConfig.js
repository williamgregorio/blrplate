const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

/**
 * Initializes the theme configuration by asking the user for input and creating a config file.
 * 
 * This function prompts the user for theme details like name, author, documentation URL, and support URL.
 * - View Shopify docs for more information: https://shopify.dev/docs/storefronts/themes/architecture#json-with-comments
 * It then creates a `settings_schema.json` file inside the provided directory with the user's input.
 * 
 * @param {string} configDir - The directory where the configuration file should be created (expects to be at config).
 * @returns {Promise<void>} - A promise that resolves when the configuration file is successfully created.
 * @throws {Error} - Throws an error if the file writing or directory creation fails.
 */
async function initThemeConfig(configDir) {
  const prompt = inquirer.createPromptModule(); 
  const questions = [
    {
      type: 'input',
      name: 'theme_name',
      message: 'Enter theme name:',
      default: 'blrplate',
    },
    {
      type: 'input',
      name: 'theme_author',
      message: 'Enter theme author:',
      default: 'Anonymous',
    },
    {
      type: 'input',
      name: 'theme_documentation_url',
      message: 'Enter documentation URL (optional):',
    },
    {
      type: 'input',
      name: 'theme_support_url',
      message: 'Enter support URL (optional):',
    },
  ];

  const answers = await prompt(questions);

  // JSON content file located in config directory
  const configData = [
    {
      name: 'theme_info',
      theme_name: answers.theme_name,
      theme_author: answers.theme_author,
      theme_version: '1.0.0',
      theme_documentation_url: answers.theme_documentation_url || '',
      theme_support_url: answers.theme_support_url || '',
    },
  ];

  // Checks if the config directory exists
  try {
    fs.mkdirSync(configDir, { recursive: true });
  } catch (err) {
    throw new Error(`Failed to create directory: ${err.message}`);
  }

  // Writes the JSON data to the settings schema file located in /config directory
  const filePath = path.join(configDir, 'settings_schema.json');
  try {
    fs.writeFileSync(filePath, JSON.stringify(configData, null, 2));
  } catch (err) {
    throw new Error(`Failed to write file: ${err.message}`);
  }

  console.log(`Shopify JSON theme settings schema settings created at ${filePath}`);
}

module.exports = { initThemeConfig };
