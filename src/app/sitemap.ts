import { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blogs'
import { projects, githubProjects } from '@/config/infoConfig'

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

  // 作品路由
  const projectRoutes = projects
    .filter(project => project.link?.href) // 确保链接存在
    .map((project) => ({
      url: `${baseUrl}/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))

  // 开源项目路由
  const githubProjectRoutes = githubProjects
    .filter(project => project.link?.href) // 确保链接存在
    .map((project) => ({
      url: `${baseUrl}/projects#${project.name.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))

  return [
    ...routes,
    ...blogRoutes,
    ...projectRoutes,
    ...githubProjectRoutes,
  ]
} 