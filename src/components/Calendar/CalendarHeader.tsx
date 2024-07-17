import styled from 'styled-components';
import useCalendarContext from './useCalendarContext';
import { LeftArrow, RightArrow } from '@/assets';

const CalendarHeader = () => {
  const { dispatch, currentDate } = useCalendarContext();

  return (
    <Container>
      <ChangeButton>
        <Button onClick={dispatch.handlePrevYear}>
          <img src={LeftArrow} alt='LeftArrow' />
        </Button>
        <span>{currentDate.year}</span>
        <Button onClick={dispatch.handleNextYear}>
          <img src={RightArrow} alt='RightArrow' />
        </Button>
      </ChangeButton>
      <ChangeButton>
        <Button onClick={dispatch.handlePrevMonth}>
          <img src={LeftArrow} alt='LeftArrow' />
        </Button>
        <span>{currentDate.month}</span>
        <Button onClick={dispatch.handleNextMonth}>
          <img src={RightArrow} alt='RightArrow' />
        </Button>
      </ChangeButton>
    </Container>
  );
};

export default CalendarHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChangeButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  font-size: 20px;
  line-height: 25.6px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.primary2};
  }
`;
