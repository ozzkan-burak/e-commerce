const mongoose = require('mongoose');
const cypto = require('cyrpto');
const uuidv1 = require("uuid/v1");  

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32
  },
  email :{
    type: String,
    trim: true,
    requred: true,
    unique: true,
  },
  hashed_password :{
    type: String,
    requred: true,
  },
  about :{
    type: String,
    trim: true,
  },
  salt: String,
  role: {
    type: Number,
    default: 0
  },
  history: {
    type: Array,
    default []
  }
},
{ timestamps: true }
);
