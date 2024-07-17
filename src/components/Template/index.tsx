import { HTMLAttributes, ReactNode } from 'react';
import * as _ from './style';

interface TemplateProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Template = ({ children, ...props }: TemplateProps) => {
  return <_.Wrapper {...props}>{children}</_.Wrapper>;
};

export default Template;
