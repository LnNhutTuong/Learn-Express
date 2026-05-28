const connection = require('../config/database')

const getHomePage = (req, res)=>{
    res.render('home');
}   

const postCreateUser = (req, res ) =>{
    console.log(">>>>>>check req: ", req.body);
    res.send("ok");
}

module.exports = {
    getHomePage,
    postCreateUser
}
