import { PaymentsType, useDeletePayment } from '@/apis';
import * as _ from './style';
import { TrashCan } from '@/assets';

const CashCard = ({
  id,
  title,
  value,
  description,
  time,
  tag,
}: PaymentsType) => {
  const { mutate } = useDeletePayment(id);
  const onButtonClick = () => {
    if (confirm('이 가계부를 삭제하시겠습니까?')) mutate();
  };
  return (
    <_.Container>
      <_.HStack align='start'>
        <_.Stack>
          <_.Name>{title}</_.Name>
          <_.Description>{description}</_.Description>
        </_.Stack>
        <_.Time>{time}</_.Time>
      </_.HStack>

      <_.HStack align='end'>
        <_.Stack style={{ alignItems: 'end' }}>
          <TrashCan onClick={onButtonClick} />
          <_.Cash style={{ color: value > 0 ? 'blue' : 'red' }}>
            {value > 0 ? '수입' : '지출'}: {value}원
          </_.Cash>
        </_.Stack>
        {tag && <_.Tag>#{tag}</_.Tag>}
      </_.HStack>
    </_.Container>
  );
};

export default CashCard;
