const Product = require("../models/Product");
exports.createProduct = async (req, res) => {
    const { name, price , description, image, countInStock } = req.body;
    const product = new Product({
        name,
        price,
        description,
        image,
        countInStock
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};
exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.countInStock = req.body.countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};