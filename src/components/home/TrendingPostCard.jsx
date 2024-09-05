import Link from 'next/link'
import React from 'react'

export default function TrendingPostCard({ id, title, image, tags}) {
  return (
    <Link href={`/blog/${id}`} className='relative h-80 w-full '>
        <img src={image} className=' w-full h-full object-cover  rounded-xl brightness-50' />
        <div className='absolute bottom-10 left-0 space-y-4 text-white p-7 h-[128px]'>
            <div className='flex gap-1 text-sm'>
                {tags.map((tag, idx) => <div key={idx} className=' rounded-md bg-[#4B6BFB] py-1 px-2.5'>{tag}</div>)}
            </div>
            <h3 className=' text-lg font-bold'>{title}</h3>
        </div>
    </Link>
  )
}
