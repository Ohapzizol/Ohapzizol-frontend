import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';

export type PredictCommentType = {
  predict: string;
};

export const useGetPredictComment = () => {
  return useQuery({
    queryKey: ['predict'],
    queryFn: async () => {
      const { data } = await instance.get<PredictCommentType>(
        '/comment/predict'
      );
      return data;
    },
  });
};
