module.exports = function(sequelize, Sequelize){

  let model = sequelize.define("User", {
	    name: Sequelize.STRING, 
	    email: Sequelize.STRING,
	    password: Sequelize.STRING, 
	    shippingAddress_id: Sequelize.INTEGER,
	    order_id: Sequelize.INTEGER
  });
  
  return model;
};

