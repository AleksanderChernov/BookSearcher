import './SearchBar.css';
import React, { useCallback, useState } from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';
import useActions from '../../../hooks/useActions';

enum errEnum {
  err400 = 'Request failed with status code 400',
}

const BookSearchBar: React.FC = () => {
  const [bookName, setBookName] = useState('');
  const [chosenSubject, setChosenSubject] = useState('all');
  const [chosenRelevance, setChosenRelevance] = useState('relevance');
  const { searchForBooks } = useActions();
  const { error, isLoading } = useTypedSelector(
    (state) => state.bookItems,
  );

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(bookName, chosenSubject, chosenRelevance);
    e.preventDefault();
    searchForBooks(bookName, chosenSubject, chosenRelevance);
  };

  const onInputChangeBook = useCallback((e) => setBookName(e.target.value), []);
  const changeSubject = useCallback((e) => setChosenSubject(e.target.value), []);
  const changeRelevance = useCallback((e) => setChosenRelevance(e.target.value), []);

  return (
    <div className="search-bar__wrapper">
      <h2 className="search-bar__title">Search</h2>
      <form onSubmit={sendForm} className="search-bar__form">
        <input
          className="search-bar__input"
          value={bookName}
          onChange={onInputChangeBook}
        />
        <h3 className="search-bar__title">Жанры</h3>
        <select onChange={changeSubject}>
          <option value="all">Любая</option>
          <option value="art">Искусство</option>
          <option value="biography">Биография</option>
          <option value="computers">Компьютеры</option>
          <option value="history">История</option>
          <option value="medical">Медицина</option>
          <option value="poetry">Поэзия</option>
        </select>
        <h3 className="search-bar__title">Сортировка</h3>
        <select onChange={changeRelevance}>
          <option value="relevance">Самое релевантное</option>
          <option value="newest">Самое новое</option>
        </select>
        <button type="submit" className="search-bar__button">Search</button>
      </form>
      {error !== errEnum.err400 && (
        <h3 className="search-bar__error">{error}</h3>
      )}
      {error === errEnum.err400 ? 'Введите парaметры запроса' : ''}
      {isLoading && <h3 className="search-bar__loading">Loading in process</h3>}
    </div>
  );
};

export default BookSearchBar;
