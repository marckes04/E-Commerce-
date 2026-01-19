const express = require('express');
const {registerUser, loginUser} = 
require('../../controllers/auth/Auth-controller')

const router = express.Router();

router.post('/register', registerUser);


module.exports = router;