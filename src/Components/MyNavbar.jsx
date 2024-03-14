import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';

function NavScrollExample({search}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const handleSearch = (term, category) => {
    setSearchTerm(term);
    setSearchCategory(category);

    // Your search logic here (e.g., update search results state)
  };

  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="text-black" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="text-black" href="#">
              About
            </Nav.Link>
            <Nav.Link className="text-black" href="#">
              Browse
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <SearchBar onSearch={handleSearch} />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
