import { PostI, CommentI } from "../../interfeses/post";
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: PostI = await getPost(params.id);
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "*" } }],
    fallback: true,
  };
};

const getPost: PostI = async (id: string | number) => {
  const res = await fetch(
    `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
  );
  const data = res.json();
  return data;
};

interface OnePost {
  post: PostI;
}

const Post: React.FC = ({ post }: OnePost) => {
  if (!post) {
    return null;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div>
        <p>comments</p>
        <ul>
          {!!post.comments.length &&
            post.comments.map((comment: CommentI) => (
              <li key={comment.id}>
                <p>{comment.body}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Post;
