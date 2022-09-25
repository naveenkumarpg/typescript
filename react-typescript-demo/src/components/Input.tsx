import React from 'react';

type InputProps = {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: InputProps) => {
  return <input value={props.value} onChange={props.handleOnChange} />;
};
