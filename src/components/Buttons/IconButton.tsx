import clsx from 'clsx';
import React from 'react';

const variants = {
		primary: 'text-accent-600 hover:bg-accent-200 active:text-accent-800',
} as const;

const sizes = {
		xs: 'text-sm p-1',
		sm: 'text-sm p-2',
		md: 'text-base p-3',
		lg: 'text-md p-4',
		xl: 'text-lg p-5',
} as const;

type IconButtonProps = {
		variant?: keyof typeof variants;
		size?: keyof typeof sizes;
		disabled?: boolean;
		className?: string;
		children?: React.ReactNode;
		type?: 'button' | 'submit';
};

const IconButton = ({
	children,
	className,
	disabled = false,
	variant = 'primary',
 size = 'md',
 type = 'button',
 ...rest
}: IconButtonProps) => {

		return (
				<button
						{...rest}
						disabled={disabled}
						type={type}
						className={clsx(
								'disabled:cursor-not-allowed',
								'font-medium rounded-full',
								'inline-flex items-center justify-center',
								'focus:outline-none cursor-pointer',
								variants[variant],
								sizes[size],
								className
						)}
				>
						{children}
				</button>
		);
}

export default IconButton;
