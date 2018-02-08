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
    imageUrlPath: "images/profile/profile.jpg",
    unreadChats: 0,
    unreadConnections: 0
  });

  user.save(function(err, user) {
    if (err) throw err;  
    delete user.password;

    // generate token and store in cookie
    let token = auth.generateToken(user); 
    req.session.token = token; 

    return res.json(user);  
  });

}); 

// ------------------ USER LOGIN -------------------

router.post('/api/login', function(req, res, next) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) throw err;
    if (!user) return res.status(404).send('User does not exist. Please try again'); 
    if (user.checkPassword(req.body.password)) { 
      user.password = undefined; 

      // generate token and store in cookie 
      let token = auth.generateToken(user);
      req.session.token = token; 

      return res.json(user);  
    } else {
      return res.send('Invalid password. Please try again.'); 
    }
  })
});

// ------------------ USER LOGOUT ------------------- 

router.post('/api/logout', function(req, res, next) {
  req.session.reset(); 
  return res.redirect('/'); 
});

// ------------------- UPDATE USER --------------------

router.patch('/api/user/:id', auth.requireToken, function(req, res, next) {
  let body = req.body;   
  if (body.image) { 
    let path = saveProfileImage(body.image, req.params.id); 
    
    // add meaningless query parameter in order for react to update the image
    body.imageUrlPath = path; 
  } 
  delete body.editable; 
  User.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), body, {new: true}, function(err, newUser) {
    if (err) throw err; 
    delete newUser.password; 
    res.status(200).json(newUser); 
  });
});

// ------------------- SIMILAR TO USER --------------------

router.get('/api/similar/:id', auth.requireToken, function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    User.find({ tags: { $in: user.tags }, _id: { $nin: [user._id] } })
      .select('-password')
      .then(function(data) {
        console.log(data);
        res.json(data); 
      })
      .catch(function(err) {
        console.log(err); 
      })
  });
});

// ---------------- HELPER FUNCTIONS ------------------

let saveProfileImage = (image, id) => {
  let path = `${__dirname}/../public/images/profile/${id}.png`; 
  let buffer = new Buffer(image, 'base64');

  if(fs.existsSync(path)) {
    fs.unlinkSync(path); 
  }

  fs.writeFileSync(path, buffer); 
  return `/images/profile/${id}.png?key=${new Date()}`;
}

module.exports = router; 
