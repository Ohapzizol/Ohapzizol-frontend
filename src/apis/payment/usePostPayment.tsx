import { AxiosError } from 'axios';
import { useMutation, MutationOptions } from '@tanstack/react-query';
import { instance } from '../axios';

export type PostPaymentType = {
  title: string;
  value: number;
  description: string;
  time: string;
  tag: string;
  typ: string;
  options?: MutationOptions;
};

export const usePostPayment = () => {
  return useMutation({
    mutationFn: (props: PostPaymentType) =>
      instance.post('/payment', { ...props, time: props.time + ':00' }),
    onSuccess: () => {
      alert('가계부 작성에 성공하였습니다.'), (window.location.href = '/');
    },
    onError: (e: AxiosError<{ detail: string }>) => {
      alert(e.response?.data.detail);
    },
  });
};
