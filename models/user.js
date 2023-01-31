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


userSchema.virtual('password')
.set(function(password){
  this._password = password
  this.salt = uuid()
  this.hadhed_password = this.encryptPassword(password)
})
.get(function(){
  return this_password
})

userSchema.metohods = {
  encrptedPassword: function(password) {
    if(!password) return '';
    try {
      return crypto.createHmac('sha1', this.salt)
                  .update(password)
                  .digest('hex')
    } catch (err) {
      return ''
    }
  }
}

module.exports = mongoose.model("User")
