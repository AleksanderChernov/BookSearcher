import './SearchBar.css';
import {
  Form, Input, Button, Select, Spin,
} from 'antd';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { SearchOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';
import useTypedSelector from '../../../hooks/useTypedSelector';
import { useBookSearchActions } from '../../../hooks/useBookSearchActions';
import { searchInputRule } from '../../../validationModels/validationModels';

const { Option } = Select;

const BookSearchBar: React.FC = () => {
  const { searchForBooks } = useBookSearchActions();
  const { error, isLoading } = useTypedSelector(
    (state) => state.bookItems,
  );

  const defaultFormValues = {
    bookInput: '',
    bookRelevance: 'Relevance',
    bookSubject: '',
  };

  const languages = [
    { chosenLang: 'en', nativeName: 'English' },
    { chosenLang: 'ru', nativeName: 'Русский' },
  ];

  const onFinish = (values: typeof defaultFormValues) => {
    const { bookInput, bookSubject, bookRelevance } = values;
    searchForBooks(bookInput, bookSubject, bookRelevance);
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

  const onClickLangChange = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, []);

  return (
    <div className="search-bar__wrapper">
      <Title className="search-bar__title" level={2}>{t('searchBar.title.title')}</Title>
      <Form initialValues={defaultFormValues} onFinish={onFinish} name="form" className="search-bar__form">
        <Form.Item name="bookInput" rules={searchInputRule.validation}>
          <Input
            placeholder="Название"
            className="search-bar__input"
          />
        </Form.Item>
        <Title className="search-bar__title" level={5}>{t('searchBar.options.genres.title.title')}</Title>
        <Form.Item name="bookSubject">
          <Select>
            {bookSubjectOptions.map(
              (option) => (
                <Option value={option.value}>
                  {option.title}
                </Option>
              ),
            )}
          </Select>
        </Form.Item>
        <Title className="search-bar__title" level={5}>{t('searchBar.options.relevance.title.title')}</Title>
        <Form.Item name="bookRelevance">
          <Select>
            <Option value="relevance">{t('searchBar.options.relevance.selectRelevance.mostRelevant')}</Option>
            <Option value="newest">{t('searchBar.options.relevance.selectRelevance.newest')}</Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="search-bar__button" icon={<SearchOutlined />} size="large">
          {t('searchBar.button')}
        </Button>
      </Form>
      <div>
        {languages.map((lng) => (
          <Button type="primary" htmlType="submit" onClick={() => onClickLangChange(lng.chosenLang)}>
            {lng.nativeName}
          </Button>
        ))}
      </div>
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
