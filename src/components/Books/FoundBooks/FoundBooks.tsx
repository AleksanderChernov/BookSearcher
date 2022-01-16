import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ConfigProvider,
  Empty,
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
      render: (text: any) => (text ? <p>{text}</p> : <p style={{ color: 'red' }}>Unspecified</p>),
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
      onFilter: (value: any, record: any) => {
        if (record && record.categories && record.categories.length) {
          console.log(record.categories);
          return record.categories.includes(value);
        }
        return false;
      },
    },
    {
      title: t('bookCard.selectOptions.authors'),
      dataIndex: 'authors',
      key: 'authors',
      render: (text: any) => (text ? <p>{text}</p> : <p style={{ color: 'red' }}>Unspecified</p>),
    },
    {
      title: t('bookCard.selectOptions.pagesAmount'),
      dataIndex: 'pageCount',
      key: 'pageCount',
      render: (text: any) => (text ? <p>{text}</p> : <p style={{ color: 'red' }}>Unspecified</p>),
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
      render: (text: any) => (text ? <p>{text.substring(0, 4)}</p> : <p style={{ color: 'red' }}>Unspecified</p>),
      sorter: (a: any, b: any) => {
        if (a && a.publishedDate && a.publishedDate.length
           && b && b.publishedDate && b.publishedDate.length) {
          return a.publishedDate.substring(0, 4) - b.publishedDate.substring(0, 4);
        } if (a && a.publishedDate && a.publishedDate.length) {
          return -1;
        } if (b && b.publishedDate && b.publishedDate.length) {
          return 1;
        }
        return 0;
      },
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
      <ConfigProvider renderEmpty={() => <Empty description={t('emptyMessage')} />}>
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
      </ConfigProvider>
      )}
    </div>
  );
};

export default FoundBooks;
