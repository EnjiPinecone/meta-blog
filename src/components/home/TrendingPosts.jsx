import React, { useEffect, useState } from "react";
import TrendingPostCard from "./TrendingPostCard";

const USER_NAME = "gereltuyamz";
const PER_PAGE = 4;
export default function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  const fetchTrendingPosts = () => {
    fetch(
      `https://dev.to/api/articles?username=${USER_NAME}&state=rising&per_page=${PER_PAGE}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchTrendingPosts();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h2 className=" text-3xl font-bold">Trending</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {posts.map((post, idx) => (
          <TrendingPostCard
            key={idx}
            title={post.title}
            image={post.cover_image}
            tags={post.tag_list}
          />
        ))}
      </div>
    </div>
  );
}
