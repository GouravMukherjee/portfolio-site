export default function manifest() {
  return {
    name: 'AI/ML Portfolio',
    short_name: 'Portfolio',
    description: 'Portfolio showcasing production-grade AI/ML systems and research',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
