import test from 'ava'
import execa from 'execa'
import makenova from './'

test('test index', t => t.is('who is makenova?', makenova()))

test('test cli', t => {
  return execa.stdout('./cli.js')
    .then(result => t.is(result, "who is makenova?"))
})
