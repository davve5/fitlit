import React from 'react';

interface ErrorProps {
  error?: string;
  touched?: boolean;
}

const Error = ({ touched, error }: ErrorProps) =>
  touched && error ? (
    <span className='absolute bottom-0 left-0 text-red-600 text-xs font-semibold'>
      {error}
    </span>
  ) : null;

export default Error;
