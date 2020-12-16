const express = require('express')
const mongoose = require('mongoose')
const router = express.Router(); 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var session = require('express-session');
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


app.use(passport.initialize());
app.use(passport.session());
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
  
 



 






//Handling user logout  


app.post('/submitRegister', function(req, res) { 
   
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
          const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            phone: req.body.phone

          });
          user.save().then(
            () => {
              res.status(201).json({
                message: 'User added successfully!'
              });
            }
          ).catch(
            (error) => {
              res.status(500).json({
                error: error
              });
            }
          );
        }
      );
    
        
         return res.redirect('http://localhost:3000/'); 
        
});

app.post('/login', function(req,res,next){

    User.findOne({ email: req.body.email }).then(
        (user) => {
          if (!user) {
            return res.status(401).json({
              error: new Error('User not found!')
            });
          }
          bcrypt.compare(req.body.password, user.password).then(
            (valid) => {
              if (!valid) {
                return res.status(401).json({
                  error: new Error('Incorrect password!')
                });
              }
              
              const token = jwt.sign(
                { userId: user.id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' });
                
              res.status(200).json({
                token: token
              });
            }
          ).catch(
            (error) => {
              res.status(500).json({
                error: error
              });
            }
          );
        },
        
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
      return res.redirect('http://localhost:3000/'); 
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

