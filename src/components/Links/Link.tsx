import clsx from 'clsx';
import React from 'react';

import UnstyledLink, {
		UnstyledLinkProps,
} from '@/components/links/UnstyledLink';


type LinkProps = {} & UnstyledLinkProps;

const Link = ({ children, className, ...rest }: LinkProps) => {
		return (
				<UnstyledLink
						{...rest}
						className={clsx('px-1 text-sm text-center font-medium text-accent-600 hover:underline focus:outline-none', className)}
				>
						{children}
				</UnstyledLink>
		);
}

export default Link;
