const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  jobRole: { type: String, required: true },
  department: { type: String, required: true }
});

module.exports = mongoose.model('employees', EmployeeSchema);
