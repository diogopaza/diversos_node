var fs = require('fs')

fs.readFile('dados.txt','utf8', function(err,contents){

    console.log(contents)


})

console.log('estou depois do readFile')