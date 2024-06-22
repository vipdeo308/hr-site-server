const express = require('express');
const { getEmployees, addEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/api/employees', auth, getEmployees);
router.post('/api/addEmployee', auth, addEmployee);
router.put('/api/updateEmployee/:id', auth, updateEmployee);
router.delete('/api/deleteEmployee/:id', auth, deleteEmployee);

module.exports = router;
