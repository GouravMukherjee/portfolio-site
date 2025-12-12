import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import '../styles/globals.css';
import { Navigation } from '@/components/common/Navigation';
import { Footer } from '@/components/common/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { SkipLink } from '@/components/a11y/SkipLink';
import { StructuredData } from '@/components/seo/StructuredData';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import { generateMetadata as genMeta } from '@/lib/seo';
import { generatePersonSchema } from '@/lib/structured-data';
import Starfield from '@/components/background/Starfield';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fira = Fira_Code({ subsets: ['latin'], variable: '--font-fira' });

export const metadata: Metadata = genMeta({
  title: 'Gourav Mukherjee | Student Developer & AI Enthusiast',
  description:
    'First-year CS & Linguistics student at SJSU. Learning to build intelligent systems with NLP and multi-agent AI. Building Orion - an offline AI assistant for edge devices.',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = generatePersonSchema({
    name: 'Gourav Mukherjee',
    jobTitle: 'Computer Science & Linguistics Student',
    description:
      'First-year CS & Linguistics student at San José State University exploring AI/ML, multi-agent systems, and natural language processing through hands-on projects.',
    image: '/profile.jpg',
    url: 'https://yourdomain.com',
    email: 'gouravmukherjee058@gmail.com',
    sameAs: [
      'https://github.com/gouravmukherjee',
      'https://linkedin.com/in/gouravmukherjee',
    ],
  });

  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData data={personSchema} />
      </head>
      <body
        className={`${inter.variable} ${fira.variable} antialiased min-h-screen bg-primary-dark text-text-secondary`}
      >
        <Starfield />
        <AnalyticsProvider />
        <SkipLink />
        <ScrollProgress />
        <div className="relative">
          <Navigation isScrolled />
          <main id="main-content" tabIndex={-1} className="relative focus:outline-none">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
