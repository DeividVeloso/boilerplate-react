import axios from 'utils/axios';

export const getAllBooks = () => {
  return axios()
    .get(`books/`)
    .then(response => response.data)
    .catch(error => error.response.data);
};

export const postBooks = body => {
  return axios()
    .post(`books/`, { ...body })
    .then(response => response.data)
    .catch(error => error.response.data);
};

export const uploadImage = data => {
  return axios()
    .post(`books/upload`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(response => response.data)
    .catch(error => error.response.data);
};
