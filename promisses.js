var q = require('q')
var fs = require('fs')

function readArquivo1(){
   
    var deferred = q.defer();
    fs.readFile('dados.txt','utf8', function(err, arquivo1){
        console.log("lendo arquivo 1")
        deferred.resolve(arquivo1)

    });
        return deferred.promise;

}

function readArquivo2(){
    var deferred = q.defer();
    fs.readFile('dados2.txt','utf8', function(err, arquivo2){
        console.log("lendo arquivo 2")
        deferred.resolve(arquivo2)

    });
    return deferred.promise;

}

function writeArquivo3(conteudo){
    var deferred = q.defer();
    fs.writeFile('dados3.txt', dados+"\n"+arquivo2, function(err){
        deferred.resolve(true)

    })
    return deferred.promise;
}

/*
var conteudo = "";
readArquivo1().then(function(arquivo1){
    conteudo = arquivo1
    console.log("promisse arquivo1" + conteudo)
    return readArquivo2();
}).then(function(arquivo2){
    conteudo = conteudo .  arquivo2;
    console.log("promisse arquivo2" + arquivo2);
});
*/

readArquivo1()
    .then(readArquivo2())
    .then(readArquivo2())
    .then(readArquivo1())
    .then(function(){
        console.log('deu tudo certo')
    })

