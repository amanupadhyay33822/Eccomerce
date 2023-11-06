const dbConnect = require("./config/database");
const Product = require("./models/Product");
const data = require("./product.json");
require("dotenv").config();


//for injecting data from product.json file to database
const start = async () => {
    try {
        await dbConnect();
        await Product.create(data);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
}
start();

//run node productDb.js command to inject data from product.json file to database
