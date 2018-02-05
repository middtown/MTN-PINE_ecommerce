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


// All user profiles
const getUserProfile = (req, res) => {
	User.findAll().then(profile => {
		res.json(profile);
	});
};

// Create User
const createUser = (req, res) => {
	User.create({
		name: req.body.name,
		email: req.body.emal,
		password: req.body.password
	}).then(user => {
		res.json(user);
  }).catch(err => {
  		console.error("create new user failed " + err);
		res.send("created new user failed " + err);
  });
};

// User address
const userAddresses = (req, res) => {
	Address.findAll().then( address => {
		res.json(address);
	});
};

// Get one address for user
const oneAddress = (req, res) => {
	Address.findById(req.params.id)
	.then(selected => {
		res.json(selected);
	}).catch(err => {
		console.error("getting one address failed " + err);
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
	}).then(newUserAddress => {
		res.json(newUserAddress);
	}).catch(err => {
		console.error("create address failed " + err);
		res.send("created new address failed " + err);
	});
};

// update user address
const updateAdress =  (req, res) => {
  Address.findById(req.params.id)
  .then(address => {
    if(!address) 
    	res.send("address not found");
     else 
    	return address.updateAttributes(req.body);
  }).then(newData => {
    res.json(newData);
  });
};

// delete user created address
const deleteAddress = (req, res) => {
	console.log("delete address");
	Address.destroy({where: {id: req.params.id}})
	.then(deletedAdress => {
		res.json(deletedAdress + " has been deleted");
	}).catch(err => {
		console.error("delete address failed " + err);
	});
};

// exporting user controllers
module.exports = {

	user 			: getUserProfile,
	createUser 		: createUser,
	addresses 		: userAddresses,
	oneAddress 		: oneAddress,
	newAddress 		: createNewAddress,
	updateAdress 	: updateAdress,
	deleteAddress 	: deleteAddress
};