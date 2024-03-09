import card from './card'

function book(){
    const booksData = require('./books/fantasy.json'); // Import the array of books from the JSON file

    return (
      <div className="book">
        {booksData.map((book, index) => (
          <card
            key={index}
            title={book.title}
            img={book.img}
            price={book.price}
            category={book.category}
          />
        ))}
      </div>
    );
  }
export default book;