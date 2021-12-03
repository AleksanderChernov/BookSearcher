import React, { VFC } from 'react';
import { Book } from '../components/Books/Book/Book';
import useTypedSelector from '../hooks/useTypedSelector';

export const BookPage: VFC = () => {
  const bookInfo = useTypedSelector((state) => state.clickedBook);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Book {...bookInfo.clickedBookData} />
  );
};
