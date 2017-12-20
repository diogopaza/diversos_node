var fs = require('fs')

var async = require('async')

var files = ['dados.txt','dados2.txt']
async.map(files, function(file,callback){
    fs.readFile(file, 'utf8', callback)

        
    


},function(err, results){
    console.log(results)
})