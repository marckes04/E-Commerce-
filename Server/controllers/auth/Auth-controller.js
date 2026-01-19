const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// Register user
const registerUser = async(req, res) => {
    const{userName, email, password, role}=req.body;
    try{
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password: hashPassword
        })
        await newUser.save();
        res.status(200).json({
            success: true,
            message:"User registered successfully",
        })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred while registering the user',
        });
    }
}

    // Login user

    const login = async(req, res) => {
        try{

        }catch(e)
        {
            console.log(e);
            res.status(500).json({
                success: false,
                message: 'Some error occurred while logging in the user',
            });
        }
    }


    //logout

    //auth middleware

module.exports = {
    registerUser,
    login,
}