// backend/middleware/auth-middleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token; // El nombre que le pusiste en el login

  if (!token) return res.status(401).json({ success: false, message: "No token" });

  try {
    const decoded = jwt.verify(token, "CLIENT_SECRET_KEY"); // Tu clave secreta
    req.user = decoded; // Guardamos los datos para usarlos en el controlador
    next(); // "Todo bien, puedes pasar a la siguiente función"
  } catch (e) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

module.exports = authMiddleware;