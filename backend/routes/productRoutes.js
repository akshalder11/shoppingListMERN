import express from "express";
import {
  createProduct,
  readProduct,
  readAllProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

router.post("/create", createProduct);
router.post("/read", readProduct);
router.post("/readAll", readAllProduct);
router.post("/update", updateProduct);
router.post("/delete", deleteProduct);
router.post("/deleteAll", deleteAllProducts);

export default router;
