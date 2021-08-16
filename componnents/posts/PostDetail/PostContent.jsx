import React from 'react'
import clases from './postContent.module.css'
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown'
export default function PostContent(props) {

    const {post} = props 
    console.log(post)
    const Dummy_post =
        {
            slug:'getting-started',
            title:'Getting Started with NextJx',
            image:'next.png',
            content:'# this is a first post',
            date:'2022-02-10'
              }
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    return (
        <article className={clases.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown >
                {post.content}
            </ReactMarkdown>
        </article>
    )
}
