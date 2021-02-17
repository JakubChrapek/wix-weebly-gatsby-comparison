import { Link } from 'gatsby';
import React from 'react';
import FullPageBg from '../components/fullPageBg';
import Layout from '../components/layout';

const Support = () => {
  return (
    <Layout>
      <FullPageBg>
        <h1>Support page here</h1>
        <Link to="/">Go back to home</Link>
      </FullPageBg>
    </Layout>
  );
};

export default Support;
