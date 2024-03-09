import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  const { img, title, price, category } = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {price} {category}
        </Card.Text>
        <Button variant="primary">crepa</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
