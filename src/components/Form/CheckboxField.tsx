import React from 'react';

const CheckboxField: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    name: string;
  }
> = ({ id, name, children, disabled = false }) => (
  <div className='flex items-center'>
    <input id={id} name={name} type='checkbox' disabled={disabled} />
    <label htmlFor={id} className='ml-2 block text-sm text-gray-900'>
      {children}
    </label>
  </div>
);

export default CheckboxField;
