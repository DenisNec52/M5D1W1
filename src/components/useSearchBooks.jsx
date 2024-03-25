// useSearchBooks.js
import { useState } from 'react';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';

const useSearchBooks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

  const handleSearchSubmit = (query) => {
    const lowercaseQuery = query.toLowerCase();
    const filteredBooks = lowercaseQuery === '' ? allBooks : allBooks.filter((book) =>
      book.title.toLowerCase().includes(lowercaseQuery)
    );
    setSearchResults(filteredBooks);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return { searchQuery, searchResults, handleSearchSubmit, handleSearchChange };
};

export default useSearchBooks;
