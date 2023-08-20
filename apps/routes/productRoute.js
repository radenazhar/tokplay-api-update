const express = require("express");
const productController = require('../controller/productController')
const router = express.Router();

router
  .route("/:videoId")
  .get(productController.getProduct)
  .post(productController.createProduct);

module.exports = router;
