import React from "react";
import { FaBook, FaSearch, FaList } from "react-icons/fa";
import { AiOutlineRead } from "react-icons/ai";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <div className="about-header text-center">
            <h1>Welcome to our e-book web app!</h1>
            <p className="lead">
              We are passionate about books and we believe that everyone should have access to a vast library of knowledge and entertainment. Our app uses the Google Books API and the Open Library API to display search results for your favorite books.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <FaSearch className="feature-icon mb-3" />
              <h2>Search for any book</h2>
              <p>Search for any book by title, author, or subject. You can also search for books by entering keywords or phrases.</p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <FaList className="feature-icon mb-3" />
              <h2>Discover new books</h2>
              <p>Explore curated lists of popular subjects to discover new and interesting books and many more.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <FaBook className="feature-icon mb-3" />
              <h2>View book details</h2>
              <p>View book covers, descriptions, author information, and reviews for any books of your choice.</p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <AiOutlineRead className="feature-icon mb-3" />
              <h2>Organize your reading</h2>
              <p>Add books to your reading list or mark them as read to keep track of your reading progress.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <div className="about-image">
            <Image src='https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=900&t=st=1681554061~exp=1681554661~hmac=633fad7a31a9ed8c0f766bbf7db831676c5868c7cbb5ad62f09f012f09562dc6' alt="bookshelf" fluid />
          </div>
        </Col>
        <Col>
          <div className="about-image">
            <Image src='https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149331952.jpg?w=996&t=st=1681554494~exp=1681555094~hmac=fd17eda0707ffb3fcbb33a39e26fae9c1f82e33f0fb628560a9de2128f6211fd' alt="bookshelf" fluid />
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="mb-5" >
          <div className="about-footer text-center">
            <p>We believe that reading should be accessible to everyone, which is why our app is free to use. We hope that our app will inspire you to read more and discover new books. Happy reading!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
