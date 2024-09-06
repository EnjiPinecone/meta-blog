import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SingleBlogPage() {
  const router = useRouter();
  const postId = router.query.slug;

  const [post, setPost] = useState();
  const [page, setPage] = useState(1);

  const fetchPost = () => {
    fetch(`https://dev.to/api/articles/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  };

  useEffect(() => {
    fetchPost();
  }, [page]);

  if (!post) {
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl">{post.title}</h1>
      <img src={post.user.profile_image} alt="" className="w-9 h-9" />
      <img src={post.cover_image} alt="" className="w-full h-full rounded-xl" />
    </div>
  );
}
