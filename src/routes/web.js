const express = require('express') // commands 
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hello World! & nodemon')
})

router.get('/example', (req, res) => {
  res.send('Hello Example!')
})

router.get('/dynamic', (req, res) => {
  res.send('<h1>Hello Dynamic!</h1>')
})

router.get('/sample', (req, res) => {
  res.render('sample.ejs')
})  

module.exports = router;