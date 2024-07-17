import styled from 'styled-components';
import { Button, Input, Template } from '@/components';

const SignupPage = () => {
  return (
    <Template style={{ height: '100vh' }}>
      <Container>
        <Wrapper>
          <Title>회원가입</Title>
          <InputWrapper>
            <Input label='아이디' />
            <Input label='비밀번호' type='password' />
            <Input label='이름' />
            <Input label='현재 자산' unit='원' />
          </InputWrapper>
        </Wrapper>
        <Button
          guideMessage='이미 계정이 있으신가요?'
          highlight='로그인하기'
          link='login'
        >
          회원가입
        </Button>
      </Container>
    </Template>
  );
};

export default SignupPage;

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
  gap: 32px;
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
