import './SearchBar.css';
import {
  Form, Input, Button, Select, Spin,
} from 'antd';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import useTypedSelector from '../../../hooks/useTypedSelector';
import { useBookSearchActions } from '../../../hooks/useBookSearchActions';
import { searchInputRule } from '../../../validationModels/validationModels';

const { Option } = Select;

const BookSearchBar: React.FC = () => {
  const { searchForBooks } = useBookSearchActions();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { error, isLoading } = useTypedSelector(
    (state) => state.bookItems,
  );

  const defaultFormValues = {
    bookInput: '',
    bookRelevance: 'Relevance',
    bookSubject: '',
  };

  const [params, setParams] = React.useState(defaultFormValues);

  const languages = [
    { chosenLang: 'en', nativeName: 'English' },
    { chosenLang: 'ru', nativeName: 'Русский' },
  ];

  const booksQuery = useQuery(
    ['params', params],
    () => axios
      .get(`https://books.googleapis.com/books/v1/volumes?q=${params.bookInput}+subject:${params.bookSubject}&orderBy=${params.bookRelevance}`, {
        params: {
          maxResults: 40,
        },
      })
      .then((res) => res.data),
    {
      onSuccess: (data) => {
        data.items.forEach((item: any) => {
          queryClient.setQueryData(['book', item.id], item);
        });
      },
    },
  );

  const onFinish = (values: typeof defaultFormValues) => {
    const { bookInput, bookSubject, bookRelevance } = values;
    searchForBooks(bookInput, bookSubject, bookRelevance);
    setParams({ bookInput, bookSubject, bookRelevance });
  };

  const { t, i18n } = useTranslation();

  const searchInputRule = {
    validation: [{ required: true, message: t('validationErrors.inputMustBeFilled') }, { max: 35, message: t('validationErrors.inputLength') }],
  };

  const bookSubjectOptions = [
    { value: '', title: t('searchBar.options.genres.selectGenre.all') },
    { value: 'art', title: t('searchBar.options.genres.selectGenre.art') },
    { value: 'biography', title: t('searchBar.options.genres.selectGenre.biography') },
    { value: 'computers', title: t('searchBar.options.genres.selectGenre.computers') },
    { value: 'history', title: t('searchBar.options.genres.selectGenre.history') },
    { value: 'medical', title: t('searchBar.options.genres.selectGenre.medical') },
    { value: 'poetry', title: t('searchBar.options.genres.selectGenre.poetry') },
  ];

  const navigateToSaved = () => navigate('/savedbooks');

  const onClickLangChange = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, []);

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <Title className="search-bar__title" level={2}>{t('searchBar.title.title')}</Title>
        <Form initialValues={defaultFormValues} onFinish={onFinish} name="form" className="search-bar__form">
          <Form.Item name="bookInput" rules={searchInputRule.validation}>
            <Input
              placeholder={t('searchBar.title.placeholder')}
              className="search-bar__input"
            />
          </Form.Item>
          <div className="search-bar__options-wrapper">
            <div className="search-bar__option-column">
              <Title className="search-bar__title" level={5}>{t('searchBar.options.genres.title.title')}</Title>
              <Form.Item name="bookSubject">
                <Select className="search-bar__select">
                  {bookSubjectOptions.map(
                    (option) => (
                      <Option className="search-bar__option" key={option.value} value={option.value}>
                        {option.title}
                      </Option>
                    ),
                  )}
                </Select>
              </Form.Item>
            </div>
            <div className="search-bar__option-column">
              <Title className="search-bar__title" level={5}>{t('searchBar.options.relevance.title.title')}</Title>
              <Form.Item name="bookRelevance">
                <Select className="search-bar__select">
                  <Option className="search-bar__option" value="relevance">{t('searchBar.options.relevance.selectRelevance.mostRelevant')}</Option>
                  <Option className="search-bar__option" value="newest">{t('searchBar.options.relevance.selectRelevance.newest')}</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <Button type="primary" htmlType="submit" className="search-bar__button" icon={<SearchOutlined />} size="large">
            {t('searchBar.button')}
          </Button>
        </Form>
      </div>
      <div className="search-bar__language-buttons">
        {languages.map((lng) => (
          <Button
            type="primary"
            key={lng.nativeName}
            htmlType="submit"
            onClick={() => onClickLangChange(lng.chosenLang)}
          >
            {lng.nativeName}
          </Button>
        ))}
      </div>
      {/* <Button type="link" onClick={navigateToSaved}>Перейти к сохраненным книгам</Button> */}
      {error && (
        <h3 className="search-bar__error">{error}</h3>
      )}
      {isLoading && (
        <>
          <h3 className="search-bar__loading">{t('loading')}</h3>
          <Spin />
        </>
      )}
    </div>
  );
};

export default BookSearchBar;
