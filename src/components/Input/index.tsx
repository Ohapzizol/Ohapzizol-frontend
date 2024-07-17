import { InputHTMLAttributes, useState } from 'react';
import * as _ from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  unit?: string;
}

export interface AgeLabelProps {
  $isFocused: boolean;
  $isTop: boolean;
}

const Input = ({ label, unit, value, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <_.InputWrapper>
      <_.AgeLabel
        $isFocused={isFocused}
        $isTop={typeof value === 'number' || isFocused || !!value}
      >
        {label}
      </_.AgeLabel>
      <p>{unit}</p>
      <_.Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        {...props}
      />
    </_.InputWrapper>
  );
};

export default Input;
