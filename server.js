var http = require('http');
var express = require('express');
// var bodyParser = require('body-parser');
const pug = require('pug');

var port = '8300';
var app = express();
app.listen(port);


app.use('/css',express.static('css'));
app.use('/fonts',express.static('fonts'));
app.use('/images',express.static('images'));
app.use('/js',express.static('js'));

app.get('/',
    function(request, response){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(pug.renderFile('index.pug', {}));
    }
);

app.get('/add-pet',
    function(request, response){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(pug.renderFile('add-pet.pug', {}));
    }
);

app.get('/add-person',
    function(request, response){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(pug.renderFile('add-person.pug', {}));
    }
);


console.log("Servidor está ON no endereço localhost:8300");