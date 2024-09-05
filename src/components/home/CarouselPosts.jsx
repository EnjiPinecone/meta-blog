import React, { useEffect, useState } from "react";

const USER_NAME = "gereltuyamz";
const PER_PAGE = 4;

export default function CarouselPosts() {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = () => {
    fetch(
      `https://dev.to/api/articles?username=${USER_NAME}&per_page=${PER_PAGE}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div>
      <div>
        <button type="button" className="p-2 rounded-sm border">
          {"<"}
        </button>
        <button type="button" className="p-2 rounded-sm border">
          {">"}
        </button>
      </div>
    </div>
  );
}
