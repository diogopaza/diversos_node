var fs = require('fs');
var async = require('async');


var files = ['texto1.txt', 'texto2.txt'];

async.each(files, function(file, callback){

    fs.readFile(file, 'utf-8', function(err, contents){
        console.log(contents)
        callback(null);
    })
})