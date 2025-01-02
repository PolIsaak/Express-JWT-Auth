const express = require('express');
const authRoutes = require('./routes/authRoutes');
const protected = require('./routes/protectedRoutes');

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/u', protected);

module.exports = app;