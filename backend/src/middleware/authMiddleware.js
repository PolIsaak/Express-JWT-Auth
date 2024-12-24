const jwt = require('jsonwebtoken');

// Authentication
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token Required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if(err) return res.status(403).json({ message: 'Invalid Token'});
    req.user = user;
    next();
  });
}

// Authorization
const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access Denied'})
    }
    next();
  };
};

module.exports = { authenticate, authorize };