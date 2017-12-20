var async = require('async')

var fs = require('fs')

async.waterfall([
    function(callback){
        fs.readFile('texto1.txt','utf-8', function(err, contents, callback){
            

        })
    },
    function(contents, callback){
        console.log(contents);
        callback(null)
    }

],
function(err){
    console.log('done')
})