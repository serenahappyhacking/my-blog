import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(5)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Serena Wang
        </h3>
      </Link>
      <Link
        to={`/blogs/`}
        css={css`
          float: right;
        `}
      >
        Blogs
      </Link>
      <Link
        to={`/thoughts/`}
        css={css`
          float: right;
        `}
      >
        Thoughts
      </Link>
      {children}
    </div>
  )
}
