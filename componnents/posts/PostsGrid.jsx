import React from 'react'
import PostItem from './PostItem'
import clases from './post-grid.module.css'
export default function PostsGrid(props) {
    const {posts} = props
    return (
      <ul className={clases.grid}>
          {posts.map(post => <PostItem key={post.slug} post={post}/>)}
      </ul>
    )
}
