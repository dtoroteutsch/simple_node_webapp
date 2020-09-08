const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
  response.sendFile('index.html', {
    root: __dirname
  });
});

//Receiving parameters by HTTP GET Method
app.get('/greeting', function(){
  response.send(`Hello ${request.query.name}`)
});

app.post('/name', function(request, response){
  response.send(`${request.body.name}`);
});

app.listen(3000);

