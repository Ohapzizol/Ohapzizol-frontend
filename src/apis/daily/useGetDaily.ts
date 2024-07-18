import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { DateInfo } from '@/components/Calendar/useCalendarContext';

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

export const useGetDaily = (date: DateInfo) => {
  const { year, month } = date;
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
