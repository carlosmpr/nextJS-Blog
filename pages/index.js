import Hero from "../componnents/homePage/Hero"
import Features from "../componnents/homePage/Features"
import { getFeatiredPosts } from "../lib/posts-util"
const Dummy_POSTs = [
  {
slug:'getting-started',
title:'Getting Started with NextJx',
image:'next.png',
excerpt:'Nextjs is the React framework for porduction for server site rending',
date:'2022-02-10'
  },
  {
    slug:'getting-started',
    title:'Getting Started with NextJx',
    image:'next.png',
    excerpt:'Nextjs is the React framework for porduction for server site rending',
    date:'2022-02-10'
      }
]


export default function Home(props) {
  return (
  <>
<Hero />
<Features posts={props.posts}/>
  </>
  )
}

export function getStaticProps () {
  const featuredPosts = getFeatiredPosts()

  return {
    props:{
      posts:featuredPosts
    },
    revalidate:500
  }
}
