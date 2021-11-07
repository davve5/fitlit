import React from 'react';

import Layout from '@/components/Layouts/Layout';
import MealsList from '@/components/MealsList/MealsList';
import Seo from '@/components/Seo';
import Header from '@/components/Layouts/Header';

const HomePage = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <Header />

      <main className='flex flex-col lg:flex-row bg-gray-50'>
        <MealsList />
        <MealsList />
        <MealsList />
        <MealsList />
      </main>
    </Layout>
  );
}

export default HomePage;

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
