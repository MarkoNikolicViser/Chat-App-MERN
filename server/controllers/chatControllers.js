const asyncHandler = require('express-async-handler');
const Chat = require('../Models/chatModel');

const chatGet = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  const chat = Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate('users', '-password')
    .populate('latestMessage');
  chat = await User.populate(chat, {
    path: 'latestMessage.sender',
    select: 'name pic email',
  });
  if (chat.length > 0) {
    res.send(chat[0]);
  } else {
    const chatData = {
      chatName: 'sender',
      isGroupChat: false,
      users: [req.user._id, userId],
    };
  }
  try {
    const createdChat = await Chat.create(chatData);
    const fullChat = await Chat.find({ _id: createdChat._id }).populate(
      'users',
      '-password'
    );
    res.status(200).send(fullChat);
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});
const chatCreate = asyncHandler(async (req, res) => {});

module.exports = { chatCreate, chatGet };
