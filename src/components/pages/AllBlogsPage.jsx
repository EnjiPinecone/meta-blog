import React, { useEffect, useState } from "react";
import SinglePostCard from '../home/SinglePostCard';

export default function AllBlogPosts() {
  const [selectedTag, setselectedTag] = useState("all");
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(9);

  const fetchPosts = (tag) => {
    let url = `https://dev.to/api/articles?per_page=${page}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  };

  const handleLoadMore = () => {
    setPage(page + 3)
  }

  useEffect(() => {
    fetchPosts("all");
  }, []);

  useEffect(() => {
    fetchPosts(selectedTag);
  }, [selectedTag, page]);

  return (
    <div className="flex flex-col gap-8 mt-[100px]">
      <h2 className=" text-3xl font-bold">All blog posts</h2>
      <div className="flex justify-between text-[#495057] ">
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {posts.map((post, idx) => (
          <SinglePostCard
            key={idx}
            title={post.title}
            image={post.cover_image}
            tags={post.tag_list.splice(0, 1)}
            created_at={post.created_at}
          />
        ))}
        <div></div>
        <div className="flex justify-center ">
          <button className="p-3 border rounded-lg" onClick={()=>{handleLoadMore()}}>Load More</button>
        </div>
      </div>
    </div>
  );
}
