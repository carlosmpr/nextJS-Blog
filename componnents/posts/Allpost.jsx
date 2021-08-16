import React from 'react'
import clases from './allpost.module.css'
import PostsGrid from './PostsGrid'
export default function Allpost(props) {
    return (
       <section className={clases.posts}>
           <h1>All Posts</h1>
           <PostsGrid posts={props.posts}/>
       </section>
    )
}
