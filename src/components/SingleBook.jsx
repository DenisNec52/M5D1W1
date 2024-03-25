import { useState } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'
import "./card.css";
const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <Card
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? '3px solid red' : 'blue' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
          <Card.Text>
            {book.category}
            <hr />
            <div className="price">{book.price}</div>
          </Card.Text>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  )
}

export default SingleBook
