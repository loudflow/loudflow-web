import React from 'react';

import { Layout, SEO } from '../components';

const NotFoundPage = () => (
  <Layout hideSubscription={true}>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
  </Layout>
);

export default NotFoundPage;
