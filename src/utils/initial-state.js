import { checkedValidToken } from 'store/auth/queries';

export default async () => {
  const token = window.localStorage.getItem('token');

  if (!token) {
    return {};
  }

  //fazer uma rota que retorna os dados do token válido.
  const result = await checkedValidToken({ accessToken: token });

  if (result && !result.error) {
    return {
      auth: {
        data: { ...result, accessToken: token },
        authenticated: true,
      },
    };
  }

  return {};
};
