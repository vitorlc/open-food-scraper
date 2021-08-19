const Product = require('../models/product')

module.exports = async (productData) => {
  try {
    const product = new Product(productData)
    await product.save()
  } catch (e) {
    console.error(e)
  }
}
