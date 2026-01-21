const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// Register user
const registerUser = async (req, res) => {
    const { userName, email, password, role } = req.body;
    
    try {
        const checkUser = await User.findOne({ email });
        
        // Si el usuario ya existe
        if (checkUser) {
            return res.status(400).json({ // Cambiado a 400 para indicar error de cliente
                success: false,
                message: "User with this email already exists. Please try another.",
            });
        }

        const hashPassword = await bcrypt.hash(password, 12);
        
        const newUser = new User({
            userName,
            email,
            password: hashPassword,
            role: role || 'user'
        });

        await newUser.save();
        
        res.status(200).json({
            success: true,
            message: "User registered successfully!",
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'An error occurred during registration.',
        });
    }
}

// Login user
const login = async (req, res) => {

        const { email, password } = req.body;
    try {
        // We will add login logic late
        const checkUser = await User.findOne({ email });
        if(!checkUser) return res.json({
            success: false,
            message: "User does not exist with this email, please register first.",
        });
    
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred while logging in the user',
        });
    }
}

module.exports = {
    registerUser,
    login,
}