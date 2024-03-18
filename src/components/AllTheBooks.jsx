import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import MyCard from './MyCard';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

const AllTheBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleReturnClick = () => {
    setSelectedBook(null);
  };

  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

  return (
    <Container fluid>
      {!selectedBook && (
        <Row className="g-2">
          {allBooks.map((book) => (
            <Col xs={12} md={3} key={book.asin} onClick={() => handleBookClick(book)}>
              <MyCard
                img={book.img}
                title={book.title}
                price={book.price}
                category={book.category}
              />
            </Col>
          ))}
        </Row>
      )}
      {selectedBook && (
        <>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <MyCard
              img={selectedBook.img}
              title={selectedBook.title}
              price={selectedBook.price}
              category={selectedBook.category}
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button variant="secondary" onClick={handleReturnClick}>Torna alla lista dei libri</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default AllTheBooks;
