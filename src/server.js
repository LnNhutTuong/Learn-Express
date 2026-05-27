require('dotenv').config()
const express = require('express') // commands 
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const app = express() // app
const port = process.env.PORT || 2202 // port
const hostname = process.env.HOST_NAME

configViewEngine(app);

app.use('/abc',webRoutes);

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