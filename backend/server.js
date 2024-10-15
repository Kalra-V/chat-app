import express from "express";
import dotenv from "dotenv";
const app = express()

import authRoutes from "./routes/auth.routes.js"

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.send("Server 5001 ready")
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));