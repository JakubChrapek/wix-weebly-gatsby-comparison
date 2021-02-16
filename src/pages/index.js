import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import mobileHeroBg from '../images/image-hero-mobile.jpg';
import desktopHeroBg from '../images/image-hero-desktop.jpg';
import useWindowSize from '../utils/useWindowSize';

const HeroStyles = styled.main`
  background: url(${mobileHeroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  top: calc(-1 * var(--mobile-nav-height));

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 1.1;
    color: var(--white);
    padding: 20px 24px;
    border: 2px solid var(--white);
    @media (min-width: 360px) {
      font-size: 38px;
    }
  }
  @media (min-width: 767px) {
    background-image: url(${desktopHeroBg});
    h2 {
      font-size: 80px;
      padding: 40px 60px 40px 50px;
    }
  }
  @media (min-width: 1024px) {
    h2 {
      padding: 40px 100px 40px 50px;
    }
  }
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  height: calc(100vh + var(--mobile-nav-height));
  display: flex;
  align-items: center;
  padding: 0 24px;
  @media (min-width: 767px) {
    padding: 0 60px;
  }
  @media (min-width: 1024px) {
    padding: 0 60px 80px;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const IndexPage = () => {
  const width = useWindowSize();
  return (
    <Layout>
      <title>Virtual reality business solutions · loopstudios</title>
      <HeroStyles>
        <HeroContainer>
          <h2>
            Immersive {width > 1024 && <br />}experiences{' '}
            {width > 1024 && <br />}
            that {width < 767 && <br />}
            deliver
          </h2>
        </HeroContainer>
      </HeroStyles>
    </Layout>
  );
};

export default IndexPage;
