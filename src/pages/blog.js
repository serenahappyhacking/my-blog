import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostList from "../components/PostList"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

BloPost.PropTypes = {
  data: PropTypes.object.isRequired,
}

export const blogPostQuery = graphql`
  query($slug: String!) {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "")
          }
        }
      }
    }
  }
`
