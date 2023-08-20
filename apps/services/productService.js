const Products = require('../models/productModel');

exports.getProduct = async (videoId) => {
  const data = await Products.find({ videoThumbnailId: videoId });
  return data;
};

exports.createProduct = async (body, videoId) => {
  body.videoThumbnailId = videoId;
  const newProduct = await Products.create(body);
  return newProduct;
};
