var express = require( 'express' );
var app = express();

var swig = require('swig')

var http = require('http')
var server = http.createServer();
var port = 3000;
server.on('request', app);

// Routes 
var routes = require('./routes/');
app.use('/',routes);

var morgan = require('morgan')

app.use(morgan(':method :url :status'))


app.listen(3000, function(){
	console.log("Working Server: Port 3000")
})

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false })
swig.renderFile(__dirname + '/views/index.html', function (err, output) {
    console.log(output);
});