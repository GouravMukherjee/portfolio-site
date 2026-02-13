/**
 * iPad-specific utility functions for touch handling,
 * orientation detection, and viewport optimization.
 */

/**
 * Detect if the device is an iPad
 */
export const isIPad = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone OS/.test(navigator.userAgent) && 'ontouchend' in document;
};

/**
 * Detect current device orientation
 */
export const getOrientation = (): 'portrait' | 'landscape' => {
  if (typeof window === 'undefined') return 'portrait';
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

/**
 * Listen for orientation changes and execute callback
 */
export const onOrientationChange = (callback: (orientation: 'portrait' | 'landscape') => void): (() => void) => {
  const handleOrientationChange = () => {
    const orientation = getOrientation();
    callback(orientation);
  };

  window.addEventListener('orientationchange', handleOrientationChange);
  window.addEventListener('resize', handleOrientationChange);

  // Return cleanup function
  return () => {
    window.removeEventListener('orientationchange', handleOrientationChange);
    window.removeEventListener('resize', handleOrientationChange);
  };
};

/**
 * Check if device is in landscape orientation on iPad
 */
export const isLandscape = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(orientation: landscape)').matches;
};

/**
 * Handle touch start to prevent 300ms delay
 */
export const handleTouchStart = (e: React.TouchEvent | TouchEvent): void => {
  // Prevent default only if needed to avoid blocking scrolling
  if (e.target && (e.target as HTMLElement).tagName === 'BUTTON') {
    e.preventDefault();
  }
};

/**
 * Get safe area insets for notched iPads
 */
export const getSafeAreaInsets = (): {
  top: number;
  bottom: number;
  left: number;
  right: number;
} => {
  if (typeof getComputedStyle === 'undefined') {
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }

  const root = document.documentElement;
  const styles = getComputedStyle(root);

  const getInset = (name: string): number => {
    const value = styles.getPropertyValue(`--safe-area-inset-${name}`).trim();
    return value ? parseInt(value) : 0;
  };

  return {
    top: getInset('top'),
    bottom: getInset('bottom'),
    left: getInset('left'),
    right: getInset('right'),
  };
};

/**
 * Detect if device has notch (iPad Pro with Face ID)
 */
export const hasNotch = (): boolean => {
  if (typeof window === 'undefined') return false;
  const insets = getSafeAreaInsets();
  return insets.top > 20 || insets.bottom > 20; // Face ID notches typically > 20px
};

/**
 * Get viewport size
 */
export const getViewportSize = (): { width: number; height: number } => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }

  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  };
};

/**
 * Detect iPad size/model based on viewport
 */
export const getIPadModel = (): 'mini' | 'standard' | 'air' | 'pro' | null => {
  if (!isIPad()) return null;

  const { width } = getViewportSize();

  if (width <= 768) return 'mini'; // iPad Mini
  if (width <= 820) return 'standard'; // iPad (10.2")
  if (width <= 834) return 'air'; // iPad Air
  return 'pro'; // iPad Pro
};

/**
 * Optimize tap target sizes
 * Returns True if tap target is at least 44x44px
 */
export const isTouchTargetValid = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return rect.width >= 44 && rect.height >= 44;
};

/**
 * Lock body scroll (useful for modals on iPad)
 */
export const lockBodyScroll = (): (() => void) => {
  const originalStyle = window.getComputedStyle(document.body).overflow;
  document.body.style.overflow = 'hidden';

  // Return cleanup function
  return () => {
    document.body.style.overflow = originalStyle;
  };
};

/**
 * Detect if pointer device is coarse (touch)
 */
export const isCoarsePointer = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches;
};

/**
 * Request fullscreen on iPad (use with caution)
 */
export const requestIPadFullscreen = async (element: HTMLElement): Promise<void> => {
  if (!element.requestFullscreen) return;

  try {
    await element.requestFullscreen();
  } catch (error) {
    console.warn('Fullscreen request failed:', error);
  }
};

/**
 * Get iPad screen pixel ratio for responsive images
 */
export const getIPadDevicePixelRatio = (): number => {
  if (typeof window === 'undefined') return 1;
  return window.devicePixelRatio || 1;
};

export default {
  isIPad,
  getOrientation,
  onOrientationChange,
  isLandscape,
  handleTouchStart,
  getSafeAreaInsets,
  hasNotch,
  getViewportSize,
  getIPadModel,
  isTouchTargetValid,
  lockBodyScroll,
  isCoarsePointer,
  requestIPadFullscreen,
  getIPadDevicePixelRatio,
};
