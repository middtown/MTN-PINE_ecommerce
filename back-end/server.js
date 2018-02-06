require('dotenv').config();

const Sequelize = require('sequelize');
const passport = require('passport');
const flash = require('flash');
const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
app.use(morgan('dev')); //log every request to the console
const cookieParser = require("cookie-parser");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//serves static files
app.use(express.static(__dirname + '/dist'));

const mtnpineRouter = require('./config/routes.js');
app.use(mtnpineRouter);

// initialize passport stuff -- For Passport
app.use(session({ secret: 'mtnpinedabest',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions
app.use(flash()); 
//require('../config/routes.js')(config, passport);


//Models
let models = require("./models");
 
//load passport strategies
require('./config/passport.js')(passport, models.user);

//CORS setup to allow other ports from this host
if(!process.env.DYNO) {
	app.use( (req, res, next) => {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
	  next();
	});
}

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
