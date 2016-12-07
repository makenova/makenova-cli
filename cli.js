#!/usr/bin/env node

'use strict'

const Makenova = require('./')
const makenova = new Makenova()
const yargs = require('yargs')
  .usage('$0 <cmd>')
  .command('name', 'Display name', {}, () => console.log(makenova.name))
  .command('title', 'Display title', {}, () => console.log(makenova.title))
  .help('h')
  .alias('h', 'help')
  .version()
  .demand(1)
  .argv
