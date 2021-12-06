/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Card, Col, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import {
  NavLink, Route, Routes, useNavigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  description: string;
  canonicalVolumeLink: string;
  pageCount: number;
  language: string;
  publishedDate: string;
}

const BookCard: React.FC<IProps> = ({
  authors, categories, imageLinks, title, description,
  canonicalVolumeLink, pageCount, language, publishedDate,
}: IProps) => {
  const { t } = useTranslation();

  const authorsInfo = authors
    ? authors.join(', ')
    : t('foundCards.errors.noAuthors');
  const categoriesInfo = categories
    ? categories.join(', ')
    : t('foundCards.errors.noCategories');
  const titleInfo = title || t('foundCards.errors.noTitle');
  const imageInfo = imageLinks
    ? imageLinks.thumbnail
    : placeholderImage;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bindBookInfo } = useBookBindActions();
  const item: ClickedBookItem = {
    authors,
    title,
    categories,
    authorsInfo,
    imageInfo,
    imageLinks,
    categoriesInfo,
    titleInfo,
    canonicalVolumeLink,
    description,
    pageCount,
    language,
    publishedDate,
  };

  const handleOpen = () => {
    dispatch(bindBookInfo(item));
    navigate(`../book/${title}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <Col span={7} className="book-card__wrapper" onClick={() => handleOpen()}>
      <Card hoverable className="book-card__flex-container" cover={<img alt="imageInfo" className="book-card__thumbnail" src={imageInfo} />}>
        <Title level={4} className="book-card__title">{titleInfo}</Title>
        <Title level={5} className="book-card__info">
          {t('foundCards.authors')}
          {': '}
          {authorsInfo}
        </Title>
        <Title level={5} className="book-card__info">
          {t('foundCards.categories')}
          {': '}
          {categoriesInfo}
        </Title>
      </Card>
    </Col>
  );
};

export default BookCard;
