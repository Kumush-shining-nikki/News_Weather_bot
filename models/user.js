const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userId: Number,
    firstName: String,
    lastName: String,
    username: String,
    language: String,
    phone: String,
  });
  
  const User = mongoose.model("User", UserSchema);