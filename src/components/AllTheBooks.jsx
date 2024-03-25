import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import SingleBook from './SingleBook';

const AllTheBooks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    const filteredBooks = allBooks.filter((book) =>
      book.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredBooks);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <Form onSubmit={handleSearchSubmit}>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        {searchQuery === '' ? (
          allBooks.map((book) => (
            <Col xs={12} md={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))
        ) : (
          searchResults.map((book) => (
            <Col xs={12} md={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default AllTheBooks;
