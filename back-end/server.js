require('dotenv').config();

const Sequelize = require('sequelize');
const passport = require('passport');
const flash = require('flash');
const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const cors = require('cors');
app.use(cors());
const morgan = require('morgan');
app.use(morgan('dev')); //log every request to the console
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//serves static files
app.use(express.static(__dirname + '/dist'));


//CORS setup to allow other ports from this host
if(!process.env.DYNO) {
	app.use( (req, res, next) => {
	  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	  res.header("Access-Control-Allow-Credentials", "true");
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
	  next();
	});
}

const mtnpineRouter = require('./config/routes.js');
app.use(mtnpineRouter);

// initialize passport stuff -- For Passport
app.use(session({ secret: 'mtnpinedabest',resave: true, saveUninitialized:false})); // session secret
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions
app.use(flash()); 


//Models
let models = require("./models");

//load passport strategies
require('./config/passport')(passport);

models.sequelize.sync().then(() => {
	console.log("database looks fine");
}).catch((err) => {
	console.log(err, "something went wrong with the database");
});
 
app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
	if (!err)
	console.log(`Listening on port ${port}`);
	else console.log(`something went wrong with PORT ${err}`);
});


