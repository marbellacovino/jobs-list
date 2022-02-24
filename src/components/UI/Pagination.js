import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  return (
//TODO: add functionality for next and previous buttons
    <nav>
      <ul className="pagination pagination-lg justify-content-center">
        {/* <li className="page-item"><a class="page-link" href="#">Previous</a></li> */}
        {pages.map(num => (
          <li className="page-item"><button class="page-link" key={num} onClick={() => handleClick(num)}>{num}</button></li>
        ))}
        {/* <li className="page-item"><a class="page-link" href="#">Next</a></li> */}
      </ul>
    </nav>

  )
}
export default Pagination