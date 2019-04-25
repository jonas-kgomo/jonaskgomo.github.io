import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Head from './head';
import Loader from './loader';
import Header from './header';
import Social from './social';
import Email from './email';
import Footer from './footer';
import { nav } from '../config';
import styled from 'styled-components';
import { GlobalStyle, theme } from '../styles';
const { colors, fontSizes, fonts } = theme;


const Container = styled.div`
background: white;
a {
  color: #3333FF;
  font-style: italic; 
}
`


const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: visible;
  z-index: -99;
  &:hover {
    background-color: ${colors.lightSlate};
  }
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.green};
    background-color: ${colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;

class Display extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
  };

  state = {
    isLoading: false,
  };

  finishLoading = () => this.setState({ isLoading: false });

  render() {
    const { children, location } = this.props;
    const { isLoading } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query DisplayQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
        render={({ site }) => (
          <div id="root">
            <Head metadata={site.siteMetadata} />
            <Container>
            <GlobalStyle  />
            <SkipToContent href="#content">Skip to Content</SkipToContent>

            {isLoading ? (
              <Loader finishLoading={this.finishLoading} />
            ) : (
              <div className="container">
                {location && nav && <Header location={location} navLinks={nav} />}
                <Email/>
                
                <div css={{ margin: `4rem auto`, maxWidth: 750}}>{children}</div>
              
              </div>
              
            )}
     </Container>
          </div>
        )}
      />
    );
  }
}

export default Display;
