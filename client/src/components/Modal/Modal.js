
import Modal from 'react-bootstrap/Modal'

const ProductModal = ({ product, showModal, handleClickModal }) => {
  return (
    <Modal show={showModal}>
      <Modal.Header className='font-weight-bold'>{product.product_name}</Modal.Header>
      <Modal.Body>
        <b>Barcode:</b> {product.barcode} <br />
        <b>Status:</b> {product.status} <br />
        <b>Packaging:</b> {product.packaging ? product.packaging.join(', ') : '-'} <br />
        <b>Brands:</b> {product.brands ? product.brands.join(', ') : '-'} <br />
        <b>Categories:</b> {product.categories ? product.categories.join(', ') : '-'} <br />
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-danger' type='button' onClick={handleClickModal}>
          Fechar
        </button>
      </Modal.Footer>
    </Modal>
  )
}
export default ProductModal
