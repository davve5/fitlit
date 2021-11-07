import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/Layouts/Layout';
import Link from '@/components/Links/Link';
import Seo from '@/components/Seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <RiAlarmWarningFill
              size={60}
              className='text-yellow-300 animate-flicker drop-shadow-glow'
            />
            <h1 className='mt-8'>Page Not Found</h1>
            <Link className='mt-4' href='/'>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default NotFoundPage;
