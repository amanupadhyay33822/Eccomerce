const express  = require("express");
const router = express.Router();

//import controller
const { createProduct, getProducts, ProductById} = require("../controllers/Product");

//define APi routes
router.post("/createProduct", createProduct);
router.get("/getAllProduct", getProducts);
router.get("/getProduct/:id", ProductById);

module.exports = router;