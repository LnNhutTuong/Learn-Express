const express = require('express') // commands 
const router = express.Router();
const { getHomePage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser} = require('../controllers/homeControllers');

router.get('/', getHomePage);

//list user
//create user
router.get('/create-page', getCreatePage);
router.post('/create-user', postCreateUser);

//update user
router.get('/edit-user/:id', getUpdatePage);
router.post('/update-user/:id', postUpdateUser);
//delete user

router.get('/delete-user/:id', postDeleteUser);

module.exports = router;