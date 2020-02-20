const express = require('express');

const router = express.Router();

const docPortalController = require('../controllers/docPortalController');


router.get('/docPortal',docPortalController.docPortal);
router.get('/docRegistration', docPortalController.docRegistration);

module.exports = router;