import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../config';
import { IconGithub, IconExternal } from './icons';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme, mixins, media, Section, Heading } from '../styles';
const { colors, fontSizes, fonts } = theme;

const Datum = styled.h5`
font-size: ${fontSizes.smallish};
font-weight: normal;
margin-left: 120px;
dısplay: grid;
color: ${colors.green};
font-family: ${fonts.SFMono};
margin-top: 10px;
padding-right: 40px;
`;
const Descript = styled.div`
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  font-weight: 300;
  padding: 10px;
  margin-left: -150px;
  grid-column: 1 / -1;
  display: flex;
  font-size: ${fontSizes.medium};
  ${media.thone`
    background-color: ${colors.lightNavy};
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
  padding: 20px 20px 20px;
`};
${media.phablet`padding: 20px 25px 20px;`};
`;
const FeaturedLabel = styled.h4`
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  margin-left: 150px;
  display: flex-end;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-left: 50px;
`;
const ProjectName = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 0px;
  color: ${colors.lightestSlate};
  ${media.tablet`font-size: 22px;`};
  &:hover,
  &:focus,
  &:active {
    color: ${colors.green};
    outline: 0; 
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: flex;
    width: 1px;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${colors.lightestSlate};
    transition: ${theme.transition};
  }
  a {
    ${media.tablet`display: flex;`};
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
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 2px 0 10px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smallish};
    color: ${colors.lightSlate};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 2px;
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
      width: 25px;
      height: 25px;
    }
  }
`;
const FeaturedImg = styled(Img)`
  height: auto;
  width: 50%;
  border-radius: ${theme.borderRadius};
  position: relative;
  display: flex;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(80%);
  ${media.tablet`
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
 
  background-color: 'white';
  transition: ${theme.transition};
  ${media.tablet`height: auto;`};
  ${media.thone`
     padding-left: 50px;
     grid-column: 6 / -1;
      `};
  &:hover,
  &:focus {    
    background: transpaernt;
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
    left: 400px;
    right: 100px;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    mix-blend-mode: screen;
    ${media.thone`
    left: 10px;
    right: 0;
    `};
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
  margin-bottom: 20px;
  ${media.thone`margin-bottom: 1px;`};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${ContentContainer} {
      text-align: left;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 20px 20px 20px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    } 
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    
  }
`;
class Write extends Component {
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
              const { external, title, tech, github, cover, path } = frontmatter;
              //const { posts } = data.allMarkdownRemark;
         
              return (
                <Project key={i} ref={el => (this.revealRefs[i] = el)}>
                  <ContentContainer>
                    
                      <Row> 
                      <Link to={node.frontmatter.path}>
                       <ProjectName>{node.frontmatter.title}</ProjectName>
                      </Link>
                       
                      <FeaturedLabel>Jonas Kgomo | {node.frontmatter.date} </FeaturedLabel>
                                     
                      </Row>

                      <ImgContainer>   
                      <Descript>{node.frontmatter.disc}</Descript>
                      <FeaturedImg fluid={cover.childImageSharp.fluid} />
                      </ImgContainer> 
                      
                    
                    {tech && (
                      <TechList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </TechList>
                    )}
                  </ContentContainer>
                </Project>
              );
            })}
        </FeaturedGrid>
      </FeaturedContainer>
    );
  }
}

export default Write;
