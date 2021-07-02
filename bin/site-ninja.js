#!/usr/bin/env node
'use strict';

var require$$0 = require('jest');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

var cli = {};

const { runCLI } = require$$0__default['default'];

const [,, ...args] = process.argv;

console.log('\nsite-ninja--------------------------------\n');

if (args[0] === 'start') {
  console.log('hello there');
} else if (args[0] === 'dev') {
  console.log('running dev server...');
} else if (args[0] === 'test') {
  const options = {
    projects: [process.cwd()],
    silent: true,
  };
  
  runCLI(options, options.projects);
}

module.exports = cli;
