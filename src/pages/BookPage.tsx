import React, { VFC } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';

export const BookPage: VFC = () => {
  const bookInfo = useTypedSelector();

  return (
    <Book {...bookInfo} />
  );
};
