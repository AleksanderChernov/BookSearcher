import React from 'react';

interface IProps {
  authors: string[];
  categories: string[];
  title: string;
  imageLinks: any;
  authorsInfo: string;
  categoriesInfo: string;
  titleInfo: string;
  imageInfo: string;
}

export const Book: React.FC<IProps> = ({
  authors, categories, imageLinks, title, authorsInfo, categoriesInfo, titleInfo, imageInfo,
}: IProps) => {
  console.log(authors);
  return (
    <article className="book-card__wrapper">
      <h3 className="book-card__title">{titleInfo}</h3>
      <img className="book-card__thumbnail" src={imageInfo} alt={titleInfo} />
      <h3 className="book-card__info">{authorsInfo}</h3>
      <h3 className="book-card__info">{categoriesInfo}</h3>
    </article>
  );
};
