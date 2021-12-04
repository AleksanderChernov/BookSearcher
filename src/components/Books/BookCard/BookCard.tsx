/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Col, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import {
  NavLink, Route, Routes, useNavigate,
} from 'react-router-dom';
import React from 'react';
import { useBookBindActions } from '../../../hooks/useBookBindActions';
import placeholderImage from '../../../images/annelies-geneyn-unsplash-book-placeholder.jpg';
import './BookCard.css';
import { ClickedBookItem } from '../../../state/models';

const { Title } = Typography;

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
    : 'Авторы не указаны';
  const categoriesInfo = categories
    ? categories.join(', ')
    : 'Категории не указаны';
  const titleInfo = title || 'Нет названия';
  const imageInfo = imageLinks
    ? imageLinks.thumbnail
    : placeholderImage;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bindBookInfo } = useBookBindActions();
  const item: ClickedBookItem = {
    authors, title, categories, authorsInfo, imageInfo, imageLinks, categoriesInfo, titleInfo,
  };

  const handleOpen = () => {
    dispatch(bindBookInfo(item));
    navigate(`../book/${title}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <Col span={7} className="book-card__wrapper" onClick={() => handleOpen()}>
      <div className="book-card__flex-container">
        <Title level={4} className="book-card__title">{titleInfo}</Title>
        <img className="book-card__thumbnail" src={imageInfo} alt={titleInfo} />
        <Title level={5} className="book-card__info">
          Автор/ы:
          {' '}
          {authorsInfo}
        </Title>
        <Title level={5} className="book-card__info">
          Категории:
          {' '}
          {categoriesInfo}
        </Title>
      </div>
    </Col>
  );
};

export default BookCard;
