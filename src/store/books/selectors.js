import _get from 'lodash/get';

export const getReadedBooks = state => {
  const books = _get(state, 'books.data', []);
  return books.filter(book => book.readed === true);
};

export const getNextBooks = state => {
  const books = _get(state, 'books.data', []);
  return books.filter(book => book.readed === false);
};
