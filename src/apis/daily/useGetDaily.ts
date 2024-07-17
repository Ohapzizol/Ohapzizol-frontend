import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';

export type GetDailyType = {
  payments: [
    {
      id: number;
      balance: number;
      profit: number;
      day: number;
    }
  ];
};

export const useGetDaily = (date: string) => {
  const [year, month] = date.split('-');
  return useQuery({
    queryKey: ['daily', year, month],
    queryFn: async () => {
      const { data } = await instance.get<GetDailyType>(
        `/daily/monthly?year=${year}&month=${month}`
      );
      return data;
    },
  });
};
