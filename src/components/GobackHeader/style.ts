import styled from 'styled-components';

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  img {
    cursor: pointer;
    position: relative;
    width: 32px;
    height: 32px;
    left: 24px;
    &:hover {
      background-color: ${({ theme }) => theme.primary4};
      border-radius: 16px;
    }
  }
`;
