import React from 'react';

function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalBooks / props.booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='d-flex justify-content-center mb-5 mt-3'>
      <ul className='pagination'>
        <li className={`page-item ${props.currentPage === 1 ? 'disabled' : ''}`}>
          <a onClick={() => props.paginate(props.currentPage - 1)} href='#/' className='page-link' aria-label='Previous'>
            <span aria-hidden='true'>Prev &laquo;</span>
          </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${props.currentPage === number ? 'active' : ''}`}>
            <a onClick={() => props.paginate(number)} href='#/' className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li className={`page-item ${props.currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <a onClick={() => props.paginate(props.currentPage + 1)} href='#/' className='page-link' aria-label='Next'>
            <span aria-hidden='true'>Next &raquo; </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
