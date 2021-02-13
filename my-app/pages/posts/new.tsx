import React, { useRef } from "react";
import {useRouter} from "next/router";

interface FormData {
  title: string;
  body: string;
}

const New: React.FC = () => {
  const router = useRouter();
  const titlePost = useRef<HTMLInputElement>(null);
  const bodyPost = useRef<HTMLTextAreaElement>(null);

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    const titleData : string = titlePost.current!.value;
    const bodyData : string = bodyPost.current!.value;



    if (!bodyData || !titleData) return;

    const data : FormData = {
      title: titleData,
      body: bodyData
    };

    const res = await fetch("https://simple-blog-api.crew.red/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if(!!res) router.push('/')
  };

  return (
    <div>
      <h2>new post</h2>
      <form action="" onSubmit={handleSubmitPost}>
        <input type="text" ref={titlePost} placeholder="title" />
        <textarea name="body-post" ref={bodyPost} placeholder="text" />
        <button>create</button>
      </form>
    </div>
  );
};

export default New;
