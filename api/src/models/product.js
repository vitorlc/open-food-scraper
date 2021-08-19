const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  barcode: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'imported',
    enum: ['draft', 'imported']
  },
  imported_t: {
    type: Date,
    default: Date.now(),
    required: true
  },
  url: {
    type: String,
    required: true
  },
  quantity: {
    type: String
  },
  categories: [{
    type: String,
    required: true
  }],
  packaging: [{
    type: String
  }],
  brands: [{
    type: String
  }],
  image_url: {
    type: String
  }
})

module.exports = mongoose.model('Product', ProductSchema)
