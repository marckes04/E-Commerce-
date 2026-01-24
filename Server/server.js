require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

const app = express();
const PORT = process.env.PORT || 5000;

// 1. VERIFICACIÓN Y CONEXIÓN A MONGOOSE
// Asegúrate de que en tu archivo .env tengas: MONGO_URI=mongodb://...
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB con éxito"))
  .catch((err) => {
    console.error("❌ Error crítico: No se pudo conectar a MongoDB:", err.message);
    process.exit(1); // Detiene el servidor si la DB no conecta
  });

// 2. MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:5173", // URL de tu frontend
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true, // ESTO DEBE SER TRUE
  })
);

app.use(cookieParser());
app.use(express.json());

// 3. RUTAS
// Ahora http://localhost:5000/api/auth/login funcionará perfectamente
app.use("/api/auth", authRouter);

// 4. INICIO DEL SERVIDOR
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});