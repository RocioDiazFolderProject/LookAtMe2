const express = require('express');
const controller = require('../services/index.services');
const router = express.Router();

router.get('/', controller.index);

module.exports = router;

