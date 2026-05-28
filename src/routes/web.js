const express = require('express') // commands 
const router = express.Router();
const {getHomePage, postCreateUser} = require('../controllers/homeControllers');

router.get('/', getHomePage); 

router.post('/post-user', postCreateUser);

module.exports = router;