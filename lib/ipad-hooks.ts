/**
 * Custom React hooks for iPad optimization
 * Provides easy-to-use hooks for iPad-specific features
 */

'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import {
  isIPad,
  getOrientation,
  onOrientationChange,
  getSafeAreaInsets,
  hasNotch,
  getViewportSize,
  getIPadModel,
  isCoarsePointer,
  lockBodyScroll,
} from './ipad-utils';

/**
 * Hook to detect iPad and device type
 */
export const useIPadDetection = () => {
  const [isIPadDevice, setIsIPadDevice] = useState(false);
  const [model, setModel] = useState<'mini' | 'standard' | 'air' | 'pro' | null>(null);

  useEffect(() => {
    setIsIPadDevice(isIPad());
    setModel(getIPadModel());
  }, []);

  return { isIPadDevice, model };
};

/**
 * Hook to detect and monitor orientation changes
 */
export const useOrientation = () => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    setOrientation(getOrientation());

    const cleanup = onOrientationChange((newOrientation) => {
      setOrientation(newOrientation);
    });

    return cleanup;
  }, []);

  return {
    orientation,
    isLandscape: orientation === 'landscape',
    isPortrait: orientation === 'portrait',
  };
};

/**
 * Hook for safe area insets (notched devices)
 */
export const useSafeAreaInsets = () => {
  const [insets, setInsets] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const updateInsets = () => {
      setInsets(getSafeAreaInsets());
    };

    updateInsets();

    // Update on resize (orientation change)
    window.addEventListener('resize', updateInsets);
    return () => window.removeEventListener('resize', updateInsets);
  }, []);

  return insets;
};

/**
 * Hook to detect notched iPad (iPad Pro with Face ID)
 */
export const useNotchDetection = () => {
  const [hasDeviceNotch, setHasDeviceNotch] = useState(false);

  useEffect(() => {
    setHasDeviceNotch(hasNotch());
  }, []);

  return hasDeviceNotch;
};

/**
 * Hook to get viewport size
 */
export const useViewportSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize(getViewportSize());
    };

    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

/**
 * Hook to lock body scroll (for modals, etc.)
 */
export const useScrollLock = (enabled: boolean = false) => {
  const unlockRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (enabled) {
      unlockRef.current = lockBodyScroll();
      return () => {
        if (unlockRef.current) {
          unlockRef.current();
        }
      };
    }
    return undefined;
  }, [enabled]);
};

/**
 * Hook to detect if device has coarse pointer (touch)
 */
export const useCoarsePointer = () => {
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    setIsCoarse(isCoarsePointer());

    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsCoarse(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isCoarse;
};

/**
 * Hook to manage iPad-specific touch interactions
 */
export const useTouchOptimization = () => {
  const [isTouching, setIsTouching] = useState(false);

  const handleTouchStart = useCallback(() => {
    setIsTouching(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsTouching(false);
  }, []);

  return {
    isTouching,
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    },
  };
};

/**
 * Combined hook for all iPad optimizations
 */
export const useIPadOptimization = () => {
  const iPadDetection = useIPadDetection();
  const orientation = useOrientation();
  const safeAreaInsets = useSafeAreaInsets();
  const hasDeviceNotch = useNotchDetection();
  const viewportSize = useViewportSize();
  const isCoarse = useCoarsePointer();

  return {
    ...iPadDetection,
    ...orientation,
    safeAreaInsets,
    hasNotch: hasDeviceNotch,
    viewportSize,
    isCoarsePointer: isCoarse,
  };
};

export default {
  useIPadDetection,
  useOrientation,
  useSafeAreaInsets,
  useNotchDetection,
  useViewportSize,
  useScrollLock,
  useCoarsePointer,
  useTouchOptimization,
  useIPadOptimization,
};
