var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('add', { title: 'Adiconar colecoes de musicas'});
});

module.exports = router;