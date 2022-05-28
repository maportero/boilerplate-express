var express = require('express');
var app = express();
var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({'extended': 'false'}));
  app.post('/name', (req , res) => {
    let {first: first , last: last } = req.body;
    res.json ({
      'name': `${first} ${last}`
    })
  })

  app.get('/name', (req, res) => {
    let {first: first , last: last } = req.query;
    res.json ({
      'name': `${first} ${last}`
    })
  })
  app.get('/:word/echo', (req,res) => {
    res.send({ echo : req.params.word})
  })
	app.get('/',(req, res) => {
	  const absolutePath = __dirname + "/views/index.html"
	  res.sendFile(absolutePath);	  
	})
	
	app.use('/public',express.static(__dirname + '/public'));

	app.get('/json', (req, res) => {
	  res.json({ 
		'message': (process.env.MESSAGE_STYLE === 'uppercase'  ? 'HELLO JSON' : 'Hello json') });
	})

	app.use((req, res, next) => {
	  console.log(req.method+' '+req.path + ' - ' + req.ip );  
	  next();
	})

	app.get('/now',(req, res,next) => {  
	  req.time =  new Date().toString();
	  next();
	}, (req, res) => {
	  res.json({'time' : req.time});
	})



































 module.exports = app;
