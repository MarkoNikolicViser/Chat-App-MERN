const asyncHandler = require('express-async-handler');
const User = require('../Models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, picture } = req.body;
  // if(!name||!email||!password){
  //     res.status(400)
  //     throw new Error('Please fill all the fields')
  // }

  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(400);
    throw new Error('User already exist');
  }
  const user = await User.create({ name, email, password, picture });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('User creation failed!');
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const existUser = await User.findOne({ email });

  if (existUser && (await existUser.matchPassword(password))) {
    res.json({
      _id: existUser._id,
      email: existUser.email,
      name: existUser.name,
      picture: existUser.picture,
      token: generateToken(existUser._id),
    });
  } else {
    throw new Error('Invalid email or password');
  }
});
const getAllUser = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: 'i' } },
          { email: { $regex: req.query.search, $options: 'i' } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});
module.exports = { registerUser, loginUser, getAllUser };
