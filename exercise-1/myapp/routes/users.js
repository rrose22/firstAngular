var express = require('express');
var bodyParser =  require('body-parser')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next){
  console.log(`Firstname: ${req.body.firstname}`)
  console.log(`Lastname: ${req.body.lastname}`)
  res.send("Post Request Received")

})

router.use(bodyParser.urlencoded({ extended:true }))

module.exports = router;
