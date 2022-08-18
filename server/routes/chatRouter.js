const express = require('express');
const router = express.Router();
const {
  fetchChats,
  chatGet,
  createGroup,
} = require('../controllers/chatControllers');
const { protect } = require('../middleware/authMidleware');

router.get('/get', protect, chatGet);
router.post('/getallchats', protect, fetchChats);
router.post('/creategroup', protect, createGroup);

module.exports = router;
