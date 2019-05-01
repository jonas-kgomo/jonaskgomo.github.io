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

const biopic = 'https://bytebucket.org/jonas-kgomo/port-folio/raw/80953f58a50abc5978c4a6f22906f8dd2d3eed63/src/templates/biopic.png';
// 'https://bitbucket.org/jonas-kgomo/port-folio/src/master/src/content/about/mewire.png'
const AboutContainer = styled(Section)`
  position: relative;
`; 
const Logo = styled.div`
  ${mixins.flexRight};
  margin-bottom: 20;
  margin: 20;
  margin-left: 500px;
  display: flex;
  color: ${colors.darkNavy};
 
`;
const LogoLink = styled(Link)`
  color: ${colors.navy};  
  width: 30px;
  height: 30px;
  &:hover,
  &:focus {
    svg {
      fill: ${colors.navy};
      stroke: ${colors.navy};
      
    }
  }
  svg {
    fill: none;
    color: ${colors.navy};
    transition: ${theme.transition};
    user-select: none;
  }
`;
const Auth = styled .h6`
font-size: ${fontSizes.small};
font-weight: normal;
`;
const hr =  styled.hr`{ 
    display: block;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 10;
    margin-right: 10;
    border-style: inset;
    border-width: 1px;
}
`;
const Datum = styled.h6`
font-size: ${fontSizes.smallish};
font-weight: normal;
margin-left: 150px;
display: flex-end;
color: ${colors.darkGrey};
font-family: ${fonts.SFMono};
margin-top: 1px;
padding-left: 5px;
padding-top: px; 
`;
const HomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;


function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title, date, avatar, disc } = post.frontmatter;

    return (
        <Display style="margin: 50px;">
             
            <div>
                <h1>{title}</h1>
             
                 <div
                   style={{
              display: `flex`,
              marginBottom: 20,
            }}
          > 
         <img src={biopic} alt="Home"
                       style={{
            
                         marginRight: 20,
                         marginBottom: 20,
                         marginTop: 20,
                         minWidth: 60,
                         width: 60,
                         height: 60,
                         borderRadius: `100%`,
                        }}
                        />
                        
            
            
                   <Auth>Jonas Kgomo <br/>
                   {post.frontmatter.date}
                   </Auth>
                   <Logo style={{marginTop: 20}}>
                          <LogoLink to="/">
                           <IconLogo />
                         </LogoLink>
                </Logo>
                </div> 
              
             
               <div style= {{ color: 'black'}} dangerouslySetInnerHTML={{ __html: post.html }} />
               
               <hr style={{margin: 50, borderWidth: 1}} />

                 <div
                   style={{
                       display: `flex`,
                      marginTop: 20,

                   }}
                  > 
          <img src={biopic} alt="Logo"
             style={{
            marginRight: 20,
            marginBottom: 20,
            minWidth: 100,
            maxWidth:300,
            width: 250,
            height: 200,
            borderRadius: `100%`,
          }}
            
              imgStyle={{
                borderRadius: `100%`,
              }}
            />
            <p style={{padding: 30 }}>
            <br/>
            Written by <strong>Jonas</strong> on building useful things. 
            Thanks for reading 
                         
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
       }
   }
}`

/* This would be nie to include discription in the blog
       <p>
             {post.frontmatter.disc}           
            </p>
    */