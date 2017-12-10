var express = require('express');
var router = express.Router();

/* GET Game Lobby page. */
router.get('/', function(req, res, next) {
  res.render('gamelobby', { title: 'Game Lobby' });
});

router.post('/', function(req, res) {
  res.clearCookie('session');
  console.log("User logout");
  res.redirect('/index');
});

module.exports = router;
