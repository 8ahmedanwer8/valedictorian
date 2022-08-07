const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String, required: true, default: "New User" },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },

    url: { type: String, trim: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    meta: {
      indRed: Number,
      qualEd: Number,
      acadEnv: Number,
      funEnv: Number,
      finAid: Number,
    },
  },
  {
    timestamps: true,
  }
);

const User = monogoose.model("User", userModel);
module.exports = User;
