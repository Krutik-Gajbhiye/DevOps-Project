const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Mock database
let users = [];

// Register endpoint
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send({ message: 'User registered successfully!' });
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).send({ message: 'User not found!' });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).send({ message: 'Invalid password!' });
    const token = jwt.sign({ username: user.username }, 'secretKey', { expiresIn: '1h' });
    res.send({ token });
});

// Get user profile endpoint
router.get('/profile', (req, res) => {
    const token = req.headers['x-auth-token'];
    if (!token) return res.status(403).send({ message: 'Access denied!' });
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) return res.status(403).send({ message: 'Invalid token!' });
        const user = users.find(u => u.username === decoded.username);
        res.send(user);
    });
});

module.exports = router;