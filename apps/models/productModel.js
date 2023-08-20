const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "product must have a title"],
    },
    price: {
      type: Number,
      required: [true, "product must have a price"],
    },
    imageUrl: {
      type: String,
      required: [true, "product must have a imageUrl"],
    },
    linkProduct: {
      type: String,
      required: [true, "product must have a linkProduct"],
    },
    videoThumbnailId: {
      type: String,
      required: true,
    },
  });
  
  const ProductModel = mongoose.model('Product', productSchema);

  module.exports = ProductModel;