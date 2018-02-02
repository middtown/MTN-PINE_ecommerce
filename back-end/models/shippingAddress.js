module.exports = function(sequelize, Sequelize){

  let model = sequelize.define("ShippingAddress", {    
	    nickname: Sequelize.STRING,
	    street: Sequelize.STRING,
	    apt: Sequelize.STRING,
	    country: Sequelize.STRING,
	    state: Sequelize.STRING,
	    postalCode: Sequelize.INTEGER
  });

  return model;
};