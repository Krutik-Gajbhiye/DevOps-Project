// Authentication Middleware

const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ message: 'Access Denied' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send({ message: 'Invalid Token' });
    }
};

module.exports = authenticate;