import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, searchCategory);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Fantasy">Fantasy</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="SciFi">Sci-Fi</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
