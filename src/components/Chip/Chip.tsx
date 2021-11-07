import clsx from 'clsx';
import React from 'react';

interface ChipProps {
		color: string;
		children: React.ReactNode;
		className?: string;
}

const Chip = ({ children, color, className }: ChipProps) => {
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
}

export default Chip;
