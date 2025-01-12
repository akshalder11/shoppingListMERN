import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import router from "./routes/productRoutes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//Database connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("DB ONLINE!!!"))
  .catch((err) => console.error("UNABLE TO CONNECT DB", err));

//Routes
app.use("/v1/", router);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
