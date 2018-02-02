require('dotenv').config();

const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mtnpineRouter = require('./config/routes.js');
app.use(mtnpineRouter);



/************
 * DATABASE *
 ************/


//connection to heroku and local comp.
const localHost = require("./env.js");
let sequelize = new Sequelize(process.env.DATABASE_URL || localHost.aaron || localHost.josh || localHost.ricky );

//serves static files
app.use(express.static(__dirname + '../back-end/dist'));


//CORS setup to allow other ports from this host
if(!process.env.DYNO) {
	app.use( (req, res, next) => {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
	  next();
	});
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});