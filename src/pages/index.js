import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"

const sLink = styled(Link)`
  font-family: "Patua One", sans-serif;
  justify-self: end;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1.1rem;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.white : theme.colors.red};
  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.red : theme.colors.white};
`

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            color: lightpink;
          `}
        >
          我的博客
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link
                css={css`
                  text-decoration: none;
                `}
                to="/sweet-pandas-eating-sweets"
                activeStyle={{ color: "red" }}
                partiallyActive={true}
              >
                {node.frontmatter.title}
              </Link>
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            date
            title
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`
