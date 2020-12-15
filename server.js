const express = require('express')
const mongoose = require('mongoose')
const router = express.Router(); 

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
var bodyParser = require('body-parser');
const cors = require("cors");

mongoose.connect('mongodb://localhost:27017/auth_demoapp3', {useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection


db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database connection established')
})

const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
};



//app.use(morgan('dev'))
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({
    extended: true
 }));


const PORT= process.env.PORT || 3003

app.listen(PORT, ()=>{
    console.log('server is now running on port ${PORT}')
})

//ROUTES to implement pages/scripts/images/components from another folder, utilize syntax to the left and below





  app.get('/src/components/modal/registerButton.js',(req,res) =>{
    res.sendFile(__dirname + "/src/components/modal/registerModal.js");
  });

  app.get('/src/components/modal/loginButton.js',(req,res) =>{
    res.sendFile(__dirname + "/src/components/modal/loginModal.js");
  });

  const User = require('./model/user'); 
  
 
passport.use(new LocalStrategy(User.authenticate())); 
app.use(passport.initialize()); 
app.use(passport.session()); 

passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());
 



//OMNSP\src\components\login\registerButton.js
   //below is code to signup a user into mongoDB/mongoose 
   /*app.post('/submitRegister', function(req,res){ 
    var name = req.body.name; 
    var email =req.body.email; 
    var pass = req.body.password; 
    var phone =req.body.phone; 
  
  
    var user = { //this data is a JSON for a user
        "name": name, 
        "email":email, 
        "password":pass, 
        "phone":phone 
    } 
    
db.collection('users').insertOne(user,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
 
          
   return res.redirect('http://localhost:3000/'); 
});

//db.collection('users').findOne({email: req.body., });
  */

//Handling user login 
/*app.get("/login", (req,res,next)=> { 
    if(req.body.email==db.collection('users').email && req.body.pass==db.collection('users').password)
    {

        console.log("success");
         res.redirect('http://localhost:3000/Profile-Page');
        
    }
    else if(req.body.email==db.collection('users').email && req.body.pass!=db.collection('users').password)
    {
        console.log("wrong password!!!");
         alert("wrong password!");
    }
});
  */



//Handling user logout  


app.post('/submitRegister', function(req, res) { 
      
    
    Users=new User({name : req.body.name, 
                    email: req.body.email, 
                    password: req.body.password, 
                    phone: req.body.phone}); 
  //dont ask for password in above object, in order to validate password using passport?
         db.collection('users').insertOne(Users, function(err, collection){
             if(err) throw err
             
                 console.log("Account registered successfully!")
             
         });
         return res.redirect('http://localhost:3000/'); 
        
});

app.post('/login', function(req,res){

    if(!req.body.username)
    {
        console.log("")
    }
});
         



  










/*app.post('/addGroups', function(req,res,){
    var group1 = req.body.group1;
    var group2 = req.body.group2;
    var group3 = req.body.group3;
    var group4 = req.body.group4;

    var myGroups = {
        "group1":group1,
        "group2":group2,
        "group3":group3,
        "group4":group4
    }
    db.collection('users').updateOne(myGroups,function(err,collection){

    });

});*/

