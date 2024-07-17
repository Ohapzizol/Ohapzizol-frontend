import { useMutation } from '@tanstack/react-query';
import { instance } from '../axios';

export const useDeletePayment = (id: number) => {
  return useMutation({
    mutationFn: () => instance.delete(`/payments/${id}`),
    onSuccess: () => {
      window.location.reload();
    },
  });
};
