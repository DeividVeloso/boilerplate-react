import { combineReducers } from 'redux';
import theme from 'store/theme/reducer';
import books from 'store/books/reducer';
import dashboard from 'store/dashboard/reducer';
import auth from 'store/auth/reducer';
import hackerNews from 'store/hacker-news/reducer';

export default combineReducers({
  theme,
  auth,
  books,
  dashboard,
  hackerNews,
});
