import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const AboutStyles = styled.main`
  background-color: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
  top: calc(-1 * var(--mobile-nav-height));
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: calc(100vh + var(--mobile-nav-height));
  a {
    margin-top: 24px;
    font-size: 24px;
    color: var(--white);
  }
`;

const About = () => {
  return (
    <Layout>
      <AboutStyles>
        <h1>About page here</h1>
        <Link to="/">Go back to home</Link>
      </AboutStyles>
    </Layout>
  );
};

export default About;
