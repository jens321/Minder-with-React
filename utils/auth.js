let jwt = require('jsonwebtoken');
require('dotenv').load(); 

const generateToken = (user) => {
    let newUser = {
        name: user.name,
        email: user.email,
        id: user._id,
        description: user.description,
        imageUrlPath: user.imageUrlPath,
        location: user.location,
        tags: user.tags,
        education: user.education,
        connections: user.connections,
        pending: user.pending,
        invitations: user.invitations,
        unreadChats: user.unreadChats,
        unreadConnections: user.unreadConnections
    }

    let token = jwt.sign(newUser, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
    });
    return token; 
}

const requireToken = (req, res, next) => {
    if (req.session && req.session.token) {
      let token = req.session.token;
      jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Token invalid"
          });
        } else {
          // req.user = user;
          next(); 
        }
      }); 
    }
  }

  module.exports = {
    generateToken: generateToken,
    requireToken: requireToken
  }