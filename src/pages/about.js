import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import FullPageBg from '../components/fullPageBg';

const About = () => {
  return (
    <Layout>
      <FullPageBg>
        <h1>About page here</h1>
        <Link to="/">Go back to home</Link>
      </FullPageBg>
    </Layout>
  );
};

export default About;
