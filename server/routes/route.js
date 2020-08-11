const express = require('express');
const router = express.Router();

const Users = require('../models/users')
//  Retrieving data
router.get('/users', (req, res, next)=>{
    Users.find(function(err, users)
  {
      res.json(users);
  });
});

//  Adding data
router.post('/register', (req, res, next) => {
  //logic for adding data
  let newUser = new Users({
    username : req.body.username,
    email : req.body.email,
    password : req.body.password
  });

  newUser.save((err, register) => {
      if(err)
      {
        res.json({msg : 'failed to add the user'});
      }
      else
      {
        res.json({msg : 'user added successfully'});
      }
  });
});

//  Deleting user
router.delete('/user/:id', (req, res, next) => {
    Users.deleteOne({_id : req.params.id}, function(err, result) {
      if(err)
      {
        res.json(err);
      }
      else
      {
        res.json(result);
      }
    });
});

//  Authenticate user
router.post('/authenticate', (req, res, next) => {
    Users.find({username: req.body.username, password: req.body.password}, function(err, result){
      if(err)
      {
        res.json(err);
      }
      else
      {
        if(result.length === 0)
        {
          res.json({msg : 'incorrect username or password'});
        }
        else
        {
          res.json({msg : 'login successfull'});
        }
      }
  })
});
module.exports = router;
