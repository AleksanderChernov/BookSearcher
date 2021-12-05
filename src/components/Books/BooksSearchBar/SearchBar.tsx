import './SearchBar.css';
import {
  Form, Input, Button, Select, Spin,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';
import { useBookSearchActions } from '../../../hooks/useBookSearchActions';
import { searchInputRule } from '../../../validationModels/validationModels';

const { Option } = Select;

const BookSearchBar: React.FC = () => {
  const { searchForBooks } = useBookSearchActions();
  const { error, isLoading } = useTypedSelector(
    (state) => state.bookItems,
  );

  const onFinish = (values: string) => {
    const entries = Object.values(values);
    searchForBooks(entries[0], entries[1], entries[2]);
  };

  const bookSubjectOptions = [
    { value: '', title: 'Любой' },
    { value: 'art', title: 'Искусство' },
    { value: 'biography', title: 'Биография' },
    { value: 'computers', title: 'Компьютеры' },
    { value: 'history', title: 'История' },
    { value: 'medical', title: 'Медицина' },
    { value: 'poetry', title: 'Поэзия' },
  ];

  return (
    <div className="search-bar__wrapper">
      <Title className="search-bar__title" level={2}>Поиск</Title>
      <Form onFinish={onFinish} name="form" className="search-bar__form">
        <Form.Item name="bookInput" rules={searchInputRule.validation}>
          <Input
            placeholder="Название"
            className="search-bar__input"
          />
        </Form.Item>
        <Title className="search-bar__title" level={5}>Жанры</Title>
        <Form.Item name="bookSubject" initialValue="">
          <Select defaultValue="Любой">
            {bookSubjectOptions.map(
              (option) => (
                <Option value={option.value}>
                  {option.title}
                </Option>
              ),
            )}
          </Select>
        </Form.Item>
        <Title className="search-bar__title" level={5}>Сортировка</Title>
        <Form.Item name="bookRelevance" initialValue="relevance">
          <Select defaultValue="relevance">
            <Option value="relevance">Самое релевантное</Option>
            <Option value="newest">Самое новое</Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="search-bar__button" icon={<SearchOutlined />} size="large">
          Искать
        </Button>
      </Form>
      {error && (
        <h3 className="search-bar__error">{error}</h3>
      )}
      {isLoading && (
        <>
          <h3 className="search-bar__loading">Вывожу результаты</h3>
          <Spin />
        </>
      )}
    </div>
  );
};

export default BookSearchBar;
