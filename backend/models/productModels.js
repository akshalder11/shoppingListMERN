import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    itemName: { type: String, required: true }, // Name of the item
    itemImage: { type: String, required: false }, // URL for the image, optional
    itemPrice: { type: Number, required: false }, // Price of the item
    markAsDone: { type: String, enum: ['Y', 'N'], default: 'N' }, // Mark item as done (Y/N)
    uniqueID: { type: String, required: true, unique: true }, // Unique identifier for the item
    itemQuantity: { type: Number, required: true }, // Quantity of the item
    unit: { type: String, required: true } // Unit of the item (e.g., kg, g, pcs)
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    collection: 'Products' // Collection name in the database
});

const Product = mongoose.model('Product', productSchema);

export default Product;
