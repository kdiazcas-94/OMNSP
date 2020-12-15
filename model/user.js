// importing modules 
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var passportLocalMongoose = require('passport-local-mongoose'); 
  
  //add password here if needed
var UserSchema = new Schema({    
    email: {type: String, required:true, unique:true}, 
    username : {type: String, unique: true, required:true}, 
    password : {type: String, unique: true, required:true}, 
    phonenumber:{type: Number, unique:true, required:true}
}); 
  
// plugin for passport-local-mongoose 
UserSchema.plugin(passportLocalMongoose); 
  
// export userschema 
 module.exports = mongoose.model("User", UserSchema);