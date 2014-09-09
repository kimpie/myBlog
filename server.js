var express = require('express'),
        app = express(),
        fs = require('fs'),
        http = require('http'),
        server = http.createServer(app),
        mongodb = require('mongodb');

var uri = 'mongodb://heroku_app29379056:np9fo6f71flbcv3ieeqdp34hvk@ds035270.mongolab.com:35270/heroku_app29379056';

app.configure(function(){
        app.set('view engine', 'handlebars');
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.methodOverride());
        app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
       app.use(express.errorHandler());
});

app.get('/', function (req, res){
  res.send(index.html);
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

//Connect the database

mongodb.MongoClient.connect(uri, function(err, db) {
  
  if(err) throw err;
  var posts = db.collection('posts');
});


server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});