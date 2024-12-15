import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://developer.tobischmid.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  return staticRoutes;
}
