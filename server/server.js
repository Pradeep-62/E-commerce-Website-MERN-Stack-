import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRouts from "./routes/categoryRouts.js"
import productRouts from "./routes/productRoutes.js"
import cors from "cors";
import path from 'path'

//configure env
dotenv.config();

//databse config
connectDB();

// rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category",categoryRouts);
app.use("/api/v1/product",productRouts);

//rest API
app.get("/", (req, res) => {
  res.send("<h1>welcome to my project</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.bgCyan.white);
});
