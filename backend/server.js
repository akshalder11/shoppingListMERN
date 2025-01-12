import express from "express";
import mongoose from "mongoose";
import router from "./routes/productRoutes.js";

const app = express();
const port = 3000;

//Middleware
app.use(express.json());

//Database connection
mongoose
  .connect("mongodb://localhost:27017/ListDB", {})
  .then(() => console.log("DB ONLINE!!!"))
  .catch((err) => console.error("UNABLE TO CONNECT DB", err));

//Routes
app.use("/v1/", router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
