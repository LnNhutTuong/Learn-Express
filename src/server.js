require('dotenv').config()
const express = require('express') // commands 
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const app = express() // app
const port = process.env.PORT || 2202 // port
const hostname = process.env.HOST_NAME
const mysql = require('mysql2')

configViewEngine(app);

app.use('/abc',webRoutes);

//test connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// simple query
connection.query(
  'SELECT * FROM User u',           // query
  function(err, results, fields) { // callback
    console.log('>>>>results: ',results); 
    console.log('>>>>fields: ',fields); 
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})