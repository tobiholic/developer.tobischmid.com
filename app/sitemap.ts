import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://developer.tobischmid.com/',
      lastModified: new Date().toISOString(), // ISO-String für statische Daten
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  return staticRoutes;
}
