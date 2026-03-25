const express = require('express');
const router = express.Router();

// Mock data store for feedback
let feedbacks = [];

// Get all feedback
router.get('/feedback', (req, res) => {
    res.json(feedbacks);
});

// Get feedback by teacher ID
router.get('/feedback/teacher/:id', (req, res) => {
    const teacherId = req.params.id;
    const teacherFeedback = feedbacks.filter(f => f.teacherId === teacherId);
    res.json(teacherFeedback);
});

// Submit feedback
router.post('/feedback', (req, res) => {
    const newFeedback = req.body;
    feedbacks.push(newFeedback);
    res.status(201).json(newFeedback);
});

// Update feedback
router.put('/feedback/:id', (req, res) => {
    const feedbackId = req.params.id;
    const index = feedbacks.findIndex(f => f.id === feedbackId);
    if (index >= 0) {
        feedbacks[index] = { ...feedbacks[index], ...req.body };
        res.json(feedbacks[index]);
    } else {
        res.status(404).send('Feedback not found');
    }
});

module.exports = router;
