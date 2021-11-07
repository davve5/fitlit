import React from 'react';

const InputErrorMsg: React.FC<{
  error?: string;
  touched?: boolean;
}> = ({ touched, error }) =>
  touched && error ? (
    <span className='absolute bottom-0 left-0 text-red-600 text-xs font-semibold'>
      {error}
    </span>
  ) : null;

export default InputErrorMsg;
