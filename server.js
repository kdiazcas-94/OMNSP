const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
/*const bodyParser = require('body-parser')
 Might use this for express-session tokens
passport = require("passport"), 
   
    LocalStrategy = require("passport-local").Strategy
    passportLocalMongoose =  
        require("passport-local-mongoose"), 
   
// must hash the password using bcrypt, to secure your users!
mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true); 
mongoose.set('useUnifiedTopology', true);
const EmployeeRoute = require('./routes/employee')
const AuthRoute = require('./routes/auth')
const router = require('./routes/employee')

const { data } = require('jquery')*/
mongoose.connect('mongodb://localhost:27017/auth_demoapp2', {useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection


db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database connection established')
})

const app = express()




app.use(morgan('dev'))




const PORT= process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('server is now running on port ${PORT}')
})

//ROUTES to implement pages/scripts/images/components from another folder, utilize syntax to the left and below





  app.get('/src/components/login/registerButton.js',(req,res) =>{
    res.sendFile(__dirname + "/src/components/login/registerButton.js");
  });

//OMNSP\src\components\login\registerButton.js
   //below is code to signup a user into mongoDB/mongoose 
   app.post('/register', function(req,res){ 
    var name = req.body.name; 
    var email =req.body.email; 
    var pass = req.body.password; 
    var phone =req.body.phone; 
  
  
    var data = { //this data is a JSON for a user
        "name": name, 
        "email":email, 
        "password":pass, 
        "phone":phone 
    } 
    
db.collection('users').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
 
          
   return res.redirect('/secret.html'); 
});
  

//Handling user login 
app.post("/login", (req,res,next)=> { 
    if(req.body.email==db.collection('users').email && req.body.pass==db.collection('users').pass)
    {
        return res.redirect('/secret.html');
    }
});
  
//Handling user logout  
app.get("/logout", function (req, res) { 
    req.logout(); 
    res.redirect("/"); 
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



 

