const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const db = require('../models'); //grabbing db from models folder for router controll
const Item = db.models.Item; //specifies what exaclty the model needed
const User = db.models.User;
const Address = db.models.Address;
const path = require('path');

// home route after sign in
const home = (req, res) => {
	res.send("<h1> You are at the home route </h1>");
};


// Find all items in the items table
const getItems = (req, res) => {
	Item.findAll().then(items => {
		res.json(items);
	});
};

// Find one item by id
const itemsById = (req, res) => {
	Item.findById(req.params.id).then( item => {
		res.json(item);
	});
};

// SELECT * FROM post WHERE category = itemClicked
const itemsByCategory = (req, res) => {
	console.log(req.params.cat);
	// res.send(req.params.cat);
	Item.findOne({ where: {category: req.params.cat} }).then ( aCategory => {
		res.json(aCategory);
	});
};

const allItemsByCategory = (req, res)=> {
	Item.findAll().then(items => {
		res.json(items);
	});
}


//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
const frontEnd = (req, res) => {
    res.sendFile(path.join(__dirname + './dist/index.html'));
};

module.exports = {
	home 			: home,
	items 			: getItems,
	oneItem 		: itemsById,
	category 		: itemsByCategory,
	categoryAll : allItemsByCategory,
	default 		: frontEnd
};
