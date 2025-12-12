import { API_ENDPOINTS } from './constants';

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type NewsletterFormData = {
  email: string;
  name?: string;
};

/**
 * Generic API client for making requests
 */
export async function apiClient<T = unknown>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'An error occurred',
        message: data.message,
      };
    }

    return {
      success: true,
      data: data.data || data,
      message: data.message,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

/**
 * Submit contact form
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ApiResponse> {
  return apiClient(API_ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Subscribe to newsletter
 */
export async function subscribeToNewsletter(
  data: NewsletterFormData
): Promise<ApiResponse> {
  return apiClient(API_ENDPOINTS.SUBSCRIBE, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Fetch projects
 */
export async function fetchProjects(params?: {
  featured?: boolean;
  limit?: number;
}): Promise<ApiResponse<unknown[]>> {
  const searchParams = new URLSearchParams();
  if (params?.featured !== undefined) {
    searchParams.set('featured', String(params.featured));
  }
  if (params?.limit) {
    searchParams.set('limit', String(params.limit));
  }

  const url = `${API_ENDPOINTS.PROJECTS}${searchParams.toString() ? `?${searchParams}` : ''}`;
  return apiClient(url);
}
