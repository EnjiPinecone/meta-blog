import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function SingleBlogPage() {
  const router = useRouter()
  const postId = router.query.slug

  const [post, setPost] = useState();
  const [page, setPage] = useState(1);

  const fetchPost = () => {
    fetch(
      `https://dev.to/api/articles/${postId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  };

  useEffect(() => {
    fetchPost();
  }, [page]);

  return (
    <div>SingleBlogPage: {postId}</div>
  )
}
