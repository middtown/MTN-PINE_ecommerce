const express = require('express');
const passport = require('passport');
const app = express();
const router = express.Router();
const path = require('path');
const itemsController = require('../controllers/items.js');
const usersController = require('../controllers/users.js');


// sanity check page
router.get('/api', (req, res) => {
    res.send("Welcome to the MTN-PINE A.P.I. !");
  });

									// --------------------   Item Routes. -------------------- //

// index
router.get('/api/home', itemsController.home); 
router.get('/api/items', itemsController.items); 
router.get('/api/items/category', itemsController.categoryAll);
router.get('/api/items/category/:cat', itemsController.category);
router.get('/api/items/:id', itemsController.oneItem);

								// --------------------  User Routes. -------------------- //

// Get all users 
router.get('/api/profile', usersController.user);
// log in user 
// router.post('/api/login', usersController.logIn);
// log out user 
router.post('/api/logout', usersController.logOut);
// Create User
router.post('/api/profile/new', usersController.signUp);
// router.post('/api/profile/new', passport.authenticate('local-signup', { successRedirect: '/items', failureRedirect: '/' }));

								// --------------------  User Address Routes. -------------------- //


// Shipping Addresses Routes
router.get('/api/profile/address', usersController.addresses);
router.get('/api/profile/address/:id', usersController.oneAddress);
router.post('/api/profile/address/new', usersController.newAddress);
router.post('/api/profile/address/:id', usersController.updateAdress);
router.delete('/api/profile/address/:id', usersController.deleteAddress);

									// --------------------  Order Routes. -------------------- //



									// --------------------  passport Routes. -------------------- //



									// --------------------  End Key Routes. -------------------- //

//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
// router.get('/*', itemsController.default);

router.get('/*', (req, res) => {
	res.sendfile('../dist');
});

module.exports = router;

