import React, { useEffect, useState } from "react";
import {format} from "date-fns";
import Link from "next/link";
const TOP = 4
const PER_PAGE = 1;

export default function CarouselPosts() {
  const [post, setPost] = useState();
  const [page, setPage] = useState(1);

  const fetchAllPosts = () => {
    fetch(
      `https://dev.to/api/articles?top=${TOP}&per_page=${PER_PAGE}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("carousel")
        console.log(data);
        setPost(data[0]);
      });
  };

  const handleRight= () =>{
    setPage(page + 1)
  }

  const handleLeft= () =>{
    if(page > 1){
      setPage(page - 1)
    }
  }
  useEffect(() => {
    fetchAllPosts();
  }, [page]);

  if (!post) {
    return null
  }

  return (
    <div >
      <Link href={`/blog/${post.id}`} className="flex flex-nowrap w-[1216px overflow-hidden relative">
      
        <div className="w-[1216px] h-[600px] overflow-hidden">
          <img src={post.cover_image} alt="" className="w-full h-full rounded-xl"/>
          <div className='absolute bottom-10 left-0 space-y-10 text-white p-10  bg-gray-50 ml-5 w-[50%] rounded-xl'>
            <div className="flex flex-col gap-7">

            <div className=' rounded-md bg-[#4B6BFB] py-1 px-2.5 w-min text-xl'>
              {post.tag_list[0]}
              </div>

                <h3 className=' text-3xl font-bold text-black'>{post.title}</h3>
                <span className="text-[#97989F] text-lg ">
                {format(new Date(post.created_at), "MMMM d, yyy")}
                </span>
            </div>
          </div>
        </div>
      </Link>
      <button type="button" className="p-2 rounded-sm border" onClick={()=>{handleLeft()}}>
        {"<"}
      </button>
      <button type="button" className="p-2 rounded-sm border" onClick={()=>{handleRight()}}>
        {">"}
      </button>
    </div>
  );
}
