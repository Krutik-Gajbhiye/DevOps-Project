const express = require('express');
const router = express.Router();

// Mock database for storing student progress
dlet studentProgress = {};

// Route to get student progress
router.get('/progress/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    const progress = studentProgress[studentId];
    if (progress) {
        res.status(200).json({ studentId, progress });
    } else {
        res.status(404).json({ error: 'Progress not found' });
    }
});

// Route to update student progress
router.put('/progress/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    const { progress } = req.body;
    if (!progress) {
        return res.status(400).json({ error: 'Progress data is required' });
    }
    studentProgress[studentId] = progress;
    res.status(200).json({ studentId, progress });
});

module.exports = router;