const Product = require('../models/product')

module.exports = {
  async find (req, res) {
    try {
      const product = await Product.findOne({ code: req.params.code })
      return res.status(200).send(product)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, message: 'Não foi possível encontrar o produto' })
    }
  },
  async findAll (req, res) {
    try {
      const page = parseInt(req.query.page) || 0
      const limit = parseInt(req.query.limit) || 10
      const data = {}
      data.products = await Product.find().skip(limit * page).limit(limit)
      data.count = await Product.count()
      return res.status(200).send(data)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, message: 'Não foi possível encontrar os produtos' })
    }
  }
}
