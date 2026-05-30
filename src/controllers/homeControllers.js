const { render } = require('ejs');
const connection = require('../config/database')
const {getListUser, createUser, updateUser, getUserById, deleteUser} = require('../services/CRUDservice')

const getHomePage = async (req, res) => {
    let userList = await getListUser();
    res.render('home', {
        listUser: userList
    });
}

const getCreatePage = (req, res) => {
    res.render('create');
}

const postCreateUser = async (req, res ) =>{
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    await createUser(email, name, city);
    res.redirect('/');
}

const getUpdatePage = async (req, res) =>{
    let id = req.params.id;
    let user = await getUserById(id);

    res.render('update', 
        {
        user: user
        });

    console.log(">>>>Check user: ", user);
}

const postUpdateUser = async (req, res) => {
    let id = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await updateUser(email, name, city, id)
    res.redirect('/')

}

const postDeleteUser = async (req, res) => {
    let id =req.params.id;

    await deleteUser(id);
    res.redirect('/');
}


module.exports = {
    getHomePage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser
}
