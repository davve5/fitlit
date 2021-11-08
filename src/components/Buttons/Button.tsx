import clsx from 'clsx';
import React from 'react';

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300 rounded-lg inline-flex items-center justify-center h-10 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-opacity-80 cursor-pointer',
  disabled: 'opacity-50 cursor-not-allowed',
  size: {
    xs: 'text-xs px-3 py-2 my-2',
    sm: 'text-sm px-3 py-2 my-2',
    md: 'text-sm px-5 py-2.5 my-2.5',
    lg: 'text-base px-5 py-3 my-2',
    xl: 'text-base px-6 py-3.5 my-3.5',
  },
  variant: {
    primary:
      'bg-accent-500 hover:bg-accent-400 text-white focus:ring-accent-500',
    secondary: 'bg-white hover:bg-gray-50 text-gray-500 focus:ring-gray-500',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
} as const;

type ButtonProps = {
  icon?: React.ReactNode;
  variant?: keyof typeof classes.variant;
  size?: keyof typeof classes.size;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit';
};

const Button = ({
  children,
  className,
  disabled = false,
  variant = 'primary',
  size = 'md',
  type = 'button',
  icon,
  ...rest
}: ButtonProps) => {
  const hasIcon = !!icon;
  const hasChildren = !!children;

  return (
    <button
      {...rest}
      disabled={disabled}
      type={type}
      className={clsx(
        classes.base,
        classes.variant[variant],
        classes.size[size],
        disabled && classes.disabled,
        className
      )}
    >
      {hasIcon && (
        <span
          className={clsx({
            'mr-2': hasChildren,
          })}
        >
          {icon}
        </span>
      )}
      {hasChildren && <span>{children}</span>}
    </button>
  );
};

export default Button;
