import clsx from 'clsx';
import React from 'react';

interface IconProps {
		icon: React.ReactNode;
		className: string;
}

const Icon = ({ icon, className }: IconProps) => (
		<span className={clsx(
				'w-16 h-16 rounded-full text-2xl',
				'flex items-center justify-center',
				`bg-accent-100 text-accent-800`,
				className
		)}>
				{icon}
		</span>
);

export default Icon;
