var fs = require('fs')

var contents = fs.readFileSync('dados.txt','utf8')
console.log(contents)