import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.main`
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
    padding: 16px 14px;
    &:focus-visible,
    &:active {
      outline: 2px solid var(--white);
      outline-offset: -1px;
    }
  }
`;
const FullPageBg = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default FullPageBg;
