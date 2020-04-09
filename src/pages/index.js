import React from "react"
import styled from 'styled-components';
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = styled(Link) `
   color: #000;
   text-decoration: none;

   h1 {
     font-size: 20px;
     transition: opacity 130ms;

     &:hover {
       opacity: 1.0;
     }
   }
`

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {edges.map(item => {
          const { node } = item;
          const { frontmatter } = node;

          return (
            <Post to={`/${frontmatter.path}`} key={frontmatter.path}>
              <h1>{frontmatter.title}</h1>
            </Post>
          )
        })}
      </div>
      <Post to="/page-2/">Go to page 2</Post>
    </Layout>
  )
}

export const pageQuery = graphql`

  {
    allMarkdownRemark {
      edges {
        node {
          html 
            frontmatter {
              title
              date
              path
          }
        }
      }
      }
  }
  `;


export default IndexPage
