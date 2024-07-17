import { AxiosError } from 'axios';
import { instance } from '../axios';
import { useMutation, MutationOptions } from '@tanstack/react-query';
import { customCookie } from '@/utils/customCookie';

export type LoginRequsetType = {
  id: string;
  password: string;
  options?: MutationOptions;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (props: LoginRequsetType) => instance.post('/login', props),
    onSuccess: (response) => {
      alert('로그인에 성공하였습니다'), (window.location.href = '/');
      customCookie.set.accessToken(response.headers.authorization);
    },
    onError: (e: AxiosError<{ detail: string }>) => {
      alert(e.response?.data.detail);
    },
  });
};
