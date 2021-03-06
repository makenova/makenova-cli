import fs from 'fs'
import test from 'ava'
import execa from 'execa'
import Makenova from './'

function readfile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, file) => {
      if(err) return reject(err)
      resolve(file)
    })
  })
}

function parse(string) {
  return new Promise((resolve, reject) => {
    try {
      let json = JSON.parse(string)
      return resolve(json)
    } catch (e) {
      return reject(e)
    }
  })
}

const name = `Mayiawo Aken'Ova`
const title = 'Code pusher'
const formalTitle = 'Programmer'
const alias = 'makenova'
const twitter = '@make_nova'
const github = 'https://github.com/makenova'
const website = 'http://makenova.com'
const location = 'Oklahoma City, OK'

test('test name', t => {
  const makenova = new Makenova()
  t.is(name, makenova.name)
})

test('test title', t => {
  const makenova = new Makenova()
  t.is(title, makenova.title)
})

test('test formal title', t => {
  const makenova = new Makenova()
  t.is(formalTitle, makenova.formalTitle)
})

test('test alias', t => {
  const makenova = new Makenova()
  t.is(alias, makenova.alias)
})

test('test twitter', t => {
  const makenova = new Makenova()
  t.is(twitter, makenova.twitter)
})

test('test github', t => {
  const makenova = new Makenova()
  t.is(github, makenova.github)
})

test('test website', t => {
  const makenova = new Makenova()
  t.is(website, makenova.website)
})

test('test location', t => {
  const makenova = new Makenova()
  t.is(location, makenova.location)
})

test('test cli name', t => {
  return execa.stdout('./cli.js', ['name'])
    .then(result => t.is(result, name))
})

test('test cli title', t => {
  return execa.stdout('./cli.js', ['title'])
    .then(result => t.is(result, title))
})

test('test cli formal title', t => {
  return execa.stdout('./cli.js', ['title', '--formal'])
    .then(result => t.is(result, formalTitle))
})

test('test cli alias', t => {
  return execa.stdout('./cli.js', ['alias'])
    .then(result => t.is(result, alias))
})

test('test cli twitter', t => {
  return execa.stdout('./cli.js', ['twitter'])
    .then(result => t.is(result, twitter))
})

test('test cli github', t => {
  return execa.stdout('./cli.js', ['github'])
    .then(result => t.is(result, github))
})

test('test cli website', t => {
  return execa.stdout('./cli.js', ['website'])
    .then(result => t.is(result, website))
})

test('test cli location', t => {
  return execa.stdout('./cli.js', ['location'])
    .then(result => t.is(result, location))
})

test('test cli default no args', t => t.throws(execa('.cli.js')))

test('test cli version', t => {
  return Promise.all([
    readfile('./package.json').then(parse).then(config => config.version),
    execa.stdout('./cli.js',  ['--version'])
  ])
    .then(results => {
      t.is(results[0], results[1])
    })
})
