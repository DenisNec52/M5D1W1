import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css";

function BasicExample(props) {
  const { img, title, price, category } = props;

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
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;
