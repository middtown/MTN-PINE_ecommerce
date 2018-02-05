module.exports = function(sequelize, Sequelize){

  let model = sequelize.define("User", {
	    name: { type: Sequelize.STRING, allowNull: false, required: true, unique: true, trim: true},
	    email: { type: Sequelize.STRING, allowNull: false, required: true, unique: true, trim: true},
	    password: { type: Sequelize.STRING, required: true },
	    shippingAddress_id: Sequelize.INTEGER,
	    order_id: Sequelize.INTEGER
  });
  
  return model;
};

