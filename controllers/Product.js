//import product model
const Product = require("../models/Product");

//define route handler

exports.createProduct = async (req, res) => {
  try {
    //extract data from body
    const { title, description, category, price, cuttedPrice, stock } =
      req.body;
    if (
      !title ||
      !description ||
      !category ||
      !price ||
      !cuttedPrice ||
      !stock
    ) {
      res.status(404).json({
        success: false,
        message: "Fill all fields first",
      });
    }

    const product = await Product.create(req.body);

    res.status(200).json({
      success: true,
      product,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,

      message: err.message,
    });
  }
};
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.ProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
