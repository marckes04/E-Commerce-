const express = require("express");
const router = express.Router();

// 1. IMPORTA LOS CONTROLADORES (Asegúrate de que la ruta al archivo sea correcta)
const { 
    registerUser, 
    loginUser, 
    checkAuth 
} = require("../../controllers/auth/auth-controller");

// 2. IMPORTA EL MIDDLEWARE (El guardia que lee la cookie)
const authMiddleware = require("../../middleware/auth-middleware");

// 3. DEFINE LAS RUTAS
router.post("/register", registerUser);
router.post("/login", loginUser);

// Esta es la ruta que evita que el F5 te eche
router.get("/check-auth", authMiddleware, checkAuth);

module.exports = router;