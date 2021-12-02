/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  NavLink, Route, Routes, useNavigate,
} from 'react-router-dom';
import React from 'react';
import placeholderImage from '../../../images/annelies-geneyn-unsplash-book-placeholder.jpg';
import './BookCard.css';
import { Book } from '../Book/Book';

interface IProps {
  authors: string[];
  categories: string[];
  title: string;
  imageLinks: any;
}

const BookCard: React.FC<IProps> = ({
  authors, categories, imageLinks, title,
}: IProps) => {
  const authorsInfo = authors
    ? authors.join(', ')
    : 'No authors specified';
  const categoriesInfo = categories
    ? categories.join(', ')
    : 'No categories found';
  const titleInfo = title || 'No title found';
  const imageInfo = imageLinks
    ? imageLinks.thumbnail
    : placeholderImage;

  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`../book/${title}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article className="book-card__wrapper" onClick={() => handleOpen()}>
      <h3 className="book-card__title">{titleInfo}</h3>
      <img className="book-card__thumbnail" src={imageInfo} alt={titleInfo} />
      <h3 className="book-card__info">{authorsInfo}</h3>
      <h3 className="book-card__info">{categoriesInfo}</h3>
      {/* <NavLink to={`../books/${authors}+${title}`}>{title}</NavLink> */}
      {/*       <Routes>
        <Route
          path="../books/:writer"
          element={(
            <Book
              authors={authors}
              categories={categories}
              title={title}
              imageLinks={imageLinks}
              authorsInfo={authorsInfo}
              categoriesInfo={categoriesInfo}
              titleInfo={titleInfo}
              imageInfo={imageInfo}
            />
)}
        />
      </Routes> */}
    </article>
  );
};

export default BookCard;
