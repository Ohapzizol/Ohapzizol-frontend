import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPayment } from '@/apis';
import { CashCard, Template, GoBackHeader } from '@/components';

const SignupPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data } = useGetPayment(params.date!);
  if (!data) {
    navigate(-1);
    return false;
  }
  return (
    <Template>
      <GoBackHeader />
      <Container>
        <Title>하루 정산하기</Title>
        <Stack gap={8}>
          <Text>현재 자산: {data?.balance}원</Text>
          <SubText>
            순수익: <span>{data?.profit}원</span>
          </SubText>
        </Stack>
        <div style={{ width: '100%', backgroundColor: 'white' }}>
          <CashHeader>
            <div>총: {data?.payments.length}개</div>
            <div>{params.date}</div>
          </CashHeader>
          {data?.payments.map((item) => (
            <CashCard key={item.id} {...item} />
          ))}
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
