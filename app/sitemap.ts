import { siteConfig } from '@/lib/seo';

export default function sitemap() {
  const routes = ['', '/projects', '/about', '/contact'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
