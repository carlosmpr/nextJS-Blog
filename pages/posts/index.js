
import Allpost from "../../componnents/posts/Allpost"
import { getAllPosts } from "../../lib/posts-util"
export default function AllpostPage(props) {
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
    return (
     <Allpost posts={props.posts}/>
    )
  }
  

  export function getStaticProps(){
      const allPosts = getAllPosts()

      return{
          props:{
              posts:allPosts
          }
      }
  }