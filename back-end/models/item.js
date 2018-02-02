module.exports = function(sequelize, Sequelize){

  let model = sequelize.define("Item", {
    name: Sequelize.STRING,
    category: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    color: Sequelize.STRING,
    dimensions: Sequelize.STRING,
    weight: Sequelize.STRING 
  });

  return model;
};