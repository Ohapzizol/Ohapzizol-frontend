import styled from 'styled-components';
import { CashCard, Template, GoBackHeader } from '@/components';

const SignupPage = () => {
  return (
    <Template>
      <GoBackHeader />
      <Container>
        <Title>하루 정산하기</Title>
        <Stack gap={8}>
          <Text>현재 자산: 82,800원</Text>
          <SubText>
            순수익: <span>12345원</span>
          </SubText>
        </Stack>
        <div style={{ width: '100%', backgroundColor: 'white' }}>
          <CashHeader>
            <div>총: 17개</div>
            <div>2024-07-24</div>
          </CashHeader>
          <CashCard />
          <CashCard />
          <CashCard />
        </div>
      </Container>
    </Template>
  );
};

export default SignupPage;

const Container = styled.div`
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

const Text = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const SubText = styled.div`
  font-size: 18px;
`;

const Stack = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap }) => `${gap}px`};
`;

const CashHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  div {
    margin: 12px;
  }
`;
