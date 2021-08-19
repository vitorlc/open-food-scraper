import './Card.css'

const Card = ({ product, handleClick }) => {
  return (
    <>
      <div className='card mb-5'>
        <img src={product.image_url} className='card-img-top' alt='...' />
        <div className='card-body text-center'>
          <h5 className='card-title'>{product.product_name}</h5>
          <button className='btn btn-primary' onClick={() => handleClick(product)}>Detalhes</button>
        </div>
      </div>
    </>
  )
}

export default Card
