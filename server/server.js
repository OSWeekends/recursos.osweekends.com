var express = require ('express');
var path = require ('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var resources = require('./routes/resources');

var port = 8081;

var app = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', resources);

require('./config/error-handler')(app);

app.listen(port, function(){
    console.log('Server started on port ' + port);
})
