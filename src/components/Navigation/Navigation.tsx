import React from 'react';
import clsx from 'clsx';
import { FaRegUser } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { CgComponents } from 'react-icons/cg'

import NavItem from '@/components/Navigation/NavItem';

interface NavigationProps {}

const links = [
		{ href: '/', label: 'home', icon: <BiHomeAlt /> },
		{ href: '/user', label: 'user', icon: <FaRegUser /> },
		{ href: '/login', label: 'login', icon: <FiLogIn /> },
		{ href: '/components', label: 'components', icon: <CgComponents /> },
]

const Navigation = ({  }: NavigationProps) => (
		<section className={clsx(
				'absolute bg-white',
				// mobile
				'bottom-0 left-0 w-screen h-24',
				// md and up
				'md:top-0 md:w-48 md:h-screen',
		)}>
				<ul className={clsx(
						'flex items-center h-full p-4',
						// mobile
						'justify-between',
						// md and up
						'md:flex-col md:h-min md:justify-start',
				)}>
						{
								links.map(({ label, href, icon }) => (
									<NavItem key={`${label}-${href}`} label={label} href={href} icon={icon} />
								))
						}
				</ul>
		</section>
);

export default Navigation;
