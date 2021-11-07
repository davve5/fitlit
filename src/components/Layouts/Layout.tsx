import * as React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className='h-screen selection:bg-accent-500 selection:text-white'>
   {children}
   </div>
);

export default Layout;
