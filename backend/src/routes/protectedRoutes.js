const express = require('express');

const { getAdminDashboard, getEmployeeDashboard } = require('../controllers/protectedController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/admin', authenticate, authorize(['admin']), getAdminDashboard);
router.get('/employee', authenticate, authorize(['employee']), getEmployeeDashboard);

module.exports = router;