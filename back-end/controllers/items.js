const db = require('../models'); //grabbing db from models folder for router controll
const Item = db.models.Item; //specifies what exaclty the model needed
const User = db.models.User;
const path = require('path');

// Find all items in the items table
const getItems = (req, res) => {
	console.log(req + "is my console log");
	Item.findAll().then(items => {
		res.json(items);
	});
};

// Find one item by id
const itemsById = (req, res) => {
	console.log(req + " <= req");
	Item.findById(req.params.id).then( item => {
		res.json(item);
	});
};

// // SELECT * FROM post WHERE category = itemClicked
// const itemsByCategory = (req, res) => {
// 	Item.findAll({
//   		where: {
//     		category: wallet //hardcoded ... replace with id #itemClicked
//   		}
// 	});
// };

// All user profiles
const getUserProfile = (req, res) => {
	User.findAll().then(profile => {
		res.json(profile);
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
	// category: itemsByCategory,
	user : getUserProfile,
	default: frontEnd
};
