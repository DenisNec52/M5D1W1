import React, { useState } from 'react';

const BookDetails = ({ selectedBook, onAddToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(selectedBook);
    setIsAddedToCart(true);
  };

  return (
    <div>
      <h2>{selectedBook.title}</h2>
      <img src={selectedBook.img} alt={selectedBook.title} />
      <p>Price: {`${selectedBook.price} $`}</p>
      <p>Category: {selectedBook.category}</p>
      <button onClick={handleAddToCart} style={{ borderColor: isAddedToCart ? 'red' : 'initial' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default BookDetails;
