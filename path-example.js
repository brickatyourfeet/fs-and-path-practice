let path = require('path')
let fs = require('fs')

path.join(__dirname, 'ex.js')
console.log(fs.readFileSync('./path-example.js'))

console.log(fs.readFileSync('.gitignore') + '')
console.log(fs.readFileSync('gitignore').read())
console.log(fs.readFileSync('.gitignore', 'utf-8'))
fs.writeFileSync('new.txt', 'helllllloooooo')
