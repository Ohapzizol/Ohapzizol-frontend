import { AxiosError } from 'axios';
import { instance } from '../axios';
import { useMutation, MutationOptions } from '@tanstack/react-query';

export type SingupPropsType = {
  id: string;
  name: string;
  password: string;
  balance: number;
  options?: MutationOptions;
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (props: SingupPropsType) => instance.post('/signup', props),
    onSuccess: () => {
      alert('회원가입에 성공하였습니다'), (window.location.href = '/login');
    },
    onError: (e: AxiosError<{ detail: string }>) => {
      alert(e.response?.data.detail);
    },
  });
};
