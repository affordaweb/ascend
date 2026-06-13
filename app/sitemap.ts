import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://ascend.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/aivan-alvarez', '/consulting', '/trainings-and-seminars', '/reporting', '/contact', '/exclusive-img-perks']
  return pages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
}
