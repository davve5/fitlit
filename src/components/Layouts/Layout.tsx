import clsx from 'clsx';
import React from 'react';

const Layout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={clsx(
      'flex flex-col h-screen selection:bg-accent-500 selection:text-white bg-gray-200',
      className
    )}
  >
    {children}
  </div>
);

export default Layout;
