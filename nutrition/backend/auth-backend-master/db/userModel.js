const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  //   password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },

  // name field
  name: {
    type: String,
    required: [true, "Please Enter your name"],
    unique: false,
  },

  // mobile number field
  mobile: {
    type: Number,
    required: [true, "Plese provide your mobile number"],
    unique: [true, "Mobile number is allready there"],

  },

  // address field
  address: {
    type: String,
    required: [true, "Plese provide your Address"],
    unique: [false],
  },
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
