import React from 'react'
import clases from './feature.module.css'
import PostsGrid from '../posts/PostsGrid'
export default function Features(props) {
    const {posts} = props
    return (
        <section className={clases.latest}>
            <h2>Featured Posts</h2>
        <PostsGrid posts={props.posts} />
        </section>
    )
}
