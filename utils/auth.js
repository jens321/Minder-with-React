let jwt = require('jsonwebtoken');

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
}