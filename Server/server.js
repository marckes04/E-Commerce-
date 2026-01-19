require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const { registerUser } = require("./controllers/auth/Auth-controller");

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión estándar (ahora funcionará porque el enlace es perfecto)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ ¡CONECTADO A LA BASE DE DATOS!"))
    .catch(err => {
        console.log("❌ Error de conexión:", err.message);
    });

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "cache-control", "Expires", "Pragma"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);



app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});