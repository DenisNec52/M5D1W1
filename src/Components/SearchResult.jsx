import React from 'react';
import Card from './MyCard';

const SearchResult = ({ results, onCardClick }) => {
  return (
    <div>
      {results.map((book, index) => (
        <Card
          key={index}
          title={book.title}
          img={book.img}
          price={`${book.price} $`}
          category={book.category}
          onClick={() => onCardClick(book)}
        />
      ))}
    </div>
  );
};

export default SearchResult;
