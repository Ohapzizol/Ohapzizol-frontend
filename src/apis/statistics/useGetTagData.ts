import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { StatisticsType } from './useGetLatestData';

export type GetTagDataType = {
  statistics: {
    [key: string]: StatisticsType;
  };
};

export const useGetTagData = () => {
  return useQuery({
    queryKey: ['tag'],
    queryFn: async () => {
      const { data } = await instance.get<GetTagDataType>('/statistics/tag');
      return data;
    },
  });
};
