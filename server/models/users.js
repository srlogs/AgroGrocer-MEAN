const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  first_name : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  username : {
    type : String,
    required : true
  },
  phone : {
    type : String,
    required : true
  }
});

const Users = module.exports = mongoose.model('Users', userSchema);
