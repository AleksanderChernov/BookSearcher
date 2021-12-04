import { RollbackOutlined } from '@ant-design/icons';
import { Button, Collapse } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Book.css';

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
          <Panel header="Авторы" key="1">
            <p>{authorsInfo}</p>
          </Panel>
          <Panel header="Категории" key="2">
            <p>{categoriesInfo}</p>
          </Panel>
          <Panel header="Ссылка" key="3">
            <a href={canonicalVolumeLink}>{canonicalVolumeLink}</a>
          </Panel>
          <Panel header="Количество страниц" key="4">
            <p>
              {pageCount}
              {'  '}
              cтраниц
            </p>
          </Panel>
          <Panel header="Язык" key="5">
            <p>
              {language}
            </p>
          </Panel>
          <Panel header="Издано" key="6">
            <p>
              {publishedDate}
            </p>
          </Panel>
        </Collapse>
        <Button type="primary" onClick={() => handleClick()}>Вернуться назад</Button>
      </article>
    </div>
  );
};
