import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import useWindowSize from '../utils/useWindowSize';

const BgImageStyles = styled(BackgroundImage)`
  position: relative;
  top: ${({ top }) => top};
`;

const BgImage = ({
  children,
  tag = 'main',
  backgroundColor,
  top,
  mobileFileName = 'image-hero-mobile.jpg',
  desktopFileName = 'image-hero-desktop.jpg',
}) => {
  const width = useWindowSize();
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        mobile: file(relativePath: { eq: "image-hero-mobile.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktop: file(relativePath: { eq: "image-hero-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  // Set ImageData.
  const desktopImageData = data.desktop.childImageSharp.fluid;
  const mobileImageData = data.mobile.childImageSharp.fluid;

  return (
    <BgImageStyles
      Tag={tag}
      fluid={width < 768 ? mobileImageData : desktopImageData}
      backgroundColor={backgroundColor}
      top={top}
    >
      {children}
    </BgImageStyles>
  );
};

export default BgImage;
