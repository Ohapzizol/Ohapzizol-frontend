import styled from 'styled-components';
import { Button, GoBackHeader, Input, Template } from '@/components';

const SignupPage = () => {
  return (
    <Template style={{ height: '100vh' }}>
      <GoBackHeader />
      <Container>
        <Wrapper>
          <Title>로그인</Title>
          <InputWrapper>
            <Input label='아이디' />
            <Input label='비밀번호' type='password' />
          </InputWrapper>
        </Wrapper>
        <Button
          guideMessage='아지 계정이 없으신가요?'
          highlight='회원가입하기'
          link='signup'
        >
          로그인
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
