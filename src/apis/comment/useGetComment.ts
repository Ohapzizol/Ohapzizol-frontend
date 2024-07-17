import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';

export type CommentType = {
  name: string;
  nickname: string;
  balance: string;
  evaluation: string;
};

export const useGetComment = () => {
  return useQuery({
    queryKey: ['commment'],
    queryFn: async () => {
      const { data } = await instance.get<CommentType>('/comment');
      return data;
    },
  });
};
