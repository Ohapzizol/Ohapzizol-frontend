import styled from 'styled-components';
import {
  Calendar,
  LineChart,
  PieChartOne,
  PieChartTwo,
  Template,
} from '@/components';
import { Link } from 'react-router-dom';
import { useGetComment, useGetPredictComment } from '@/apis';

const CalendarComponents = () => {
  const { data: comment } = useGetComment();
  const { data: predictComment } = useGetPredictComment();
  return (
    <Template>
      <Wrapper>
        <NameWrapper>
          <NameTag>{comment?.name}</NameTag> <IdTag>{comment?.nickname}</IdTag>
        </NameWrapper>
        <CommentBox>
          {comment?.balance}
          <br />
          {predictComment?.predict}
        </CommentBox>
        <Calendar>
          <CalendarTitleBox>
            <CalendarTitle>캘린더</CalendarTitle>
            <Link to='/write'>
              <CalendarButton>지출 작성하기</CalendarButton>
            </Link>
          </CalendarTitleBox>
          <Calendar.Header />
          <Calendar.Body />x
        </Calendar>
        <LineChart />
        <PieChartOne />
        <PieChartTwo />
      </Wrapper>
    </Template>
  );
};

export default CalendarComponents;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  height: 100%;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

const NameTag = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const IdTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.primary1};
  font-size: 12px;
  color: white;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const CalendarTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

const CalendarTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const CalendarButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.primary1};
  color: white;
  font-size: 12px;
  &:hover {
    opacity: 0.8;
  }
`;
