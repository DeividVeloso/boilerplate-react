import { createAction } from 'redux-actions';

import {
  BOOKS_FULFILLED,
  BOOKS_REJECTED,
  BOOKS_REQUESTED,
} from '../actions-type';

export const requestedBooks = createAction(BOOKS_REQUESTED);
export const fulfilledBooks = createAction(BOOKS_FULFILLED);
export const rejectedBooks = createAction(BOOKS_REJECTED);
