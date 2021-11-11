import { useTypedSelector } from "../../../hooks/useTypedSelector";
import BookCard from "../BookCard/BookCard";
import './FoundBooks.css';

const FoundBooks: React.FC = () => {
  const { booksData, error, isLoading } = useTypedSelector((state) => state.bookItems);

  return <div className="found-books">
    <h1 className="found-books__title">Books that I found</h1>
    <div className="found-books__grid-wrapper">
      {!error && !isLoading && booksData.map((item: any) => <BookCard
        key={item.publishedDate}
        authors={item.authors}
        categories={item.categories}
        title={item.categories}
        imageLinks={item.imageLinks}
      />)}
    </div>
  </div>
}

export default FoundBooks;