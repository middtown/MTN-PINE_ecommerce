module.exports = function (sequelize, Sequelize) {

  let model = sequelize.define('Order', {
    item_id: Sequelize.INTEGER,
    quantity: Sequelize.INTEGER,
    shippingAddress_id: Sequelize.INTEGER,
  });

  return model;
};
