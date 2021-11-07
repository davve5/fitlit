import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavItemProps {
		href: string;
		label: string;
		icon: React.ReactNode;
}

const NavItem = ({ label, icon, href }: NavItemProps) => {
		const { asPath } = useRouter();

		const isPageActive = asPath === href;

		return (
				<Link href={href}>
						<li
								className={clsx(
										'w-full px-3 py-2 rounded-lg',
										'text-gray-400',
										'flex items-center',
										'hover:bg-gray-100 hover:cursor-pointer',
										// mobile
										'm-2 w-full h-full justify-center',
										// md and up
										'md:mx-0 md:my-2 md:justify-start md:h-auto',
										{
												'bg-gray-100': isPageActive,
										}
								)}
						>
						<span className={clsx(
								'flex items-center justify-center',
								// mobile
								'text-xl',
								// md and up
								'md:mr-2',
						)}>
								{icon}
						</span>
								<span className={clsx(
										'items-center justify-center',
										// mobile
										'hidden',
										// md and up
										'md:flex',
								)}>{label}</span>
						</li>
				</Link>
		);
}

export default NavItem;
