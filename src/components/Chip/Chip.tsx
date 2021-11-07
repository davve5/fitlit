import clsx from 'clsx';
import React from 'react';

const Chip: React.FC<{
  color: string;
  children: React.ReactNode;
  className?: string;
}> = ({ children, color, className }) => {
  return (
    <span
      className={clsx(
        'px-2 py-1 rounded-xl',
        'text-center font-semibold text-xs',
        color,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
