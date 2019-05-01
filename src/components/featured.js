import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../config';
import { IconGithub, IconExternal } from './icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
const { colors, fontSizes, fonts } = theme;

const FeaturedContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-block;
`;
const FeaturedGrid = styled.div`
  position: relative;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const FeaturedLabel = styled.h4`
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const ProjectDescription = styled.div`
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  padding: 10px;
  margin-left: -150px;
  grid-column: 1 / -1;
  display: flex;
  font-size: ${fontSizes.medium};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
    color: ${colors.white};
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smallish};
    color: ${colors.lightSlate};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `};
  }
`;
const Links = styled.div`
  display: flex-end;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const FeaturedImg = styled(Img)`
  height: auto;
  width: 90%;
  border-radius: ${theme.borderRadius};
  position: relative;
  display: flex;
  mix-blend-mode: multiply;
  ${media.tablet`
    object-fit: cover;
    width: 100%;
    height: auto;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;
const ImgContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 0px;
  display: flex;
  grid-column: 6 / -1;
  background-color: ${colors.green};
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${FeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: relative;
    width: 80%;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
`;
const Row = styled.div`
display: flex;
`;
const Project = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(12, 1fr);
  align-items: left;
  margin-bottom: 10px;
  ${media.thone`margin-bottom: 20px;`};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${ContentContainer} {
      text-align: left;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
   
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${ImgContainer} {
      grid-column: 6 / 1;
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 1;
      `};
    }
  }
`;

class Featured extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.revealRefs = [];
  }

  componentDidMount() {
    ScrollReveal().reveal(this.featured, srConfig());
    this.revealRefs.forEach(ref => ScrollReveal().reveal(ref, srConfig()));
  }

  render() {
    const { data } = this.props;
    const featuredProjects = data.filter(({ node }) => node.frontmatter.show === 'true');

    return (
      <FeaturedContainer id="blog">
        <Heading ref={el => (this.featured = el)}>Some Things I&apos;ve Built</Heading>
        <FeaturedGrid>
          {featuredProjects &&
            featuredProjects.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { external, title, tech, github, cover } = frontmatter;

              return (
                <Project key={i} ref={el => (this.revealRefs[i] = el)}>
                  <ContentContainer>
                    <FeaturedLabel>Featured Project</FeaturedLabel>
                    <ProjectName>
                      {external ? (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          {title}
                        </a>
                      ) : (
                        title
                      )}
                    </ProjectName>
                    
                      <ImgContainer>
                      <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                      <FeaturedImg fluid={cover.childImageSharp.fluid} />
                      </ImgContainer>             
                      
                      {tech && (
                      <TechList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </TechList>
                    )}
                    <Links>
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="Github Link">
                          <IconGithub />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          <IconExternal />
                        </a>
                      )}
                    </Links>
                    
                
               
                  </ContentContainer>
                  
                  
                </Project>
              );
            })}
        </FeaturedGrid>
      </FeaturedContainer>
    );
  }
}

export default Featured;
