var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('colecoes', { title: 'colecoes'});
});

module.exports = router;