#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');
const { createThemeDirectories } = require('../createDirectories');
const { initThemeConfig } = require('../initThemeConfig');

const program = new Command();

program
  .command('create')
  .description('Create a new Shopify theme boilerplate')
  .action(async () => {
    const currentDir = process.cwd();

    try {
      await createThemeDirectories(currentDir);
    } catch (error) {
      console.error(`Error creating directories: ${error.message}`);
      return;
    }

    const configDir = path.join(currentDir, 'config');

    try {
      await initThemeConfig(configDir);
    } catch (error) {
      console.error(`Error creating theme config: ${error.message}`);
    }
  });

program.parse(process.argv);
