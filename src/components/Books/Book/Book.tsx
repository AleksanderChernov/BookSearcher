import { Button, Collapse } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Book.css';
import { useTranslation } from 'react-i18next';

const { Panel } = Collapse;

interface IProps {
  authors: string[];
  categories: string[];
  imageLinks: any;
  authorsInfo: string;
  categoriesInfo: string;
  titleInfo: string;
  imageInfo: string;
  description: string;
  canonicalVolumeLink: string
  pageCount: number;
  language: string;
  publishedDate: string;
}

export const Book: React.FC<IProps> = ({
  authors, categories, imageLinks, authorsInfo,
  categoriesInfo, titleInfo, imageInfo,
  canonicalVolumeLink, description, pageCount, language, publishedDate,
}: IProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="book">
      <article className="book__wrapper">
        <div className="book__image-title-box">
          <img className="book__image" src={imageInfo} alt={titleInfo} />
          <div className="book__description-box">
            <Title level={2} className="book__header">{titleInfo}</Title>
            <p className="book__description">{description}</p>
          </div>
        </div>
        <Collapse accordion className="book__list">
          <Panel header={t('bookCard.selectOptions.authors')} key="1">
            <p>{authorsInfo}</p>
          </Panel>
          <Panel header={t('bookCard.selectOptions.categories')} key="2">
            <p>{categoriesInfo}</p>
          </Panel>
          <Panel header={t('bookCard.selectOptions.link')} key="3">
            <a href={canonicalVolumeLink}>{canonicalVolumeLink}</a>
          </Panel>
          <Panel header={t('bookCard.selectOptions.pagesAmount')} key="4">
            <p>
              {pageCount}
              {'  '}
              {t('bookCard.pages')}
            </p>
          </Panel>
          <Panel header={t('bookCard.selectOptions.language')} key="5">
            <p>
              {language}
            </p>
          </Panel>
          <Panel header={t('bookCard.selectOptions.published')} key="6">
            <p>
              {publishedDate}
            </p>
          </Panel>
        </Collapse>
        <Button type="primary" onClick={() => handleClick()}>{t('bookCard.button-back')}</Button>
      </article>
    </div>
  );
};
