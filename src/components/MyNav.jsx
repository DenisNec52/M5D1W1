// MyNav.js
import React, { useState } from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Importa l'icona del carrello
import MyButton from './MyButton';

function MyNav( props, { handleAddToCart }) {
  const [cartCount, setCartCount] = useState(0);
  const {theme, onClick} = props;
  // Funzione per aggiungere un libro al carrello
  const handleAddToCartClick = () => {
    if (handleAddToCart) {
      handleAddToCart(); // Chiamata alla funzione handleAddToCart fornita come prop
      setCartCount(cartCount + 1); // Aggiorna il contatore del carrello
    }
  };

  return (
    <Navbar expand="lg" bg = {theme} variant = {theme}>
      <Container fluid>
        <Navbar.Brand href="#">EpibookPers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Browse</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="outline-light" className='ms-2 me-2' onClick={handleAddToCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount > 0 && <span className="ms-1">{cartCount}</span>}
          </Button>
        </Navbar.Collapse>
        <MyButton theme = {theme}changeTheme = {onClick}/>
      </Container>
    </Navbar>
  );
}

export default MyNav;
