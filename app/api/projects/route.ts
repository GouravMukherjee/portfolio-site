import { NextRequest } from 'next/server';
import { createApiResponse, handleApiError, corsHeaders, handleCorsPrelight } from '@/lib/api-utils';

// Mock project data - replace with database query in production
const projects = [
  {
    id: 1,
    title: 'Neural Network Optimization Framework',
    description: 'Reduced training time by 40% through custom CUDA kernels and mixed-precision training',
    tags: ['Python', 'PyTorch', 'CUDA', 'MLOps'],
    image: '/projects/project-1.jpg',
    github: 'https://github.com/username/project',
    demo: 'https://demo.example.com',
    featured: true,
    metrics: {
      performance: '40% faster training',
      impact: '100K+ model downloads',
    },
  },
  {
    id: 2,
    title: 'Real-time Object Detection Pipeline',
    description: 'Production ML pipeline handling 10M+ images daily with 99.9% uptime',
    tags: ['TensorFlow', 'Kubernetes', 'FastAPI', 'Redis'],
    image: '/projects/project-2.jpg',
    github: 'https://github.com/username/project-2',
    featured: true,
    metrics: {
      throughput: '10M+ images/day',
      latency: '<100ms p99',
    },
  },
  {
    id: 3,
    title: 'NLP Model for Medical Diagnosis',
    description: 'BERT-based model achieving 94% accuracy in medical text classification',
    tags: ['Transformers', 'BERT', 'Python', 'Healthcare'],
    image: '/projects/project-3.jpg',
    featured: false,
    metrics: {
      accuracy: '94% on validation set',
      deployment: 'Production at 3 hospitals',
    },
  },
];

/**
 * GET /api/projects
 * Fetch all projects with optional filtering
 * Supports ISR (Incremental Static Regeneration)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    let filteredProjects = [...projects];

    // Filter by featured
    if (featured === 'true') {
      filteredProjects = filteredProjects.filter((p) => p.featured);
    }

    // Limit results
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!Number.isNaN(limitNum)) {
        filteredProjects = filteredProjects.slice(0, limitNum);
      }
    }

    // In production, fetch from database:
    // const projects = await prisma.project.findMany({
    //   where: featured ? { featured: true } : undefined,
    //   take: limit ? parseInt(limit) : undefined,
    //   orderBy: { createdAt: 'desc' },
    // });

    return createApiResponse(
      {
        success: true,
        data: filteredProjects,
        count: filteredProjects.length,
      },
      200,
      {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        ...corsHeaders,
      },
    );
  } catch (error) {
    return handleApiError(error);
  }
}

/**
 * OPTIONS /api/projects
 * Handle CORS preflight requests
 */
export async function OPTIONS() {
  return handleCorsPrelight();
}

// Enable ISR with 60 second revalidation
export const revalidate = 60;
