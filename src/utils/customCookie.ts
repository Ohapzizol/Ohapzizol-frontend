import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const customCookie = {
  get: {
    accessToken: () => cookies.get('accessToken'),
  },
  set: {
    accessToken: (data: string) => {
      cookies.set('accessToken', data, {
        path: '/',
      });
    },
  },
  remove: {
    accessToken: () => cookies.remove('accessToken'),
  },
} as const;
