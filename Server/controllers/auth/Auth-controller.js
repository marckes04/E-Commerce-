// 1. FIXED: We name the variable 'bcrypt' (no extra 'y')
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// Register user
const registerUser = async (req, res) => {
    const { userName, email, password, role } = req.body;
    try {
        // 2. Now this works because the name matches line 1
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
            message: "User registered successfully",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred while registering the user',
        });
    }
}

// Login user
const login = async (req, res) => {
    try {
        // We will add login logic later
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