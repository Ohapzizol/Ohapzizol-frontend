import styled from 'styled-components';
import { Button, GoBackHeader, Input, Template } from '@/components';
import { useForm } from '@/hooks/useForm';
import { LoginRequsetType, useLogin } from '@/apis/login/useLogin';

const SignupPage = () => {
  const { form, handleChange } = useForm<LoginRequsetType>({
    id: '',
    password: '',
  });
  const { id, password } = form;
  const { mutate } = useLogin();
  return (
    <Template style={{ height: '100vh' }}>
      <GoBackHeader />
      <Container>
        <Wrapper>
          <Title>로그인</Title>
          <InputWrapper>
            <Input
              name='id'
              value={id}
              onChange={handleChange}
              label='아이디'
            />
            <Input
              name='password'
              value={password}
              onChange={handleChange}
              label='비밀번호'
              type='password'
            />
          </InputWrapper>
        </Wrapper>
        <Button
          guideMessage='아지 계정이 없으신가요?'
          highlight='회원가입하기'
          link='signup'
          onClick={() => mutate(form)}
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
