const express = require('express');
const router = express.Router();
const { chatCreate } = require('../controllers/chatControllers');

router.post('/create', chatCreate);

module.exports = router;
