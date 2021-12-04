import React from 'react';
import './Books.css';
import BookSearchBar from './BooksSearchBar/SearchBar';
import FoundBooks from './FoundBooks/FoundBooks';

const Books: React.FC = () => (
  <div className="books">
    <BookSearchBar />
    <FoundBooks />
  </div>
);

export default Books;
