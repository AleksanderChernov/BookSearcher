import "./Books.css";
import BookSearchBar from "./BooksSearchBar/SearchBar";
import FoundBooks from "./FoundBooks/FoundBooks";

const Books: React.FC = () => {
  return (
    <div className='books'>
      <BookSearchBar />
      <FoundBooks />
    </div>
  );
};

export default Books;
