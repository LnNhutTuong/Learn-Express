const getHomePage = (req, res)=>{
    res.send('Hello World! & nodemon');
}

const getSkibidi = (req, res) =>{
    res.send('lambada');
}   

module.exports = {
    getHomePage,
    getSkibidi
}
