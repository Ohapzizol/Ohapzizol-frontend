import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const GuideMessage = styled.div`
  font-size: 12px;
  font-weight: light;
  color: black;
  span {
    font-size: 12px;
    font-weight: light;
    color: ${({ theme }) => theme.primary1};
  }
`;

export const ButtonWrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.primary1};
  border-radius: 8px;
  font-size: 16px;
  color: white;
`;
