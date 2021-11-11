import './SearchBar.css';
import { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

const BookSearchBar: React.FC = () => {

  const [bookName, setBookName] = useState('');
  const { searchForBooks } = useActions();
  const { booksData, error, isLoading } = useTypedSelector((state) => state.bookItems);
  console.log(booksData.map((item: any) => item));

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchForBooks(bookName)
  }

  return <div className="search-bar__wrapper">
    <h2 className="search-bar__title">Search</h2>
    <form onSubmit={sendForm} className="search-bar__form">
      <input className="search-bar__input" value={bookName} onChange={e => setBookName(e.target.value)} />
      <h3 className="search-bar__title">Placeholder</h3>
      <h3 className="search-bar__title">Placeholder</h3>
      <button className="search-bar__button">Search</button>
    </form>
    {error && <h3 className="search-bar__error">{error}</h3>}
    {isLoading && <h3 className="search-bar__loading">Loading in process</h3>}
  </div>
};

export default BookSearchBar;