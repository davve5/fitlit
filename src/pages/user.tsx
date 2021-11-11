import React from 'react';

import Layout from '@/components/Layouts/Layout.server';
import Seo from '@/components/Seo';

interface UserPageProps {}

const UserPage = ({}: UserPageProps) => (
  <Layout>
    <Seo title='Me' />

    <main>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque
      ipsa labore provident voluptate. At delectus, dolorem doloribus eius,
      harum illum magni maiores mollitia natus placeat quas totam ut.
      Architecto!
    </main>
  </Layout>
);

export default UserPage;
