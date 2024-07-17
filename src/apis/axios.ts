import { customCookie } from '@/utils/customCookie';
import axios, { AxiosError } from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10_000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = customCookie.get.accessToken();
    const returnConfig = { ...config };
    if (accessToken) {
      returnConfig.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use((response) => response);
