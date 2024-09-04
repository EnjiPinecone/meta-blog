import React from 'react'
import AllBlogPosts from '../home/AllBlogPosts'
import TrendingPosts from '../home/TrendingPosts'
import CarouselPosts from '../home/CarouselPosts'

export default function HomePage() {
  return (
    <div className='px-5 md:py-5 space-y-[100px]'>
      <CarouselPosts />
      <TrendingPosts />
      <AllBlogPosts />
    </div>
  )
}
