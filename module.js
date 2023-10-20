const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true
  },

  password:{
    type: string,
    required:true
  },
  
  mobile: {
    type: Number,
    required: true,
  },
  
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("userInfo", Schema);
