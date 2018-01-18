var express = require('express'),
    app = new express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    User = require('./api/models/usersModel'),
    bodyParser = require('body-parser');

// mongoose.promise = global.promise;
mongoose.connect('mongodb://kiran:kiran@ds159997.mlab.com:59997/users');

// To allow application from different domain to access requests in this server
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/usersRoutes');
routes(app);

app.listen(port);

console.log('server listening on port: ' + port);
