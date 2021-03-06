// importing modules 
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var passportLocalMongoose = require('passport-local-mongoose');
const uniqueValidator = require('mongoose-unique-validator');
  //add password here if needed
var UserSchema = new Schema({    
    
    name : {type: String}, 
    email: {type: String, required:true, unique:true}, 
    password : {type: String, required:true},
    phone:{type: Number}
     
    
}); 
  
// plugin for passport-local-mongoose 
UserSchema.plugin(passportLocalMongoose); 
  
// export userschema 
 module.exports = mongoose.model("User", UserSchema);