import React from 'react';

import Header from '@/components/Layouts/Header';
import Layout from '@/components/Layouts/Layout';
import Seo from '@/components/Seo';

const HomePage = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <Header />

      <main className='flex flex-col lg:flex-row bg-gray-50'>wadawd</main>
    </Layout>
  );
};

export default HomePage;

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
