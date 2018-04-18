#!/usr/bin/env node

const cli = require('commander');
const newComponent = require('./component');
const VERSION = require('./package.json').version;
const DESC = require('./package.json').description;

cli.version(VERSION).description(DESC);

cli
  .command('component <component> [targetDir]')
  .alias('c')
  .description('Add new component')
  .action((component, targetDir) => newComponent(component, targetDir));

cli.parse(process.argv);
