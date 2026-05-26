const express = require('express') // commands 
const router = express.Router();
const {getHomePage, getSkibidi} = require('../controllers/homeControllers');

router.get('/', getHomePage); 
router.get('/skibidi', getSkibidi);   

module.exports = router;