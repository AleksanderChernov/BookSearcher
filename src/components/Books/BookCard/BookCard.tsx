/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux';
import {
  NavLink, Route, Routes, useNavigate,
} from 'react-router-dom';
import React from 'react';
import { useBookBindActions } from '../../../hooks/useBookBindActions';
import placeholderImage from '../../../images/annelies-geneyn-unsplash-book-placeholder.jpg';
import './BookCard.css';
import { ClickedBookItem } from '../../../state/models';

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
  const dispatch = useDispatch();
  const { bindBookInfo } = useBookBindActions();
  const item: ClickedBookItem[] = [{
    authors, title, categories, authorsInfo, imageInfo, imageLinks, categoriesInfo, titleInfo,
  }];

  const handleOpen = () => {
    navigate(`../book/${title}`);
    dispatch(bindBookInfo(item));
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <article className="book-card__wrapper" onClick={() => handleOpen()}>
      <h3 className="book-card__title">{titleInfo}</h3>
      <img className="book-card__thumbnail" src={imageInfo} alt={titleInfo} />
      <h3 className="book-card__info">{authorsInfo}</h3>
      <h3 className="book-card__info">{categoriesInfo}</h3>
    </article>
  );
};

export default BookCard;
