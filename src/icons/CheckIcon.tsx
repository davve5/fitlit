import clsx from 'clsx';
import React from 'react';

const CheckIcon: React.FC<{
  className?: string;
}> = ({ className, ...props }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    className={clsx('h-6 w-6', className)}
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
    <path
      d='M7 13l3 3 7-7'
      stroke='#fff'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default CheckIcon;
