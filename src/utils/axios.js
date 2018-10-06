import axios from 'axios';
import { push } from 'connected-react-router';

const baseURL = 'http://api.programadordeguerrilha.com.br';
//const baseURL = 'http://localhost:5000';

export default function(token = '') {
  let instance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.response.use(
    function(response) {
      console.log('ENTROU', response);
      return response;
    },
    function(error) {
      console.log('ENTROU ERROE', error);

      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = window.localStorage.getItem('refreshToken');
        return instance
          .post(`${baseURL}/auth/refresh`, { refreshToken })
          .then(({ data }) => {
            if (data.accessToken) {
              window.localStorage.setItem('token', data.accessToken);
              // window.localStorage.setItem('refreshToken', data.refreshToken);
              instance.defaults.headers.common['Authorization'] =
                data.accessToken;
              originalRequest.headers['Authorization'] = data.accessToken;
              return instance(originalRequest);
            }
            push('/login');
          })
          .catch(() => push('/login'));
      }

      return Promise.reject(error);
    }
  );

  return instance;
}
