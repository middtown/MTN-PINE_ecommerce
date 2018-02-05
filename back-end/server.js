require('dotenv').config();

const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//serves static files
app.use(express.static(__dirname + '/dist'));

const mtnpineRouter = require('./config/routes.js');
app.use(mtnpineRouter);

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
