#!/usr/bin/env node

'use strict'

const Makenova = require('./')
const makenova = new Makenova()
const yargs = require('yargs')
  .usage('$0 <cmd>')
  .command('name', 'Display name', {}, () => console.log(makenova.name))
  .command('title', 'Display title', {}, () => console.log(makenova.title))
  .command('alias', 'Display alias', {}, () => console.log(makenova.alias))
  .command('twitter', 'Display twitter', {}, () => {
    console.log(makenova.twitter)
  })
  .command('github', 'Display github', {}, () => console.log(makenova.github))
  .command('website', 'Display website', {}, () => {
    console.log(makenova.website)
  })
  .help('h')
  .alias('h', 'help')
  .version()
  .demand(1)
  .argv
