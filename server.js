const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');
const db = require('./config/db');

const app = express();

// Connect to MongoDB
mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use(authRoutes);
app.use(employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
