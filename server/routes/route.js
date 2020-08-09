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
    first_name : req.body.first_name,
    password : req.body.password,
    username : req.body.username,
    phone : req.body.phone
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
    Users.remove({_id : req.param.id}, function(err, result) {
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

module.exports = router;
