require('dotenv').config();

const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/
//connection to heroku and local comp.
let sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://middtown@localhost:5432/mtnpine');

//serves static files
  app.use(express.static(__dirname + '../back-end/dist'));

app.get('/', (req, res) => {
    res.send("Welcome to our api");
  });

//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

//CORS setup to allow other ports from this host
if(!process.env.DYNO) {
	app.use( (req, res, next) => {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
	  next();
	});
}

let port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});