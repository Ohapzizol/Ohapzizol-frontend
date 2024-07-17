import { AxiosError } from 'axios';
import { instance } from '../axios';
import { useMutation, MutationOptions } from '@tanstack/react-query';

export type LoginRequsetType = {
  id: string;
  password: string;
  options?: MutationOptions;
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (props: LoginRequsetType) => instance.post('/login', props),
    onSuccess: (response) => {
      alert('로그인에 성공하였습니다'); //, (window.location.href = '/');
      console.log(response);
    },
    onError: (e: AxiosError<{ detail: string }>) => {
      alert(e.response?.data.detail);
    },
  });
};
