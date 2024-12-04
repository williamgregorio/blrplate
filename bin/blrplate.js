#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');
const { createThemeDirectories } = require('../lib/createDirectories.js');
const { initThemeConfig } = require('../lib/initThemeConfig.js');
const { copyFilesFromData } = require('../lib/fileManagement.js'); 

const program = new Command();

program
  .command('create')
  .description('Create a new Shopify theme boilerplate')
  .action(async () => {
    const currentDir = process.cwd();

    console.log('Creating theme directories...');
    try {
      await createThemeDirectories(currentDir);
    } catch (error) {
      console.error(`Error creating directories: ${error.message}`);
      return;
    }

    const configDir = path.join(currentDir, 'config');

    console.log('Initializing theme configuration...');
    try {
      await initThemeConfig(configDir);
    } catch (error) {
      console.error(`Error creating theme config: ${error.message}`);
    }

    try {
      await copyFilesFromData(currentDir);
    } catch (error) {
      console.error(`Error copying files: ${error.message}`);
      return;
    }

    console.log('Your Shopify theme boilerplate is ready to be developed.');
  });

program.parse(process.argv);
