#!/usr/bin/env node

process.title = 'decor-ts';
const program = require('commander')
const packageInfo = require('../package.json')

program
    .version(packageInfo.version, '-v, --version')
    .usage('<command> [options]')
    .command('create', 'create koa2ts or vue2ts project from a template (options: k = koa, v = vue, a = all)')
    .parse(process.argv)
require('./decor.ts-create')