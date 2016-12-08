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

const name = `Mayiawo Aken'Ova`
const title = `Code pusher`

test('test name', t => {
  const makenova = new Makenova()
  t.is(name, makenova.name)
})

test('test title', t => {
  const makenova = new Makenova()
  t.is(title, makenova.title)
})

test('test cli name', t => {
  return execa.stdout('./cli.js', ['name'])
    .then(result => t.is(result, name))
})

test('test cli title', t => {
  return execa.stdout('./cli.js', ['title'])
    .then(result => t.is(result, title))
})

test('test cli default no args', t => t.throws(execa('.cli.js')))

test.todo('test version', t => {

})
