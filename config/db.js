'use strict';

const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connection established'))
    .catch(err => console.error('Database connection error:', err));

module.exports = mongoose;