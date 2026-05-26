const express = require('express') // commands 
const path = require('path')
require('dotenv').config()
// import express from 'express';

console.log(">>>>>>check env:", process.env);

const app = express() // app
const port = process.env.PORT || 2202 // port
const hostname = process.env.HOST_NAME


//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//route: 
//  req = request
//  res = response
//  res.send: can send string

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/example', (req, res) => {
  res.send('Hello Example!')
})

app.get('/dynamic', (req, res) => {
  res.send('<h1>Hello Dynamic!</h1>')
})

app.get('/sample', (req, res) => {
  res.render('sample.ejs')
})  

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})