import {
  BOOKS_REQUESTED,
  BOOKS_FULFILLED,
  BOOKS_REJECTED,
} from '../actions-type';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKS_REQUESTED: {
      return {
        ...state,
        data: [],
        error: null,
        loading: true,
      };
    }
    case BOOKS_FULFILLED: {
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    }
    case BOOKS_REJECTED: {
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
