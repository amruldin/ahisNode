const express = require('express');

const router = express.Router();

const pharmController = require('../controllers/pharmPortalController');



router.get('/pharmPortal',pharmController.pharmProtal);




module.exports = router;

