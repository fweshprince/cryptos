const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true
    },
    username: {
        type: String,
        required: [true, "Please input a user name"],
        trim: true
    },
    referrals: {
        type: Number,
        default: 0
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    walletBalance: {
        type: Number,
        default: 0
    },
    email: {
    type: String,
    required: [true, 'Please input a valid email'],
    unique: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ],
  }
}, 
{timestamps: true}
)

const User = mongoose.model("User", UserSchema)

module.exports = User