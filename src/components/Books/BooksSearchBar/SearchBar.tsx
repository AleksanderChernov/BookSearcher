import "./SearchBar.css";
import { useCallback, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

enum errEnum {
  err400 = "Request failed with status code 400",
}

const BookSearchBar: React.FC = () => {
  const [bookName, setBookName] = useState("");
  const [chosenSubject, setChosenSubject] = useState("all");
  const [chosenRelevance, setChosenRelevance] = useState("relevance");
  const { searchForBooks } = useActions();
  const { booksData, error, isLoading } = useTypedSelector(
    (state) => state.bookItems
  );
  console.log(booksData.map((item) => item));

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchForBooks(bookName, chosenSubject, chosenRelevance);
  };

  const onInputChangeBook = useCallback((e) => setBookName(e.target.value), []);
  const ChangeSubject = useCallback(
    (e) => setChosenSubject(e.target.value),
    []
  );
  const ChangeRelevance = useCallback(
    (e) => setChosenRelevance(e.target.value),
    []
  );

  return (
    <div className='search-bar__wrapper'>
      <h2 className='search-bar__title'>Search</h2>
      <form onSubmit={sendForm} className='search-bar__form'>
        <input
          className='search-bar__input'
          value={bookName}
          onChange={onInputChangeBook}
        />
        <h3 className='search-bar__title'>Жанры</h3>
        <select onChange={ChangeSubject}>
          <option value='all'>Любая</option>
          <option value='art'>Искусство</option>
          <option value='biography'>Биография</option>
          <option value='computers'>Компьютеры</option>
          <option value='history'>История</option>
          <option value='medical'>Медицина</option>
          <option value='poetry'>Поэзия</option>
        </select>
        <h3 className='search-bar__title'>Сортировка</h3>
        <select onChange={ChangeRelevance}>
          <option value='relevance'>Самое релевантное</option>
          <option value='newest'>Самое новое</option>
        </select>
        <button className='search-bar__button'>Search</button>
      </form>
      {error !== errEnum.err400 && (
        <h3 className='search-bar__error'>{error}</h3>
      )}
      {error === errEnum.err400 ? "Введите парaметры запроса" : ""}
      {isLoading && <h3 className='search-bar__loading'>Loading in process</h3>}
    </div>
  );
};

export default BookSearchBar;
