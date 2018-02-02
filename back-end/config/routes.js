const express = require('express');
const router = express.Router();
const path = require('path');
const itemsController = require('../controllers/items.js');

// sanity check page
router.get('/api', (req, res) => {
    res.send("Welcome MTN-PINE api");
  });


//Item Routes
  
// index
router.get('/api/items', itemsController.items); 
router.get('/api/items/category', itemsController.category);



// User Routes




// Orders Routes




// Shipping Addresses Routes


//Put the app.get part below any back end routes, because it creates a route that defaults 
//to the front end if no back end routes exist (by serving up the Angular index.html file).
router.get('/*', itemsController.default);

module.exports = router;