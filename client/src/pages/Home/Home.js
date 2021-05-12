import React, { useEffect, useState } from 'react'

import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'
import Pagination from '../../components/Pagination/Pagination'

import productService from '../../services/product'

const Home = () => {
  const [products, setProducts] = useState([])
  const [productsCount, setProductsCount] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const [currentPage, setCurrentPage] = useState(0)
  const [perPage, setPerPage] = useState(10)
  
  useEffect(() => {
    productService.findAll().then(response => {
      setProducts(response.data.products)
      setProductsCount(response.data.count)
      setPerPage(10)
    })
  }, [])

  useEffect(() => {
    productService.findAll({ page: currentPage, limit: perPage }).then(response => {
      setProducts(response.data.products)
      setProductsCount(response.data.count)
    })
  }, [currentPage, perPage])

  const handleClick = (product) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const handleClickPagination = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="container mt-5">
        <div className="header">
          <h1 className="text-primary font-weight-bold">Product List</h1>
          <h6>Fullstack Challenge</h6>
          <br />
        </div>
        <div className="row justify-content-end">
          <div className="col-sm-3 input-group">
            <input type="text" className="form-control" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Nome do Produto" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <span className="fa fa-search"></span>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <Modal product={selectedProduct} showModal={showModal} handleClickModal={() => setShowModal(false)} />
          {
            products
              .filter(product => product.product_name.includes(searchQuery))
              .map(product => (
                <div className="col-sm">
                  <Card key={product.code} product={product} handleClick={handleClick} />
                </div>
              ))
          }

        </div>
        <br />
        <Pagination productsCount={productsCount} perPage={perPage} handleClickPagination={handleClickPagination}/>
      </div>
    </>
  )
}

export default Home


