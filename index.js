var express = require('express')
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	//fs.readFileSync('index.html', function (err,data) {
	//	if (err) throw err;
		//response.send(data.toString());
		response.send('data.toString()');
		
	//});
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
