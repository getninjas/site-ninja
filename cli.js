const { runCLI } = require('jest')

const [,, ...args] = process.argv

console.log('\nsite-ninja--------------------------------\n')

if (args[0] === 'start') {
  console.log('hello there')
} else if (args[0] === 'dev') {
  console.log('running dev server...')
} else if (args[0] === 'test') {
  const options = {
    projects: [process.cwd()],
    silent: true,
  };
  
  runCLI(options, options.projects)
}
