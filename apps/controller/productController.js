const productService = require('../services/productService');

exports.getProduct = async (req, res) => {
    try {
      const data = await productService.getProduct(req.params.videoId);
      res.status(200).json({
        status: "success",
        products : data,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    }
  };
  
  exports.createProduct = async (req, res) => {
    try {
      const data = await productService.createProduct(
        req.body,
        req.params.videoId
      );
      res.status(200).json({
        status: "success",
        products : data
      });
    } catch (err) {
      res.status(404).json({
        status: "error",
        message: err.message,
      });
    }
  };