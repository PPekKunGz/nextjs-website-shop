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
    sitemap: `${process.env.BETTER_AUTH_URL}/sitemap.xml`,
  }
}