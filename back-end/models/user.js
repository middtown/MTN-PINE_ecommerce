const bcrypt = require('bcrypt-nodejs');
const authentication = require('sequelize-authentication')


module.exports = (sequelize, Sequelize) => {

  const User = sequelize.define("User", {
	    name: { type: Sequelize.STRING, unique: true, required: true, trim: true}, 
	    email: { type: Sequelize.STRING, unique: true, required: true, trim: true, email: true},
	    password: {type: Sequelize.STRING, unique: true, required: true, password: true}, 
	    shippingAddress_id: Sequelize.INTEGER,
	    order_id: Sequelize.INTEGER
  // }, {
  // 	freezeTableName: true,
  // 	instanceMethods: {
  // 		generateHash(password) {
  // 			return bcrypt.has(password, bcrypt.genSaltSync(8));
  // 		},
  // 		validPassword(password) {
  // 			return bcrypt.compare(password, this.password);
  // 		}
  // 	}
  });  
  return User;
};


// // authenticate input against database documents
// User.statics.authenticate = function(email, password, callback) {
//   User.findOne({ email: email })
//       .exec(function (error, user) {
//         if (error) {
//           return callback(error);
//         } else if ( !user ) {
//           var err = new Error('User not found.');
//           err.status = 401;
//           return callback(err);
//         }
//         bcrypt.compare(password, user.password , function(error, result) {
//           if (result === true) {
//             return callback(null, user);
//           } else {
//             return callback();
//           }
//         });
//       });
// };

