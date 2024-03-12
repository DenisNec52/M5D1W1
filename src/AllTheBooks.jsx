import React from 'react';
import Card from './card'; // Adjust the path and file extension as needed
import "./AllTheBooks.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Book() {
  const booksData = require('./books/fantasy.json'); // Import the array of books from the JSON file

  return (
    <Row className="book  libri justify-content-md-center">
      {booksData.map((book, index) => (
        <Col md="auto">
        <Card
          key={index}
          title={book.title}
          img={book.img}
          price={book.price}
          category={book.category}
        />
        </Col>
      ))}
    </Row>
  );
}

export default Book;