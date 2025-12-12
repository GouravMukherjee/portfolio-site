import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Gourav Mukherjee | Portfolio',
  author: 'Gourav Mukherjee',
  description:
    'Aspiring AI/ML Engineer at SJSU. Building intelligent systems & edge computing solutions. First-year CS & Linguistics student passionate about multi-agent AI and NLP.',
  url: 'https://yourdomain.com',
  ogImage: '/og-image.jpg',
  twitterHandle: '@gouravmukherjee',
  keywords: [
    'AI',
    'Machine Learning',
    'Deep Learning',
    'MLOps',
    'Artificial Intelligence',
    'Python',
    'TensorFlow',
    'PyTorch',
    'Portfolio',
  ],
};

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const canonicalUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: pageTitle,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
  };
}
