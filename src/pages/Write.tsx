import styled from 'styled-components';
import { Button, GoBackHeader, Input, Template } from '@/components';
import { TimePicker } from 'antd';
import { useState } from 'react';

const WritePage = () => {
  const [isIncome, setIsIncome] = useState(true);
  return (
    <Template style={{ height: '100vh' }}>
      <GoBackHeader />
      <Container>
        <Wrapper>
          <Title>작성하기</Title>
          <InputWrapper>
            <Input label='이름' />
            <Stack>
              <TextareaTitle>시간</TextareaTitle>
              <TimePicker />
            </Stack>
            <Input label='태그' />
            <Stack>
              <ButtonWrapper>
                <CashButton
                  $isSelected={isIncome}
                  onClick={() => setIsIncome(true)}
                >
                  수입
                </CashButton>
                <CashButton
                  $isSelected={!isIncome}
                  onClick={() => setIsIncome(false)}
                >
                  지출
                </CashButton>
              </ButtonWrapper>
              <Input label='비용' unit={isIncome ? '수입' : '지출'} />
            </Stack>
            <Stack>
              <TextareaTitle>설명</TextareaTitle>
              <Textarea />
            </Stack>
          </InputWrapper>
        </Wrapper>
        <Button>작성완료</Button>
      </Container>
    </Template>
  );
};

export default WritePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CashButton = styled.button<{ $isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 16px;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.primary1 : theme.primary4};
  color: white;
  font-size: 12px;
  &:hover {
    opacity: 0.8;
  }
`;

const Stack = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -5px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  z-index: 99;
`;

const TextareaTitle = styled.span`
  font-size: 12px;
  color: gray;
  margin-bottom: 8px;
`;

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.gray4};
  border-radius: 5px;
  padding: 12px 15px;
  color: black;
  font-size: 12px;
  &:focus {
    border-color: ${({ theme }) => theme.primary1};
  }
  &::placeholder {
    color: ${({ theme }) => theme.gray5};
    font-size: 16px;
  }
`;
