import { requestedBooks, fulfilledBooks, rejectedBooks } from './actions';
import { getAllBooks, uploadImage, postBooks } from './queries';
import { push } from 'connected-react-router';

export const requestBooks = () => async dispatch => {
  dispatch(requestedBooks());
  const response = await getAllBooks();

  if (response.errors) {
    dispatch(rejectedBooks());
    return response.errors;
  }

  dispatch(fulfilledBooks(response));
};

export const createBook = values => async dispatch => {
  const response = await postBooks(values);

  if (response.errors) {
    return response.errors;
  }
  dispatch(push('/books'));
  return response;
};

export const requestUploadImage = data => async dispatch => {
  const formData = new FormData();
  formData.append('image', data[0]);
  const response = await uploadImage(formData);

  if (response.errors) {
    dispatch(rejectedBooks());
    return response.errors;
  }
  return response;
};
