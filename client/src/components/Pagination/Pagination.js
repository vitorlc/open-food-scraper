const Pagination = ({ perPage, productsCount, handleClickPagination }) => {
  const pageNumbers = []

  for (let i = 0; i <= Math.ceil(productsCount / perPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          {
            pageNumbers.map(number => (
              <li key={number} className="page-item">
                <button onClick={()=> handleClickPagination(number)} className="page-link">{number}</button>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}
export default Pagination