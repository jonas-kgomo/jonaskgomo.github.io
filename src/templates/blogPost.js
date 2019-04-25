import React from 'react';
import Display from '../components/display';
import { graphql } from 'gatsby'
import styled from 'styled-components'
import 'katex/dist/katex.min.css'
import { theme, mixins, media, Section, Heading } from '../styles';
import Img from 'gatsby-image'
import { Link } from 'gatsby';
import { IconLogo } from '../components/icons';
//import { biopic } from "./biopic.png";
const { colors, fontSizes, fonts } = theme;

const biopic = 'https://drive.google.com/file/d/17cV-giOZ9D6fgnfKO45hG-TnyaJT3ZXE/view?usp=sharing';

const AboutContainer = styled(Section)`
  position: relative;
`;
const Datum = styled.h2`
font-size: ${fontSizes.smallish};
font-weight: normal;
margin-left: 150px;
display: flex-end;
color: ${colors.darkGrey};
font-family: ${fonts.SFMono};
margin-top: 10px;
padding-left: 100px;
`;
const HomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;


function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title, date, avatar } = post.frontmatter;

    return (
        <Display style= "margin: 50px">
             
            <div>
                <h1>{title}</h1>
                
                <HomeButton to="/">Go Home</HomeButton>
                <a href="/" aria-label="Home">
                   <IconLogo /> 
               </a>
               <Datum>{post.frontmatter.date}</Datum>
               <div style= {{ color: 'black'}} dangerouslySetInnerHTML={{ __html: post.html }} />
                <div
            style={{
              display: `flex`,
              marginBottom: 5,
            }}
          > 
         <img src={biopic} alt="Logo"
             style={{
            marginRight: 50,
            marginBottom: 50,
            marginBottom: 50,
            minWidth: 50,
            width: 300,
            height: 220,
            borderRadius: `100%`,
          }}/>
            <Img 
                fluid={post.frontmatter.cover.childImageSharp.fluid} 
                style={{
                marginRight: 50,
                marginBottom: 50,
                marginBottom: 50,
                minWidth: 50,
                width: 300,
                height: 220,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `100%`,
              }}
            />
            <p>
           
              Written by <strong>{title}</strong> who lives and works in San
              Francisco building useful things.
                         
            </p>
          </div>
            </div>
       
        </Display>
    )
}

export default BlogPost;


export const query = graphql`

 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        path
        title
        date
        cover {
            childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
       }
   }
}`

/*
            <div style= {{ color: 'black'}} dangerouslySetInnerHTML={{ __html: post.html }} />
                <div
            style={{
              display: `flex`,
              marginBottom: 12,
            }}
          >
            <Img 
                fluid={post.frontmatter.cover.childImageSharp.fluid} 
                style={{
                marginRight: 50,
                marginBottom: 50,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `100%`,
              }}
            />
            <p>
              Written by <strong>{title}</strong> who lives and works in San
              Francisco building useful things.
                         
            </p>
          </div>






cover {
    childImageSharp {
        fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    */