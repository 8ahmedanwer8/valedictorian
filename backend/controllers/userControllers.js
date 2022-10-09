const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const signUpUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email });

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  const userExistsEmail = await User.findOne({ email });
  if (userExistsEmail) {
    res.status(400);
    throw new Error("An account with this email already exists");
  }
  const userExistsUser = await User.findOne({ name });
  if (userExistsUser) {
    res.status(400);
    throw new Error("An account with this username already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create account");
  }
});

const signInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});
module.exports = { signUpUser, signInUser };
