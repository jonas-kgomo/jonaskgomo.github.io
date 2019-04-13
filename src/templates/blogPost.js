import React from 'react';
import Display from '../components/display';
import { graphql } from 'gatsby'
import styled from 'styled-components'



function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;

    return (
        <Display >
            <div>
                <h1 style= {{ color: 'black' }}>{title}</h1>
              
                <div style= {{ color: 'black' }} dangerouslySetInnerHTML={{ __html: post.html }} />
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

