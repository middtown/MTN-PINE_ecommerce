//Connect
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://middtown@localhost:5432/mtnpine');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

let Item = sequelize.import("./item");
let User = sequelize.import("./user");
let ShippingAddress = sequelize.import("./shippingAddress");
let Order = sequelize.import("./order");


module.exports.models = {
	Item: Item,
	User: User,
	ShippingAddress: ShippingAddress,
	Order: Order
};