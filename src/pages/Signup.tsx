import styled from 'styled-components';
import { Button, GoBackHeader, Input, Template } from '@/components';
import { useForm } from '@/hooks/useForm';
import { SingupPropsType, useSignup } from '@/apis';

const SignupPage = () => {
  const { form, handleChange } = useForm<SingupPropsType>({
    id: '',
    name: '',
    password: '',
    balance: 0,
  });
  const { id, name, password, balance } = form;
  const { mutate } = useSignup();
  return (
    <Template style={{ height: '100vh' }}>
      <GoBackHeader />
      <Container>
        <Wrapper>
          <Title>회원가입</Title>
          <InputWrapper>
            <Input
              name='id'
              onChange={handleChange}
              value={id}
              label='아이디'
            />
            <Input
              name='password'
              onChange={handleChange}
              value={password}
              label='비밀번호'
              type='password'
            />
            <Input
              name='name'
              onChange={handleChange}
              value={name}
              label='이름'
            />
            <Input
              name='balance'
              onChange={handleChange}
              value={`${balance}`}
              label='현재 자산'
              unit='원'
            />
          </InputWrapper>
        </Wrapper>
        <Button
          guideMessage='이미 계정이 있으신가요?'
          highlight='로그인하기'
          link='login'
          disabled={Boolean(!id || !name || !password)}
          onClick={() => mutate(form)}
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
