let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/user.js');
let Chat = require('../models/chat.js');
let auth = require('../utils/auth'); 

router.post('/api/signup', function(req, res, next) {
  let hashedPassword = User.hashPassword(req.body.password);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    location: "",
    education: "",
    description: "",
    tags: [],
    connections: [],
    pending: [],
    invitations: [],
    imageUrlPath: "images/profile.jpg",
    unreadChats: 0,
    unreadConnections: 0
  });

  user.save(function(err, user) {
    if (err) throw err;  
    delete user.password;
    res.send(user); 
  });

}); 

router.patch('/api/user/:id', function(req, res, next) {
  body = req.body
  delete body.editable; 
  User.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), body, {new: true}, function(err, newUser) {
    if (err) throw err; 
    delete newUser.password; 
    res.status(200).json(newUser); 
  })
});

module.exports = router;
