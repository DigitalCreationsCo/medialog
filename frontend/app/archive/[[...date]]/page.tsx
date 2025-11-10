import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { allPostsQuery } from '@/sanity/lib/queries'
import { sanityFetch } from '@/sanity/lib/live'
import { MorePosts } from '@/app/components/Posts'
import DateComponent from '@/app/components/Date'

type Props = {
  params: {
    date?: string[]
  }
}

export default async function ArchivePage({ params }: Props) {
  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
    stega: false,
  })

  if (!posts) {
    return notFound()
  }

  const year = params.date?.[0]
  const month = params.date?.[1]

  const filteredPosts = posts.filter((post) => {
    if (!post.date) return false
    const postDate = new Date(post.date)
    const postYear = postDate.getFullYear().toString()
    const postMonth = (postDate.getMonth() + 1).toString().padStart(2, '0')

    if (year && postYear !== year) return false
    if (month && postMonth !== month) return false

    return true
  })

  return (
    <div className="container my-12 lg:my-24 grid gap-12">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
        Archive {year && `for ${year}`}{month && `/${month}`}
      </h1>
      <div className="grid gap-12">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post._id} className="border-b border-gray-100 pb-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                <a href={`/posts/${post.slug}`}>{post.title}</a>
              </h2>
              <p className="text-gray-600">
                <DateComponent dateString={post.date} />
              </p>
              {post.excerpt && <p className="mt-2 text-gray-700">{post.excerpt}</p>}
            </div>
          ))
        ) : (
          <p>No posts found for this period.</p>
        )}
      </div>
      <aside>
        <Suspense>{await MorePosts({ skip: '', limit: 2 })}</Suspense>
      </aside>
    </div>
  )
}