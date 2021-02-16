import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './header';
import '@fontsource/alata';
import '@fontsource/josefin-sans/300.css';

const GlobalStyles = createGlobalStyle`
  html {
    --white: #fff;
    --black: #2d2d2d;
    --mobile-nav-height: 80px;
    @media (min-width: 767px) {
      --mobile-nav-height: 120px;
    }
  }

  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Josefin Sans";
    height: 100vh;
    overflow: hidden;
  }

  h1 {
    font-family: "Alata";
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
};

export default Layout;
