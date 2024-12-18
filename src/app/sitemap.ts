import { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blogs'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  const blogs = await getAllBlogs()
  
  // 静态路由
  const routes = [
    '',
    '/about',
    '/projects',
    '/blogs',
    '/friends',
    '/changelog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 博客文章路由
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
} 