const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/pages');

/* Main Pages */
router.get('/', ctrlMain.homepage);
router.get('/login', ctrlMain.loginpage);
router.get('/register', ctrlMain.registerPage);


module.exports = router;
