import React from 'react';
import { Row, Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import useTypedSelector from '../../../hooks/useTypedSelector';
import BookCard from '../BookCard/BookCard';
import { BookItem } from '../../../state/models';
import './FoundBooks.css';

const FoundBooks: React.FC = () => {
  const { booksData, error, isLoading } = useTypedSelector(
    (state) => state.bookItems,
  );

  /* const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />; */

  return (
    <div className="found-books">
      {/* {isLoading && (
      <div className="spin-wrapper">
        <Space size="large">
          <Spin indicator={antIcon} />
        </Space>
      </div>
      )} */}
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
