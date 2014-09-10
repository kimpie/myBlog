var express = require('express'),
        app = express(),
        fs = require('fs'),
        http = require('http'),
        server = http.createServer(app),
        MongoStore = require('connect-mongo')(express),
        mongoose = require('mongoose');

var uri = 'mongodb://heroku_app29379056:np9fo6f71flbcv3ieeqdp34hvk@ds035270.mongolab.com:35270/heroku_app29379056';
global.db = mongoose.createConnection(uri);

app.configure(function(){
        app.set('view engine', 'handlebars');
        app.use(express.bodyParser());
        app.use(express.cookieParser());
                app.use(express.session({ 
                key: 'express.sid', 
                secret: 'secret',
                store: new MongoStore({ 
                        url: 'mongodb://heroku_app29379056:np9fo6f71flbcv3ieeqdp34hvk@ds035270.mongolab.com:35270/heroku_app29379056'
                })
        }));
        app.use(express.methodOverride());
        app.use(express.static(__dirname + '/public'));
});

var api = require('./controller/api.js');

app.configure('development', function(){
       app.use(express.errorHandler());
});

app.get('/', function (req, res){
  res.send(index.html);
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

app.get('/posts', api.getPosts);

server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});