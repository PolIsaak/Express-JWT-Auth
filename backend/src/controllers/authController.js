const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

//User Sign Up
const signup = async(req, res) => {
  const {name, email, password, role} = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)',
      [name, email, hashedPassword, role || 'employee']
    );
    res.status(201).json({message: 'User registered successfully'});
  } catch (err) {
    res.status(500).json({message: 'Error registering user'});
  }
}

//Log in
const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({error: "User not found"});
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({error: "Invalid Credentials"});
    }

    const token = jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {
      expiresIn: '1H',
    });

    res.json({token});
  } catch (err) {
    res.status(500).json({error: 'Error during login'});
  }
}

module.exports = {signup, login};