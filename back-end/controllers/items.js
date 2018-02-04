const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db = require('../models'); //grabbing db from models folder for router controll
const Item = db.models.Item; //specifies what exaclty the model needed
const User = db.models.User;
const Address = db.models.Address;
const path = require('path');


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
	console.log(req.params);
	// Item.findOne({ where: {category: req.params.body} }).then ( aCategory => {
	// 	res.json(aCategory);
	// });
};

// All user profiles
const getUserProfile = (req, res) => {
	User.findAll().then(profile => {
		res.json(profile);
	});
};
// User address
const userAddresses = (req, res) => {
	Address.findAll().then( address => {
		res.json(address);
	});
};

// Create New Address in User Profile
const createNewAddress = (req, res) => {
	Address.create({ 
		nickname: req.body.nickname,
	    street: req.body.street,
	    apt: req.body.apt,
	    country: req.body.country,
	    state: req.body.state,
	    postalCode: req.body.postalCode 
	},{
		plain: true // <<< WTF does this do... saw it in tuns of examples
	}).then(newUserAddress => {
			res.json(newUserAddress);
	}).catch(err => {
			console.error("create address failed " + err);
	});
};

const deleteAddress = (req, res) => {
	Address.destroy({where: {id: req.params.id}})
	.then(deletedAdress => {
		res.json(deletedAdress);
	}).catch(err => {
			console.error("delete address failed " + err);
	});
};


//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
const frontEnd = (req, res) => {
    res.sendFile(path.join(__dirname + './dist/index.html'));
};

module.exports = {
	items: getItems,
	oneItem : itemsById,
	category: itemsByCategory,
	user : getUserProfile,
	userAddress : userAddresses,
	newAddress : createNewAddress,
	deleteAddress : deleteAddress,
	default: frontEnd
};
