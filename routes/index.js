var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/signup', function(req, res, next) {
  console.log('route hit!');
  res.send('You signed up!'); 
}); 

module.exports = router;
