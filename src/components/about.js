import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '../styles';
const { colors, fontSizes, fonts } = theme;

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 100%;
  max-width: 750px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  margin-top: 300px;
  max-width: 300px;
  margin-left: 70px;

  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;
const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: contrast(99%);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
//  border-radius: 100%;
const AvatarContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.white};
  margin-left: 0px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

/* const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`; */

const Hi = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`;
const Name = styled.h2`
  font-size: 80px;
  color: ${colors.lightSlate};
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.lightSlate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
/* const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`; */
const EmailLink = styled.a`
  ${mixins.bigButton};
  font-size: ${fontSizes.smallish};
  margin: 30px;
`;

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.about, srConfig());
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { skills, avatar } = frontmatter;

    return (
      <AboutContainer id="about" ref={el => (this.about = el)}>
        <FlexContainer>
          <ContentContainer>
            <Hi>Hi , my name is </Hi>
            <Name>Jonas Kgomo.</Name>
            <Subtitle>I am a software developer.</Subtitle>

            <div dangerouslySetInnerHTML={{ __html: html }} />

            <SkillsContainer>
              {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
            <EmailLink> Get in touch! </EmailLink>
          </ContentContainer>
          <PicContainer>
            <AvatarContainer>
              <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
            </AvatarContainer>
          </PicContainer>
        </FlexContainer>
      </AboutContainer>
    );
  }
}

export default About;
