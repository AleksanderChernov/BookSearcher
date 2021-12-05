import React from 'react';
import { Row, Space, Spin } from 'antd';
import useTypedSelector from '../../../hooks/useTypedSelector';
import BookCard from '../BookCard/BookCard';
import { BookItem } from '../../../state/models';
import './FoundBooks.css';

const FoundBooks: React.FC = () => {
  const { booksData, error, isLoading } = useTypedSelector(
    (state) => state.bookItems,
  );

  return (
    <div className="found-books">
      <Row gutter={[5, 20]} justify="space-around" className="found-books__grid-wrapper">
        {!error
          && !isLoading
          && booksData.map((item: BookItem) => (
            <BookCard
              canonicalVolumeLink={item.canonicalVolumeLink}
              description={item.description}
              pageCount={item.pageCount}
              language={item.language}
              publishedDate={item.publishedDate}
              key={item.publishedDate + item.title}
              authors={item.authors}
              categories={item.categories}
              title={item.title}
              imageLinks={item.imageLinks}
            />
          ))}
      </Row>
    </div>
  );
};

export default FoundBooks;
