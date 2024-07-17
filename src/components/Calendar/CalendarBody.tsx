import styled from 'styled-components';
import useCalendarContext from './useCalendarContext';
import { useGetDaily } from '@/apis';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CalendarBody = () => {
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const { daysInMonth, selectedDate, currentDate } = useCalendarContext();

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { data } = useGetDaily(selectedDate.date);
  useEffect(() => {
    if (data) setIsLoading(false);
  }, [data]);

  if (isLoading) return false;

  const handleClick = (date: string) => {
    if (confirm('현재 ' + date + '날의 가계부를 확인하겠습니까?')) {
      navigate(date);
    }
  };

  return (
    <Container>
      <DayWrapper>
        {weeks.map((week, index) => (
          <CalendarItem $isSunday={index === 0} key={week}>
            {week}
          </CalendarItem>
        ))}
      </DayWrapper>
      <DayWrapper>
        {daysInMonth.map((date) => {
          const hello = data?.payments.find(
            (payment) => payment.day === +date.date.split('-')[2]
          );
          return (
            <Day
              key={date.date}
              onClick={() => handleClick(date.date)}
              $isCurrentMonth={currentDate.month === date.month}
              $isSelectedDate={selectedDate.date === date.date}
              $isSunday={date.dayIndexOfWeek === 0}
              className={date.month}
              $hasIt={!hello}
              disabled={!hello}
            >
              <span>{date.day}</span>
              {hello && <span>{hello.profit}원</span>}
            </Day>
          );
        })}
      </DayWrapper>
    </Container>
  );
};

export default CalendarBody;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  padding: 25px 0;
  border-radius: 20px;
`;

const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  grid-row-gap: 15px;
`;
const CalendarItem = styled.div<{ $isSunday: boolean }>`
  display: flex;
  justify-content: center;
  color: ${({ $isSunday }) => ($isSunday ? 'red' : 'black')};
`;

const Day = styled.button<{
  $isCurrentMonth?: boolean;
  $isSelectedDate: boolean;
  $isSunday: boolean;
  $hasIt: boolean;
}>`
  cursor: pointer;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 12px;
  border: ${({ theme, $hasIt }) =>
    $hasIt ? 'none' : `5px solid ${theme.primary3}`};
  color: ${({ theme, $isCurrentMonth, $isSelectedDate, $isSunday }) =>
    $isSelectedDate
      ? 'black'
      : !$isCurrentMonth
      ? theme.gray4
      : $isSunday
      ? 'red'
      : 'black'};
  background-color: transparent;
  &:disabled {
    cursor: no-drop;
  }
  span {
    font-size: 12px;
  }
`;
