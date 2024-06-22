const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.addEmployee = async (req, res) => {
  const { name, contact, jobRole, department } = req.body;
  try {
    const newEmployee = new Employee({ name, contact, jobRole, department });
    const employee = await newEmployee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateEmployee = async (req, res) => {
  const { name, contact, jobRole, department } = req.body;
  try {
    let employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });

    employee = await Employee.findByIdAndUpdate(req.params.id, { $set: { name, contact, jobRole, department } }, { new: true });
    res.json(employee);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    let employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });

    await Employee.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Employee removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
