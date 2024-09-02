import React, { useEffect, useState } from 'react'
import SinglePostCard from './SinglePostCard'

const USER_NAME = "gereltuyamz"
const PER_PAGE = 9
export default function AllBlogPosts() {
  const [posts, setPosts] = useState([])

  const fetchAllPosts = () => {
    fetch(`https://dev.to/api/articles?username=${USER_NAME}&per_page=${PER_PAGE}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPosts(data)
      })
  }

  useEffect(() => {
    fetchAllPosts()
  }, [])
  

  return (
    <div className='flex flex-col gap-8'>
      <h2 className=' text-3xl font-bold'>All blog posts</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {posts.map((post, idx) => <SinglePostCard key={idx} title={post.title} image={post.cover_image} tags={post.tag_list} edited_at={post.edited_at} />)}
      </div>
    </div>
  )
}
