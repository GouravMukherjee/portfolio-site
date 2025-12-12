import { siteConfig } from './seo';

export interface PersonSchema {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  email?: string;
  url: string;
  sameAs: string[];
}

export interface ProjectSchema {
  name: string;
  description: string;
  url?: string;
  image?: string;
  dateCreated?: string;
  keywords?: string[];
  author: {
    name: string;
    url: string;
  };
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url: string;
  };
  url: string;
}

export function generatePersonSchema(data: PersonSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.jobTitle,
    description: data.description,
    image: data.image,
    url: data.url,
    email: data.email,
    sameAs: data.sameAs,
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'MLOps',
      'Python',
      'TensorFlow',
      'PyTorch',
    ],
  };
}

export function generateProjectSchema(data: ProjectSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: data.name,
    description: data.description,
    url: data.url || `${siteConfig.url}/projects/${data.name.toLowerCase().replace(/\s+/g, '-')}`,
    image: data.image,
    dateCreated: data.dateCreated,
    keywords: data.keywords?.join(', '),
    author: {
      '@type': 'Person',
      name: data.author.name,
      url: data.author.url,
    },
  };
}

export function generateArticleSchema(data: ArticleSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Person',
      name: data.author.name,
      url: data.author.url,
    },
    publisher: {
      '@type': 'Person',
      name: data.author.name,
      url: data.author.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
