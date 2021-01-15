import styled, { css } from 'styled-components';
import React from 'react';
import Button from './Button';

export const Wrapper = styled.div`
  padding: 140px 0rem 1rem 0rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.homepage.appleFont};
    font-weight: 900;
    font-size: 2.5rem;
    line-height: 3rem;
    color: ${theme.homepage.white};
    margin: 0.5rem 0;
    text-align: center;
    max-width: 100%;
    margin: auto;

    ${props =>
      props.left &&
      `
    text-align: left;
  
  `}

    ${props => props.theme.breakpoints.md} {
      font-size: 1.5rem;
      line-height: 1.2;
    }
  `};
`;

export const ContentBlock = styled.div`
  ${({ theme, cols, small, center }) => css`
    display: grid;
    grid-template-columns: repeat(${cols || '3'}, 1fr);
    grid-gap: 3rem 5rem;
    font-size: 19px;
    line-height: 23px;
    color: ${theme.homepage.muted};

    ${props => props.theme.breakpoints.lg} {
      font-size: 16px;
      grid-template-columns: repeat(1, 1fr);
    }

    ${props => props.theme.breakpoints.sm} {
      font-size: 16px;
    }

    ${center && `text-align: center;`}

    h3 {
      font-style: normal;
      font-weight: 900;
      font-size: ${small ? '19px' : '23px'};
      line-height: 32px;
      color: ${theme.homepage.white};
      margin-bottom: 16px;

      ${props => props.theme.breakpoints.sm} {
        font-size: ${small ? '16px' : '18px'};
      }
    }
  `};
`;

export const ContentBlockImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin-bottom: 32px;
  box-sizing: border-box;
  border-radius: 8px;
  ${props => {
    if (props.bg) {
      return `  background: #${props.bg};`;
    }

    if (!props.noBorder) {
      return `  border: 1px solid #343434;`;
    }

    return null;
  }}
`;

export const FeaturedImage = styled.div`
  width: 100%;
  height: 440px;
  background: url(${props => props.bg});
  margin-bottom: 56px;
  margin-top: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid #242424;
  background-size: cover;
  border-radius: 4px;

  ${props => props.theme.breakpoints.md} {
    height: auto;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quote = styled.section`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    margin: 30px auto;
    font-weight: 900;
    font-size: 48px;
    line-height: 57px;
    color: #ffffff;

    ${props => props.theme.breakpoints.sm} {
      font-size: 32px;
    }
  }

  h4 {
    font-weight: normal;
    font-size: 23px;
    line-height: 27px;
    color: #ffffff;
    ${props => props.theme.breakpoints.sm} {
      font-size: 16px;
    }
  }
`;

export const CTABottom = () => (
  <div
    css={`
      margin: auto;
      display: flex;
      justify-content: center;
      margin: 96px auto;
    `}
  >
    <Button cta href="https://codesandbox.io/s/">
      Get Started
    </Button>
  </div>
);
