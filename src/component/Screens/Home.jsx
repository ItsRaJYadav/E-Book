// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
// import axios from 'axios';
// import BooksData from './BooksData';
// import Pagination from './Pagination';

// function Home() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [books, setBooks] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         if (searchTerm) {
//             setIsLoading(true);
//             axios
//                 .get(
//                     `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`
//                 )
//                 .then((response) => {
//                     setBooks(response.data.items);
//                     setCurrentPage(1);
//                     setIsLoading(false);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                     setIsLoading(false);
//                 });
//         }
//     }, [searchTerm]);

//     // Handle search bar input change
//     const handleSearchInputChange = (event) => {
//         setSearchTerm(event.target.value);
//     };


//     // Pagination
//     const booksPerPage = 10; // Change this to 10
   
//     const indexOfLastBook = currentPage * booksPerPage;
//     const indexOfFirstBook = indexOfLastBook - booksPerPage;
//     const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook > books.length ? books.length : indexOfLastBook);
    

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return (
//         <Container>
//             <h1>Welcome to my book search app</h1>
//             <Row>
//                 <Col className='mt-2 mb-4'>
//                     <Form.Group>
//                         <Form.Control
//                             type="text"
//                             placeholder="Search books by name or Author"
//                             value={searchTerm}
//                             onChange={handleSearchInputChange}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <div className="container"></div>
//             {isLoading ? (
//                 <Spinner animation="border" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </Spinner>
//             ) : (
//                 <>
//                     {books.length > 0 ? (
//                         <>
//                             <BooksData books={currentBooks} />
//                             <Pagination
//                                 booksPerPage={booksPerPage}
//                                 totalBooks={books.length}
//                                 paginate={paginate}
//                                 currentPage={currentPage}
//                             />
//                         </>
//                     ) : (
//                         <p>No results found.</p>
//                     )}
//                 </>
//             )}
//         </Container>
//     );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import BooksData from './BooksData';
import Pagination from './Pagination';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40&key=AIzaSyDEECZ_DJ0TnQt8SnKxkGvUUaoFXf7PJbc`)

        .then((response) => {
          setBooks(response.data.items);
          setCurrentPage(1);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [searchTerm]);

  // Handle search bar input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Pagination
  const booksPerPage = 9; // Change this to 9 or 11
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <h1>Welcome to my book search app</h1>
      <Row>
        <Col className='mt-2 mb-4'>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search books by name or Author"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="container"></div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <BooksData books={currentBooks} />
          {currentBooks.length === 0 && (
            <p >No books found for the current page please enter correct keywords</p>
          )}
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={books.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      )}
    </Container>
  );
}

export default Home;
