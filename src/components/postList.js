import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => {
        const { title, date } = post.frontmatter

        return (
          <div>
            <span>{title}</span>
            <span>{date}</span>
          </div>
        )
      })}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostList
