import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Title from 'antd/lib/typography/Title';
import Row from 'antd/lib/row';
import BookCard from '../BookCard/BookCard';
import './SavedBooks.css';

const SavedBooks: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const key = 'AIzaSyD2IDysxW2pBDEOvGWOyYkh3pB3mel7QWg';
  const clientID = '1042792117132-s80sbaagbi7t0q7vjrj1jerk2uu6rbp5.apps.googleusercontent.com';
  const SavedBooksQuery = useQuery('savedBooks', () => axios.get(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes?key=${key}`).then((res) => res.data));

  console.log(SavedBooksQuery);

  return (
    <>
      <Title level={2}>Ваши сохраненные книги</Title>
      <Row gutter={[5, 20]} justify="space-around" className="saved-books__grid-wrapper">
        {/* <BookCard /> */}
      </Row>
    </>
  );
};

export default SavedBooks;
