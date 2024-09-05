import React, { useEffect, useState } from "react";
import Link from "next/link";
import SinglePostCard from "../home/SinglePostCard";

const PER_PAGE = 9;

const TAGS = ["all", "design", "travel", "fashion", "technology", "branding"];

export default function AllBlogsPage() {
  const [selectedTag, setselectedTag] = useState("all");
  const [posts, setPosts] = useState([]);

  const fetchPosts = (tag) => {
    let url = `https://dev.to/api/articles?per_page=${PER_PAGE}`;
    if (tag != "all") {
      url = `https://dev.to/api/articles?tag=${tag}&per_page=${PER_PAGE}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchPosts("all");
  }, []);

  useEffect(() => {
    fetchPosts(selectedTag);
  }, [selectedTag]);

  return (
    <div className="flex flex-col gap-8">
      <h2 className=" text-3xl font-bold">All blog posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <SinglePostCard
            key={idx}
            title={post.title}
            image={post.cover_image}
            tags={post.tag_list.splice(0, 1)}
            edited_at={post.edited_at}
          />
        ))}
      </div>
    </div>
  );
}
