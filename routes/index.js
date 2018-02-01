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

    let token = auth.generateToken(user); 
    res.json({
      user: user,
      token: token
    }); 
  });

}); 

// ------------------ USER LOGIN -------------------

router.post('/api/login', function(req, res, next) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) throw err;
    if (!user) return res.send('User does not exist. Please try again'); 
    if (user.checkPassword(req.body.password)) { 
      user.password = undefined; 

      let token = auth.generateToken(user);
      return res.json({
        user: user,
        token: token
      }); 
    } else {
      return res.send('Invalid password. Please try again.'); 
    }
  })
});

app.use(function(req, res, next) {
  let token = req.headers['authorization'];
  if (!token) return next();

  token = token.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Token invalid"
      });
    } else {
      req.user = user;
      next(); 
    }
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

// ------------------- SIMILAR TO USER --------------------

router.get('/api/similar/:id', function(req, res, next) {
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
  return `/images/profile/${id}.png?key=${new Date()}`;; 
}

module.exports = router;
