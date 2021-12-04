import './SearchBar.css';
import {
  Form, Input, Button, Select, Spin, Layout,
} from 'antd';
import Title from 'antd/lib/typography/Title';
import { SearchOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';
import { useBookSearchActions } from '../../../hooks/useBookSearchActions';

const { Option } = Select;

enum errEnum {
  err400 = 'Request failed with status code 400',
}

const BookSearchBar: React.FC = () => {
  const [bookName, setBookName] = useState('');
  const [chosenSubject, setChosenSubject] = useState('');
  const [chosenRelevance, setChosenRelevance] = useState('relevance');
  const { searchForBooks } = useBookSearchActions();
  const { error, isLoading } = useTypedSelector(
    (state) => state.bookItems,
  );

  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    /* e.preventDefault(); */
    searchForBooks(bookName, chosenSubject, chosenRelevance);
  };

  const onInputChangeBook = useCallback((value) => setBookName(value), []);
  const changeSubject = useCallback((value) => setChosenSubject(value), []);
  const changeRelevance = useCallback((value) => setChosenRelevance(value), []);

  return (
    <div className="search-bar__wrapper">
      <Title className="search-bar__title" level={2}>Поиск</Title>
      <Form onFinish={onFinish} className="search-bar__form">
        <Form.Item name="Название" rules={[{ required: true, message: 'Поле необходимо заполнить' }, { max: 35, message: 'Максимум 35 символов' }]}>
          <Input
            placeholder="Название"
            className="search-bar__input"
            value={bookName}
            onChange={onInputChangeBook}
          />
        </Form.Item>
        <Title className="search-bar__title" level={5}>Жанры</Title>
        <Select defaultValue="Любой" onChange={changeSubject}>
          <Option value="all">Любой</Option>
          <Option value="art">Искусство</Option>
          <Option value="biography">Биография</Option>
          <Option value="computers">Компьютеры</Option>
          <Option value="history">История</Option>
          <Option value="medical">Медицина</Option>
          <Option value="poetry">Поэзия</Option>
        </Select>
        <Title className="search-bar__title" level={5}>Сортировка</Title>
        <Select defaultValue="relevance" onChange={changeRelevance}>
          <Option value="relevance">Самое релевантное</Option>
          <Option value="newest">Самое новое</Option>
        </Select>
        <Button type="primary" htmlType="submit" className="search-bar__button" icon={<SearchOutlined />} size="large">
          Искать
        </Button>
      </Form>
      {error !== errEnum.err400 && (
        <h3 className="search-bar__error">{error}</h3>
      )}
      {error === errEnum.err400 ? 'Введите парaметры запроса' : ''}
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
