import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from './navigation';

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
  @media (min-width: 767px) {
    padding: 32px 60px;
    --mobile-nav-height: 120px;
  }

  background-color: transparent;
  position: relative;
  z-index: 1;
  a {
    text-decoration: none;
  }
  > a {
    &:focus,
    &:active {
      outline: 2px solid white;
      outline-offset: 4px;
    }
  }

  h1 {
    font-size: 1.8rem;
    letter-spacing: 0.8px;
    line-height: 1em;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    padding: 0 60px;
    height: var(--mobile-nav-height);
    h1 {
      font-size: 2rem;
    }
  }
`;

const LogoStyles = styled(Link)`
  z-index: 1;
  h1 {
    color: ${({ dark }) => (dark ? 'var(--black)' : 'var(--white)')};
  }
`;

const Logo = ({ isNavigationOpened }) => {
  return (
    <LogoStyles dark={isNavigationOpened} to="/">
      <h1>loopstudios</h1>
    </LogoStyles>
  );
};

const Header = () => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);

  return (
    <HeaderStyles>
      <Logo isNavigationOpened={isNavigationOpened} />
      <Navigation
        isNavigationOpened={isNavigationOpened}
        setIsNavigationOpened={setIsNavigationOpened}
      />
    </HeaderStyles>
  );
};

export default Header;
