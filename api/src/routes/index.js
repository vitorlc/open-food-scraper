const { Router } = require('express')
const routes = Router()

const productController = require('../controllers/productController')

routes.get('/', (req, res) => {
  return res.status(200).send({ message: 'Fullstack Challenge 20201026' })
})

// Product
routes.get('/products/:code', productController.find)
routes.get('/products', productController.findAll)

module.exports = routes