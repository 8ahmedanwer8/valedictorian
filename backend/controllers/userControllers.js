const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const axios = require("axios");

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
  console.log(typeof name, typeof email, typeof password);
  console.log(name, email, password);
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

const googleSignUpUser = asyncHandler(async (req, res) => {
  const { googleAccessToken } = req.body;
  try {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${googleAccessToken.access_token}`,
        },
      }
    );
    const name = response.data.given_name;
    const lastName = response.data.family_name;
    const email = response.data.email;
    const picture = response.data.picture;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400);
      throw new Error("An account with this email already exists");
    }
    const user = await User.create({
      name,
      email,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }

  // axios
  //   .get("https://www.googleapis.com/oauth2/v3/userinfo", {
  //     headers: {
  //       Authorization: `Bearer ${googleAccessToken.access_token}`,
  //     },
  //   })
  //   .then(async (response) => {
  //     console.log(response);
  //     const name = response.data.given_name;
  //     const lastName = response.data.family_name;
  //     const email = response.data.email;
  //     const picture = response.data.picture;

  //     const existingUser = await User.findOne({ email });

  //     if (existingUser) {
  //       res.status(400);
  //       throw new Error("An account with this email already exists");
  //     }
  //     const user = await User.create({
  //       name,
  //       email,
  //     });

  //     if (user) {
  //       res.status(201).json({
  //         _id: user._id,
  //         name: user.firstName,
  //         email: user.email,
  //         token: generateToken(user._id),
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(400);
  //     throw new Error(err); //Invalid Google OAuth access token but we don't want to tell that to the user
  //   });
}); //i can authenticate!!!, idk the diff between this and signing up. also, the error handling has some promise problem!!!

const googleSignInUser = asyncHandler(async (req, res) => {
  if (req.body.googleAccessToken) {
    const { googleAccessToken } = req.body;

    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async (response) => {
        const firstName = response.data.given_name;
        const lastName = response.data.family_name;
        const email = response.data.email;
        // const picture = response.data.picture;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
          res.status(400);
          throw new Error("User does not exist");
        }

        const token = jwt.sign(
          {
            email: existingUser.email,
            id: existingUser._id,
          },
          config.get("JWT_SECRET"),
          { expiresIn: "1h" }
        );

        res.status(200).json({ result: existingUser, token });
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  }
});

module.exports = { signUpUser, signInUser, googleSignUpUser, googleSignInUser };
