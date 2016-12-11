#!/usr/bin/env node

'use strict'

const Makenova = require('./')
const makenova = new Makenova()

function printName() { console.log(makenova.name) }
function printAlias() { console.log(makenova.alias) }
function printTwitter() { console.log(makenova.twitter) }
function printGithub() { console.log(makenova.github) }
function printWebsite() { console.log(makenova.website) }
function printLocation() { console.log(makenova.location) }
function printWHOIS(argv) {
  console.log(makenova.whois(argv.f ? {formal: true} : null))
}
function printTitle(argv) {
  console.log(argv.f ? makenova.formalTitle : makenova.title)
}

const titleBuilder = {
  formal: {
    alias: 'f',
    default: false
  }
}

const whoisBuilder = {
  formal: {
    alias: 'f',
    default: false
  }
}

const yargs = require('yargs')
  .usage('$0 <cmd>')
  .command('name', 'Display name', {}, printName)
  .command('title', 'Display title', titleBuilder, printTitle)
  .command('alias', 'Display alias', {}, printAlias)
  .command('twitter', 'Display twitter', {}, printTwitter)
  .command('github', 'Display github', {}, printGithub)
  .command('website', 'Display website', {}, printWebsite)
  .command('location', 'Display location', {}, printLocation)
  .command('whois', 'Who is $0', whoisBuilder, printWHOIS)
  .help('h')
  .alias('h', 'help')
  .version()
  .demand(1)
  .argv
