import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';

export type PaymentsType = {
  id: number;
  title: string;
  value: number;
  description: string;
  time: string;
  tag: string;
};

export type GetPaymentsType = {
  balance: 0;
  profit: 0;
  payments: PaymentsType[];
};

export const useGetPayment = (date: string) => {
  return useQuery({
    queryKey: ['payments', date],
    queryFn: async () => {
      const { data } = await instance.get<GetPaymentsType>(
        `/payments?date=${date}`
      );
      return data;
    },
  });
};
