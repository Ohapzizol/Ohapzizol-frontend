import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';

export type StatisticsType = {
  expenditure: number;
  income: number;
};

export type GetLatestDataType = {
  statistics: {
    '0': StatisticsType;
    '1': StatisticsType;
    '2': StatisticsType;
    '3': StatisticsType;
    '4': StatisticsType;
    '5': StatisticsType;
  };
};

export const useGetLatestData = () => {
  return useQuery({
    queryKey: ['latest'],
    queryFn: async () => {
      const { data } = await instance.get<GetLatestDataType>(
        '/statistics/latest'
      );
      return data;
    },
  });
};
