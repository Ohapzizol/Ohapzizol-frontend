import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 16px 12px;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.gray4};
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Time = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.primary1};
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Tag = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.primary1};
`;

export const Description = styled.div`
  width: 250px;
  font-size: 12px;
  color: ${({ theme }) => theme.gray2};
`;

export const HStack = styled.div<{ align: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: space-between;
`;

export const Cash = styled.div`
  font-size: 16px;
`;
