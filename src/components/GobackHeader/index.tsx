import { useNavigate } from 'react-router-dom';
import { GoBackArrow } from '@/assets';
import * as _ from './style';

const GoBackHeader = () => {
  const navigate = useNavigate();
  return (
    <_.Header>
      <img onClick={() => navigate(-1)} src={GoBackArrow} alt='GoBackArrow' />
    </_.Header>
  );
};

export default GoBackHeader;
