const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use('/assets', express.static('app/assets'));

app.use(cookieSession({
  name: 'session',
  keys: ['juhudheunjneu', 'uihuenj8734cubeubc', '872863t36512un']
}));

app.get('/', function(request, response){
  response.render('index');
});

//Receiving parameters by HTTP GET Method
app.get('/greeting', function(request, response){
  response.send(`Hello ${request.query.name}`);
});

app.get('/visits', function(request, response){
  request.session.visits = request.session.visits || 0;
  request.session.visits = request.session.visits + 1;
  response.send(`${request.session.visits} visita(s)`);
});

app.post('/name', function(request, response){
  response.send(`${request.body.name}`);
});

app.listen(3000);

