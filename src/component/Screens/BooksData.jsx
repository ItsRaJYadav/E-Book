import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const BooksData = ({ books }) => {
    console.log(books)
    const [show, setShow] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            {books.map((book) => {
                let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                let amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;

                if (thumbnail !== undefined && amount !== undefined) {
                    return (
                        <div className="card" onClick={() => handleBookClick(book)}>
                            <div className="bottom">
                                <h3 className="title">{book.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                                <p className="amount">{book.volumeInfo.authors}</p>
                                <p className="amount">{book.volumeInfo.publishedDate}</p>
                            </div>
                        </div>
                    );
                }
                return null; 
            })}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedBook && selectedBook.volumeInfo.title}</Modal.Title>
                    {/* <Link to="/" className="btn btn-secondary">
                        Back
                    </Link> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            {selectedBook && selectedBook.volumeInfo.imageLinks && (
                                <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt={selectedBook.volumeInfo.title} className="img-fluid w-100 mb-3" />
                            )}
                            {selectedBook && selectedBook.volumeInfo.previewLink && (
                                <a href={selectedBook.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Read More
                                </a>
                            )}
                        </div>
                        <div className="col-12 col-md-6">
                            <h3>{selectedBook && selectedBook.volumeInfo.title}</h3>
                            <h5>by {selectedBook && selectedBook.volumeInfo.authors}</h5>
                            <hr />
                            <p className="mt-3">{selectedBook && selectedBook.volumeInfo.description}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>



        </>
    );
};

export default BooksData;
