#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const decorTs = require('../src/decor');


program
    .command('create')
    .description('init start ...')
    .action(function(type, name){
        decorTs.run(type, name);
    });
program.parse(process.argv);