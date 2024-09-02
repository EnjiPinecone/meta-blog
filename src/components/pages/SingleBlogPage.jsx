import React from 'react'
import { useRouter } from 'next/router'

export default function SingleBlogPage() {
  const router = useRouter()
  return (
    <div>SingleBlogPage: {router.query.slug}</div>
  )
}
