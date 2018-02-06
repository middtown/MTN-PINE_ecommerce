module.exports = (sequelize, Sequelize) => {



  let User = sequelize.define("User", {
	    name: { type: Sequelize.STRING, unique: true, required: true, trim: true}, 
	    email: { type: Sequelize.STRING, unique: true, required: true, trim: true, email: true},
	    password: {type: Sequelize.STRING, unique: true, required: true, password: true}, 
	    shippingAddress_id: Sequelize.INTEGER,
	    order_id: Sequelize.INTEGER
  });
  


  return User;
};
