import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';
import Card from './MyCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookDetails from './BookDetails';
import SearchBar from './SearchBar';


// Componente per la visualizzazione dei risultati della ricerca
function Book({ category }) {
  const booksData = require(`../books/${category.toLowerCase()}.json`);
  return (
    <Row className="book libri justify-content-md-center">
      {booksData.map((book, index) => (
        <Col md="auto" key={index}>
          <Card
            title={book.title}
            img={book.img}
            price={`${book.price} $`}
            category={book.category}
          />
        </Col>
      ))}
    </Row>
  );
}

// Funzione per filtrare i libri in base al termine di ricerca e alla categoria
const searchBooks = (books, searchTerm, searchCategory) => {
  return books.filter((book) => {
    const titleMatches = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatches = searchCategory === '' || book.category === searchCategory;
    return titleMatches && categoryMatches;
  });
};

function AllTheBooks({books}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // Load all books on component mount
    const allBooksData = [
      ...require('../books/fantasy.json'),
      ...require('../books/history.json'),
      ...require('../books/horror.json'),
      ...require('../books/romance.json'),
      ...require('../books/scifi.json'),
    ];
    setAllBooks(allBooksData);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSearch = () => {
    // Perform search and update searchResults
    const results = searchBooks(allBooks, searchTerm, searchCategory);
    setSearchResults(results);
  };

  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  const handleAddToCart = (book) => {
    // Implement your add to cart logic
    console.log(`Book added to cart: ${book.title}`);
  };

  return (
    <div>
      {selectedBook ? (
        <BookDetails selectedBook={selectedBook} onAddToCart={handleAddToCart} />
      ) : (
        <div>
          {/* Your existing code */}
          {/* ... */}
          
          {/* Display all books or search results */}
          {searchResults.length === 0 ? (
            <div>
              <h2>All Books</h2>
              <Book category="Fantasy" />
              <Book category="History" />
              <Book category="Horror" />
              <Book category="Romance" />
              <Book category="SciFi" />
            </div>
          ) : (
            <div>
              <h2>Search Results</h2>
              {/* ... (your search input and dropdown) */}
              <SearchResult results={searchResults} onCardClick={handleCardClick} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AllTheBooks;
