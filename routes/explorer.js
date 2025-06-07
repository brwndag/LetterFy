var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('explorer', { title: 'Explorar músicas' });
});

module.exports = router;