import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Pelase provide a username "],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Pelase provide a email "],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Pelase provide a password "],
  },

  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verfyToken: String,
  verfyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.models("users", userSchema);

export default User;
