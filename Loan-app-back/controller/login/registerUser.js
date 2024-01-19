const asyncHandler = require('express-async-handler');
const generateToken = require('../../config/token');
const User = require('../../models/userModel');
const cloudinary = require('../../config/cloudinary');
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please send all details');
  }

  const userExits = await User.findOne({ email });
  if (userExits) {
    res.status(400);
    throw new Error('User already exits');
  }

  // const result = await cloudinary.uploader.upload(picture, {
  //   folder: 'products',
  // });
  const user = await User.create({
    name,
    email,
    password,
    // picture: {
    //   public_id: result.public_id,
    //   url: result.secure_url,
    // },
  });
  if (user) {
    res.status(201).json({
      message: 'User Created Successfull',
      data: {
        userId: user._id,
      },
    });
  } else {
    res.status(400);
    throw new Error('Failed to get user');
  }
});

const userDetails = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      message: 'User Matched',
      data: {
        userId: user._id,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400).json({
      message: 'Error in Email or Password',
    });
  }
});

module.exports = { registerUser, userDetails };
