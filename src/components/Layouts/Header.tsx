import * as React from 'react';
import { FaRegUser } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { CgComponents } from 'react-icons/cg'

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'home', icon: <BiHomeAlt /> },
  { href: '/user', label: 'user', icon: <FaRegUser /> },
  { href: '/login', label: 'login', icon: <FiLogIn /> },
  { href: '/components', label: 'components', icon: <CgComponents /> },
];

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='flex items-center justify-between h-14 layout'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Home
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label, icon }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
