let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/user.js');
let Chat = require('../models/chat.js');
let auth = require('../utils/auth'); 
let fs = require('fs'); 

// ------------------ USER SIGNUP -------------------

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

// ------------------- UPDATE USER --------------------

router.patch('/api/user/:id', function(req, res, next) {
  let body = req.body;   
  if (body.image) { 
    let path = saveProfileImage(body.image, req.params.id); 
    
    // add meaningless query parameter in order for react to update the image
    body.imageUrlPath = path; 
    res.json(body); 
  } else {
    delete body.editable; 
    User.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), body, {new: true}, function(err, newUser) {
      if (err) throw err; 
      delete newUser.password; 
      res.status(200).json(newUser); 
    });
  } 
});

// ---------------- HELPER FUNCTIONS ------------------

let saveProfileImage = (image, id) => {
  let path = `${__dirname}/../public/images/profile/${id}.png`; 
  let buffer = new Buffer(image, 'base64');

  if(fs.existsSync(path)) {
    fs.unlinkSync(path); 
  }

  fs.writeFileSync(path, buffer); 
  return `/images/profile/${req.params.id}.png?key=${new Date()}`;; 
}

module.exports = router;
