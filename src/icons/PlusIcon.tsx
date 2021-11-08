import clsx from 'clsx';
import React from 'react';

const PlusIcon: React.FC<{
  className?: string;
}> = ({ className }) => (
  <svg
    className={clsx('h-6 w-6', className)}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M12 4v16m8-8H4'
    />
  </svg>
);

export default PlusIcon;
