import { useTypedSelector } from "../../../hooks/useTypedSelector";
import BookCard from "../BookCard/BookCard";
import "./FoundBooks.css";

const FoundBooks: React.FC = () => {
  const { booksData, error, isLoading } = useTypedSelector(
    (state) => state.bookItems
  );

  return (
    <div className='found-books'>
      {isLoading && <h1 className='found-books__title'>Поиск в процессе</h1>}
      <div className='found-books__grid-wrapper'>
        {!error &&
          !isLoading &&
          booksData.map((item) => (
            <BookCard
              key={item.publishedDate + item.title}
              authors={item.authors}
              categories={item.categories}
              title={item.title}
              imageLinks={item.imageLinks}
            />
          ))}
      </div>
    </div>
  );
};

export default FoundBooks;
