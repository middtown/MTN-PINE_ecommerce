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

// Create User
const createUser = (req, res) => {
	User.create(req.body).then(user => {
    if(!user) res.send("user not saved");
    else res.json(user);
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

// // Update address
// const updateAdress = (req, res) => {
// 	Address.findOne({ id: req.params.id })
// 	.then(address => {
//   		address.updateAttributes({
// 	    	nickname: req.body.nickname,
// 		    street: req.body.street,
// 		    apt: req.body.apt,
// 		    country: req.body.country,
// 		    state: req.body.state,
// 		    postalCode: req.body.postalCode 
//   		}).then(updatedAdress => {
//   			res.json(updatedAdress);
//   		}).catch(err => {
//   			console.error("update address failed " + err);
//   		});
// 	});
// };

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

//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
const frontEnd = (req, res) => {
    res.sendFile(path.join(__dirname + './dist/index.html'));
};

module.exports = {
	items 			: getItems,
	oneItem 		: itemsById,
	category 		: itemsByCategory,
	user 			: getUserProfile,
	addresses 		: userAddresses,
	oneAddress 		: oneAddress,
	newAddress 		: createNewAddress,
	updateAdress 	: updateAdress,
	deleteAddress 	: deleteAddress,
	createUser 		: createUser,
	default 		: frontEnd
};
