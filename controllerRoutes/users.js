var express = require('express');
var app = express();

//*********** LOG IN **************

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/register', function(req, res) {
    res.render('register');
});

module.exports = router;