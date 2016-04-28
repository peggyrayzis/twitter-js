var express = require( 'express' );
var http = require('http')
var app = express();
var morgan = require('morgan')
var swig = require('swig')

var server = http.createServer();
var port = 3000;

server.on('request', app)

app.use(morgan(':method :url :status'))

var people = [{name: '@peggy'}, {name: '@patrice'}, {name: '@gracehopper'}]
var hashtags = [{topic: '#express'}, {topic: '#node'}, {topic: '#lacolombe'}];

app.get('/', function(req, res){
	res.render( 'index', {title: 'Twitter.js', people: people, hashtags: hashtags} );
	// res.send("app works")
})

app.get('/news', function(req, res){
	res.send("news works")
})

app.get('/special/', function(req, res){
	res.send("were special")
})

app.listen(3000, function(){
	console.log("our server works")
})

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false })
swig.renderFile(__dirname + '/views/index.html', people, function (err, output) {
    console.log(output);
});