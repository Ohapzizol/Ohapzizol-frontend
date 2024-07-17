import * as _ from './style';

const CashCard = () => {
  return (
    <_.Container>
      <_.HStack align='start'>
        <_.Stack>
          <_.Name>먹을거</_.Name>
          <_.Description>
            ㅁㄴ알;ㅏㅣㅁㄴㅇ러ㅣ;ㅁㄴㅇ러닝라ㅓㄴ이라ㅓasdfasdf
          </_.Description>
        </_.Stack>
        <_.Time>15:30</_.Time>
      </_.HStack>

      <_.HStack align='end'>
        <_.Stack>
          <_.Cash>지출: 18700원</_.Cash>
          <_.AllOfMoney>총 자산: 82800원</_.AllOfMoney>
        </_.Stack>
        <_.Tag>#식품</_.Tag>
      </_.HStack>
    </_.Container>
  );
};

export default CashCard;
