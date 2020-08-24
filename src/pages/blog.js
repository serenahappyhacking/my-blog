import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostList from "../components/PostList"

const BlogPost = ({ data }) => {
  const posts = data.React
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

BloPost.PropTypes = {
  posts: PropTypes.object.isRequired,
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
