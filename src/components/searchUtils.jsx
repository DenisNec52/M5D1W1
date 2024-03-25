// In un file chiamato searchUtils.js

export const searchBooks = (searchQuery, allBooks) => {
    const query = searchQuery.toLowerCase();
    return allBooks.filter((book) => book.title.toLowerCase().includes(query));
  };
  