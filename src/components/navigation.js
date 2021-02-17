import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const NavigationStyles = styled.nav`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border: 0;
    position: relative;
    background-color: transparent;
    z-index: 1;

    &:focus,
    &:active {
      outline: 2px solid var(--white);
      outline-offset: 4px;
    }

    &:after,
    &:before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--white);
      transition: transform 0.15s ease;
    }
    &:after {
      top: 7px;
    }
    &:before {
      bottom: 7px;
    }
    > span {
      width: 100%;
      height: 3px;
      background-color: var(--white);
      transition: opacity 0.15s ease;
    }

    ${({ navOpened }) =>
      navOpened &&
      css`
        &:focus,
        &:active {
          outline: 2px solid var(--black);
        }
        > span {
          opacity: 0;
        }
        &:after {
          background-color: var(--black);
          transform: translateY(10px) rotate(-45deg);
        }
        &:before {
          background-color: var(--black);
          transform: translateY(-10px) rotate(45deg);
        }
      `}
  }

  ul {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    background-color: var(--white);
    width: 100%;
    list-style-type: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
    justify-content: space-evenly;
    height: 100vh;
    &.show {
      pointer-events: all;
      opacity: 1;
    }
    a {
      font-size: 18px;
      font-family: 'Alata';
      color: var(--black);
      font-weight: 600;
      padding: 26px 12px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      transition: background-color 0.15s ease;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--white);
        width: 100%;
        height: 1px;
        transform-origin: center;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      &:hover,
      &.active {
        color: var(--white);
        background-color: var(--black);
      }
      @media (min-width: 767px) {
        font-size: 22px;
      }
    }
  }

  @media (min-width: 1024px) {
    ul {
      opacity: 1;
      position: relative;
      flex-direction: row;
      height: unset;
      background-color: unset;
      pointer-events: all;

      a {
        color: var(--white);
        font-size: 16px;
        line-height: 1;
        position: relative;
        margin: 0 12px;

        &:first-of-type {
          margin: 0 12px 0 0;
        }

        &:last-of-type {
          margin: 0 0 0 12px;
        }

        &:focus-visible,
        &:active {
          outline: 2px solid var(--white);
          outline-offset: -1px;
        }

        &:hover,
        &.active {
          color: var(--white);
          background-color: unset;
          &:after {
            transform: scaleX(1);
          }
        }
      }
    }

    button {
      display: none;
    }
  }
`;

const Navigation = ({ isNavigationOpened, setIsNavigationOpened }) => {
  return (
    <NavigationStyles navOpened={isNavigationOpened}>
      <button onClick={() => setIsNavigationOpened(!isNavigationOpened)}>
        <span />
      </button>
      <ul className={isNavigationOpened && 'show'}>
        <Link activeClassName="active" to="/about">
          <li>About</li>
        </Link>
        <Link activeClassName="active" to="/careers">
          <li>Careers</li>
        </Link>
        <Link activeClassName="active" to="/events">
          <li>Events</li>
        </Link>
        <Link activeClassName="active" to="/products">
          <li>Products</li>
        </Link>
        <Link activeClassName="active" to="/support">
          <li>Support</li>
        </Link>
      </ul>
    </NavigationStyles>
  );
};

export default Navigation;
