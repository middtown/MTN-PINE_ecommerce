const express = require('express');
const router = express.Router();
const path = require('path');
const itemsController = require('../controllers/items.js');


// sanity check page
router.get('/api', (req, res) => {
    res.send("Welcome to the MTN-PINE A.P.I. !");
  });

									// --------------------   Item Routes. -------------------- //

  
// index
router.get('/api/items', itemsController.items); 
router.get('/api/items/:id', itemsController.oneItem);
router.get('/api/items/category', itemsController.category);

// User Routes
router.get('/api/profile', itemsController.user);


								// --------------------  User Order Routes. -------------------- //









								// --------------------  User Address Routes. -------------------- //

// Shipping Addresses Routes
router.get('/api/profile/address', itemsController.userAddress);
router.post('/api/profile/address/new', itemsController.newAddress);
router.delete('/api/profile/address/delete', itemsController.deleteAddress);



									// --------------------  User Routes. -------------------- //


//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
// router.get('/*', itemsController.default);

module.exports = router;

