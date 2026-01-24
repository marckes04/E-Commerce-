const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const registerUser = async (req, res) => {
    const { userName, email, password, role } = req.body;
    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists!",
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
        res.status(200).json({ success: true, message: "Registered successfully!" });
    } catch (e) {
        res.status(500).json({ success: false, message: 'Error in registration' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) return res.json({ success: false, message: "User doesn't exist" });

        const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
        if (!checkPasswordMatch) return res.json({ success: false, message: "Incorrect password!" });

        const token = jwt.sign(
            { id: checkUser._id, role: checkUser.role, email: checkUser.email, userName: checkUser.userName },
            process.env.CLIENT_SECRET_KEY || 'CLIENT_SECRET_KEY',
            { expiresIn: "60m" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // Cambiar a true si usas HTTPS
            sameSite: "Lax",
            maxAge: 3600000 
        }).status(200).json({
            success: true,
            message: "Logged in",
            user: {
                id: checkUser._id,
                role: checkUser.role,
                email: checkUser.email,
                userName: checkUser.userName,
            }
        });
    } catch (e) {
        res.status(500).json({ success: false, message: 'Error' });
    }
};

// ESTO ES LO QUE RESPONDE AL F5
const checkAuth = async (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: "Authenticated user!",
        user,
    });
};

module.exports = { registerUser, loginUser, checkAuth };