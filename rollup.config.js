import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'cli.js',
  output: {
    file: 'bin/site-ninja.js',
    format: 'cjs'
  },
  plugins: [nodeResolve(), commonjs(), json()],
  external: ['jest']
};

