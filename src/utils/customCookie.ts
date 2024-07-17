import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const customCookie = {
  get: {
    accessToken: () => cookies.get('accessToken'),
    refreshToken: () => cookies.get('refreshToken'),
  },
  set: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    token: ({ data }: any) => {
      const accessTokenExpires = new Date(
        data.accessTokenExpirationTime.replace('T', ' ')
      );
      const refreshTokenExpires = new Date(
        data.refreshTokenExpirationTime.replace('T', ' ')
      );

      cookies.set('accessToken', data.accessToken, {
        path: '/',
        expires: accessTokenExpires,
      });
      cookies.set('refreshToken', data.refreshToken, {
        path: '/',
        expires: refreshTokenExpires,
      });
    },
  },
  remove: {
    accessToken: () => cookies.remove('accessToken'),
    refreshToken: () => cookies.remove('refreshToken'),
  },
} as const;
