import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';

import InputErrorMsg from '@/components/Form/InputErrorMsg';

const InputField: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    name: string;
    label: string;
    id: string;
    type: 'text' | 'password';
  }
> = ({ id, label, className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={className}>
      <label htmlFor={id} className='block text-sm font-medium'>
        {label}
      </label>
      <div className='mt-1 pb-6 relative'>
        <input
          id={id}
          className={clsx(
            'w-full border-gray-300 rounded-lg shadow-sm focus:border-accent-500 focus:ring-accent-500',
            meta.error && meta.touched ? 'border-red-300' : 'border-gray-300'
          )}
          {...field}
          {...props}
        />
        <InputErrorMsg error={meta.error} touched={meta.touched} />
      </div>
    </div>
  );
};

export default InputField;
