const connection = require('../config/database')

const getListUser = async () => {
    const [result, fields] = await connection.query(`SELECT * FROM User`);
    return result
}

const createUser = async (email, name, city) =>{
    await connection.query(`
        Insert into User(email, name, city) 
        Values (?, ?, ?)
    `, [email, name, city]
    );
}

const updateUser = async (email, name, city, id) =>{
    await connection.query(
        `Update User set email =?, name=?, city=? Where id = ? `
    , [email, name, city, id]
    )
}

const getUserById = async (id) => {
    const [row] = await connection.query(`
        select * from User where  id= ?`, [id])    
    return row[0];
}

const deleteUser = async (id) =>{
    await connection.query(
        `delete from User where id =?`,
        [id]
    )
}

module.exports = {
    getListUser,
    createUser,
    updateUser,
    getUserById,
    deleteUser
}