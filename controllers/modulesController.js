const express = require('express');
const router = express.Router();

// Mock database for modules
let modules = [
    { id: 1, name: 'Module 1', class: 'Class A', completed: false },
    { id: 2, name: 'Module 2', class: 'Class B', completed: false }
];

// Get all modules
router.get('/', (req, res) => {
    res.json(modules);
});

// Get module by ID
router.get('/:id', (req, res) => {
    const module = modules.find(m => m.id === parseInt(req.params.id));
    if (!module) return res.status(404).send('Module not found.');
    res.json(module);
});

// Get modules by class
router.get('/class/:className', (req, res) => {
    const filteredModules = modules.filter(m => m.class === req.params.className);
    res.json(filteredModules);
});

// Mark module as complete
router.patch('/:id/complete', (req, res) => {
    const module = modules.find(m => m.id === parseInt(req.params.id));
    if (!module) return res.status(404).send('Module not found.');
    module.completed = true;
    res.json(module);
});

module.exports = router;