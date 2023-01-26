const Product = require("../models/product");

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json({ msg: "Product Created" });
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  res.json({
    msg: "Mensaje enviado",
  });
};

const getProduct = async (req, res) => {};

const updateProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
