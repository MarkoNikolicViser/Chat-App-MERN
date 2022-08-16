const express = require('express');
const router = express.Router();
const { chatCreate, chatGet } = require('../controllers/chatControllers');
const { protect } = require('../middleware/authMidleware');

router.get('/get', protect, chatGet);
router.post('/create', chatCreate);

module.exports = router;
