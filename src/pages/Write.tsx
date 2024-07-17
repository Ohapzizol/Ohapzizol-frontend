import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from '@/hooks/useForm';
import { Button, GoBackHeader, Input, Template } from '@/components';
import { PostPaymentType, usePostPayment } from '@/apis';

const WritePage = () => {
  const [typ, setTyp] = useState('1');
  const { form, handleChange } = useForm<Omit<PostPaymentType, 'typ'>>({
    title: '',
    value: 0,
    description: '',
    time: '',
    tag: '',
  });

  const { title, value, description, time, tag } = form;

  const { mutate } = usePostPayment();

  return (
    <Template style={{ height: '100vh' }}>
      <GoBackHeader />
      <Container>
        <Wrapper>
          <Title>작성하기</Title>
          <InputWrapper>
            <Input
              name='title'
              value={title}
              onChange={handleChange}
              label='이름'
            />
            <Stack>
              <TextareaTitle>시간</TextareaTitle>
              <TimeInput
                type='time'
                name='time'
                value={time}
                onChange={handleChange}
              />
            </Stack>
            <Input
              name='tag'
              value={tag}
              onChange={handleChange}
              label='태그'
            />
            <Stack>
              <ButtonWrapper>
                <CashButton
                  $isSelected={typ === '1'}
                  onClick={() => setTyp('1')}
                >
                  수입
                </CashButton>
                <CashButton
                  $isSelected={typ === '2'}
                  onClick={() => setTyp('2')}
                >
                  지출
                </CashButton>
              </ButtonWrapper>
              <Input
                name='value'
                value={value}
                onChange={handleChange}
                label='비용'
                unit={typ === '1' ? '수입' : '지출'}
              />
            </Stack>
            <Stack>
              <TextareaTitle>설명</TextareaTitle>
              <Textarea
                name='description'
                value={description}
                onChange={handleChange}
              />
            </Stack>
          </InputWrapper>
        </Wrapper>
        <Button
          disabled={!title || !value || !time}
          onClick={() => mutate({ ...form, typ })}
        >
          작성완료
        </Button>
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

const TimeInput = styled.input`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid gray;
  background-color: transparent;
`;
