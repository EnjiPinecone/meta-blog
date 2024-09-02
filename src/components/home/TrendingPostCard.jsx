import React from 'react'

export default function TrendingPostCard({ title, image, tags}) {
  return (
    <div className='relative h-80 w-full'>
        <img src={image} className=' w-full h-full object-cover  rounded-xl' />
        <div className='absolute bottom-0 left-0 space-y-4 text-white p-7'>
            <div className='flex gap-1 text-xs'>
                {tags.map((tag, idx) => <div key={idx} className=' rounded-md bg-[#4B6BFB] py-1 px-2.5'>{tag}</div>)}
            </div>
            <h3 className=' text-lg font-bold'>{title}</h3>
        </div>
    </div>
  )
}
