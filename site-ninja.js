#!/usr/bin/env node
const jest = require('jest')

const [,, ...args] = process.argv

console.log('\nsite-ninja--------------------------------\n')

if (args[0] === 'start') {
    console.log('hello there')
} else if (args[0] === 'dev') {
    console.log('running dev server...')
} else if (args[0] === 'test') {
    jest.run()
}
