var express = require('express');
var router = express.Router();

/* GET Add Credit page. */
router.get('/', function(req, res, next) {
  if (req.session.player && req.cookies.session) {
    console.log("Session exists.");
    res.render('addcredit', { title: 'Add credit' });
  } else {
    res.redirect('/index');
  }
});

module.exports = router;
