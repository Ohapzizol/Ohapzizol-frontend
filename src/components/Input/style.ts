import styled from 'styled-components';
import { AgeLabelProps } from '.';

export const InputWrapper = styled.label`
  position: relative;
  width: 436px;
  p {
    position: absolute;
    right: 8px;
    bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    float: right;
    margin-top: 60px;
  }
`;

export const AgeLabel = styled.label<AgeLabelProps>`
  position: absolute;
  bottom: ${({ isTop }) => (isTop ? '2.5rem' : '1rem')};
  font-size: 12px;
  color: ${({ theme, isFocused }) => (isFocused ? theme.primary1 : 'gray')};
  transition: all 0.25s ease-in-out;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 30px;
  padding-bottom: 8px;
  padding-left: 8px;
  border-bottom: 2px solid gray;
  background-color: transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.gray1};
  &::placeholder {
    float: right;
    font-size: 16px;
  }
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.primary1};
  }
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
