import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css";

function MyCard(props) {
  const { img, title, price, category, onAddToCart } = props;

  const handleAddToCart = () => {
    // Call the onAddToCart callback with the book details
    if (onAddToCart) {
      onAddToCart({
        img,
        title,
        price,
        category,
      });
    }
  };

  return (
    <div className='card'>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {category}
            <hr />
            <div className="price">{price}</div>
          </Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
