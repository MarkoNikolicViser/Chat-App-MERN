const express = require('express');
const {
  registerUser,
  loginUser,
  getAllUser,
} = require('../controllers/userControllers');
const { protect } = require('../middleware/authMidleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get-all', protect, getAllUser);

module.exports = router;
