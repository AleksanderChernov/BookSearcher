import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Row, Space, Spin, Table,
} from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import useTypedSelector from '../../../hooks/useTypedSelector';
import BookCard from '../BookCard/BookCard';
import { BookItem } from '../../../state/models';
import './FoundBooks.css';

const FoundBooks: React.FC = () => {
  const { booksData, error, isLoading } = useTypedSelector(
    (state) => state.bookItems,
  );

  const [useRow, setUseRow] = useState(false);
  const { t, i18n } = useTranslation();

  function switchState() {
    setUseRow(!useRow);
  }

  const columns = [
    {
      title: t('bookCard.selectOptions.title'),
      dataIndex: 'title',
      key: 'title',
      sorter: (a: any, b: any) => a.title.length - b.title.length,
    },
    {
      title: t('bookCard.selectOptions.categories'),
      dataIndex: 'categories',
      key: 'categories',
      filters: [
        {
          text: 'Computers',
          value: 'Computers',
        },
        {
          text: 'Biology',
          value: 'Biology',
        },
        {
          text: 'Psychology',
          value: 'Psychology',
        },
        {
          text: 'Medical',
          value: 'Medical',
        },
      ],
      onFilter: (value: any, record: any) => record.categories.indexOf(value) === 0,
    },
    {
      title: t('bookCard.selectOptions.authors'),
      dataIndex: 'authors',
      key: 'authors',
    },
    {
      title: t('bookCard.selectOptions.pagesAmount'),
      dataIndex: 'pageCount',
      key: 'pageCount',
      sorter: (a: any, b: any) => a.pageCount - b.pageCount,
    },
    {
      title: t('bookCard.selectOptions.language'),
      dataIndex: 'language',
      key: 'language',
      filters: [
        {
          text: 'English',
          value: 'en',
        },
        {
          text: 'German',
          value: 'de',
        },
        {
          text: 'Russian',
          value: 'ru',
        },
        {
          text: 'French',
          value: 'fr',
        },
      ],
      onFilter: (value: any, record: any) => record.language.indexOf(value) === 0,
    },
    {
      title: t('bookCard.selectOptions.published'),
      dataIndex: 'publishedDate',
      key: 'publishedDate',
      sorter: (a: any, b: any) => a.publishedDate.substring(0, 4) - b.publishedDate.substring(0, 4),
      // Баг с сортировкой
    },
  ];

  return (
    <div className="found-books">
      {!error
          && !isLoading
          && booksData && (
          <Button
            type="dashed"
            icon={<PoweroffOutlined />}
            onClick={() => switchState()}
          >
            Switch Mode
          </Button>
      )}
      {useRow && (
        <Row gutter={[5, 20]} justify="space-around" className="found-books__grid-wrapper">
          {!error
          && !isLoading
          && booksData.map((item: BookItem, index: number) => (
            <BookCard
              canonicalVolumeLink={item.canonicalVolumeLink}
              description={item.description}
              pageCount={item.pageCount}
              language={item.language}
              publishedDate={item.publishedDate}
              key={`${item.publishedDate}_${index}`}
              authors={item.authors}
              categories={item.categories}
              title={item.title}
              imageLinks={item.imageLinks}
            />
          ))}
        </Row>
      )}
      {!useRow && !error && !isLoading && (
      <Table
        rowKey={(record: { publishedDate: any; }) => record.publishedDate}
        dataSource={booksData}
        columns={columns}
        expandable={{
          expandedRowRender: (item) => (
            <>
              <p style={{ margin: 0 }}>
                {item.description}
              </p>
              <a href={item.canonicalVolumeLink}>
                {item.canonicalVolumeLink}
              </a>
            </>
          ),
        }}
      />
      )}
    </div>
  );
};

export default FoundBooks;
