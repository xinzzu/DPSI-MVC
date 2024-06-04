const { User } = require ('../models');

const register = async (req, res) => {
    try{
        const {username, password, role, customerID } = req.body 
        const newUser = await User.create({username, password, role, profilePic, customerID });
        res.status(201).json(newUser);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Validate username and password presence (improve security)
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
      }
  
      // Find user by username (case-insensitive for flexibility)
      const user = await User.findOne({ username: { $regex: username, $options: 'i' } });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password.' });
      }
  
      // Compare password using bcrypt (ensure secure hashing)
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid username or password.' });
      }
  
      // Generate a secure JWT token (consider using a library likejsonwebtoken)
      const token = /* Create JWT token here using user data */
  
      res.status(200).json({ message: 'Login successful!', token });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: 'Internal server error.' });
    }
  };
  
  module.exports = { register, login };