import Link from "next/link";
import React from "react";
import { PostI } from "../interfeses/post";
import { GetStaticProps } from "next";

interface AllPosts {
  posts: PostI;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts: AllPosts = await getPosts();
  return { props: { posts } };
};

const getPosts: AllPosts = async () => {
  const res = await fetch("https://simple-blog-api.crew.red/posts");
  const data = await res.json();
  return data;
};

const Index: React.FC = (props: AllPosts) => {
  const { posts } = props;

  return (
    <div>
      <h1>Hi</h1>
      <Link href={"/posts/new"}>
        <a>new post</a>
      </Link>
      {posts.map((post: PostI) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Index;
//
// // Index.getInitialProps = async () => {
// //    return  axios.get('https://simple-blog-api.crew.red/posts').then(res => {
// //         return res.data;
// //     });
// //
// // };
