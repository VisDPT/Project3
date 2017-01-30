var express = require('express');
var router = express.Router();

//*********** LOG IN **************

router.get('/login', function(req, res) {
    res.render('loginRegister');
});

module.exports = router;