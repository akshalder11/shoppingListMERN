import Product from "../models/productModels.js";

export const createProduct = async (req, res) => {
  console.log(`Products - CREATE called`);
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//READ PRODUCT
export const readProduct = async (req, res) => {
  console.log(`Products - READ called`);
  try {
    const { uniqueID } = req.body; // uniqueID is expected in the body
    const product = await Product.findOne({ uniqueID });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//READ ALL PRODUCT
export const readAllProduct = async (req, res) => {
  console.log(`Products - READ ALL called`);
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  console.log(`Products - UPDATE called`);
  try {
    const {
      uniqueID,
      itemName,
      itemImage,
      itemPrice,
      markAsDone,
      itemQuantity,
      unit,
    } = req.body;

    // Find the product to update
    const product = await Product.findOne({ uniqueID });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Update the product's fields
    product.itemName = itemName || product.itemName;
    product.itemImage = itemImage || product.itemImage;
    product.itemPrice = itemPrice || product.itemPrice;
    product.markAsDone = markAsDone || product.markAsDone;
    product.itemQuantity = itemQuantity || product.itemQuantity;
    product.unit = unit || product.unit;

    // Save the updated product
    await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  console.log(`Products - DELETE called`);
  try {
    const { uniqueID } = req.body; // uniqueID is expected in the body

    // Find and delete the product based on uniqueID
    const product = await Product.findOneAndDelete({ uniqueID });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//DELETE ALL PRODUCTS
export const deleteAllProducts = async (req, res) => {
  console.log(`Products - DELETE ALL called`);
  try {
    // Delete all products from the database
    const result = await Product.deleteMany({});

    // Check if any products were deleted
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No products found to delete" });
    }

    res
      .status(200)
      .json({ success: true, message: "All products deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};