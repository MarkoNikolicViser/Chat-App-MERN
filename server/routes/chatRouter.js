const express = require('express');
const router = express.Router();
const { fetchChats, chatGet } = require('../controllers/chatControllers');
const { protect } = require('../middleware/authMidleware');

router.get('/get', protect, chatGet);
router.post('/getallchats', fetchChats);

module.exports = router;
