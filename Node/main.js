let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/about', function(req, res) {
  res.send('Player data 11111');
});

app.listen(3000, function() {

  console.log('listening on port 3000');
});
