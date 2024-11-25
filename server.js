import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import msgRoutes from "./routes/msgRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import {app,server} from "./socket/socket.js"

import cors from "cors";

// const app=express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: "*", // Allow all origins (change this in production)
      optionsSuccessStatus: 200,
    })
  );
app.use("/api/auth",authRoutes);
app.use("/api/messages",msgRoutes);
app.use("/api/users",userRoutes);


server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`
)});