import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import FullPageBg from '../components/fullPageBg';

const NotFoundPage = () => {
  return (
    <Layout>
      <FullPageBg>
        <h1>Oooops! Page not found!</h1>
        <Link to="/">Go back to home</Link>
      </FullPageBg>
    </Layout>
  );
};

export default NotFoundPage;
