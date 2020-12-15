// importing modules 
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
 
const uniqueValidator = require('mongoose-unique-validator');
  //add password here if needed
var UserSchema = new Schema({    
    
    name : {type: String}, 
    email: {type: String}, 
    password : {type: String},
    phone:{type: Number}
     
    
}); 
  
// plugin for passport-local-mongoose 
UserSchema.plugin(uniqueValidator); 
  
// export userschema 
 module.exports = mongoose.model("User", UserSchema);