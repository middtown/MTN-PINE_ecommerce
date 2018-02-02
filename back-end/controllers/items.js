const db = require('../models');
const Item = db.models.Item;

const getItems = (req, res) => {
	Item.findAll().then(items => {
		res.json(items);
	});
};

//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
const noRoutesDetected = (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  };


module.exports = {
	items: getItems,
	default: noRoutesDetected
};
