import PostContent from "../../componnents/posts/PostDetail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
export default function PostDetailPage(props) {
  return <PostContent post={props.post}/>;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilesnames = getPostsFiles();
  const slugs = postFilesnames.map((fileName) => fileName.replace(/\.md$/, ""));
  

  return {
    paths: slugs.map((slug) => {
      console.log(slug)
     return {
       params:{
         slug: slug
       }
     }
    }),
    fallback: false,
  };
}
