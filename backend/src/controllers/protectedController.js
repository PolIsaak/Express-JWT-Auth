const getAdminDashboard = (req, res) => {
  res.json({message: "Welcome to the Admin Dashboard"});
};

const getEmployeeDashboard = (req, res) => {
  res.json({message: "Welcome to the Employee Dashboard"});
};

module.exports = { getAdminDashboard, getEmployeeDashboard };