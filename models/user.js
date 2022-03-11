const mongoose = require("mongoose");
const { Schema } = mongoose;

const opts = {
  timestamps: {
    createdAt: "useCreatedOn",
    updatedAt: "userUpdatedOn",
  },
};

const userSchema = new Schema(
    {
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  roles: {
    type: Array,
    required: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: Number,
  occupation: String,
  avatar: String,
  rentals: {
    type: Schema.Types.ObjectId,
    ref: "Rental",
  }, // ref to the rental model,
  secretQuestion: String,
  secretAnswer: String,
  state: String,
  city: String,
  address: String,
  // restrict users outside Nigeria from having access
}, 
{ opts }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
