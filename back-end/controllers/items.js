const db = require('../models'); //grabbing db from models folder for router controll
const Item = db.models.Item; //specifies what exaclty the model needed

// Find all items in the items table
const getItems = (req, res) => {
	Item.findAll().then(items => {
		res.json(items);
	});
};

// SELECT * FROM post WHERE category = itemClicked
const itemsByCategory = (req, res) => {
	Item.findAll({
  		where: {
    		category: wallet //hardcoded ... replace with id #itemClicked
  		}
	});
}

//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
const noRoutesDetected = (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  };


module.exports = {
	items: getItems,
	default: noRoutesDetected
};
