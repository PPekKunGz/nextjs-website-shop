import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/',
    },
    {
        userAgent: '*',
        allow: '/',
        disallow: '/auth/',
      }],
    sitemap: `${process.env.NEXT_URL}/sitemap.xml`,
  }
}