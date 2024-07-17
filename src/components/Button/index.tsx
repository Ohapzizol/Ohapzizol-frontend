import { Link } from 'react-router-dom';
import * as _ from './style';

type ButtonProps = {
  guideMessage?: string;
  highlight?: string;
  link?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  guideMessage,
  highlight,
  link,
  children,
  ...props
}: ButtonProps) => {
  return (
    <_.Container>
      <_.ButtonWrapper {...props}>{children}</_.ButtonWrapper>
      {link && (
        <_.GuideMessage>
          {guideMessage}
          <Link to={`/${link}`}>
            <span> {highlight}</span>
          </Link>
        </_.GuideMessage>
      )}
    </_.Container>
  );
};

export default Button;
