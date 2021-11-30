import placeholderImage from "../../../images/annelies-geneyn-unsplash-book-placeholder.jpg";
import "./BookCard.css";

interface IProps {
  authors: string[];
  categories: string[];
  title: string;
  imageLinks: any;
}

const BookCard: React.FC<IProps> = (props) => {
  const authorsInfo = props.authors
    ? props.authors.join(", ")
    : "No authors specified";
  const categoriesInfo = props.categories
    ? props.categories.join(", ")
    : "No categories found";
  const titleInfo = props.title ? props.title : "No title found";
  const imageInfo = props.imageLinks
    ? props.imageLinks.thumbnail
    : placeholderImage;

  return (
    <article className='book-card__wrapper'>
      <h3 className='book-card__title'>{titleInfo}</h3>
      <img className='book-card__thumbnail' src={imageInfo} alt={titleInfo} />
      <h3 className='book-card__info'>{authorsInfo}</h3>
      <h3 className='book-card__info'>{categoriesInfo}</h3>
    </article>
  );
};

export default BookCard;
