import { ImgHTMLAttributes, useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  lazy?: boolean;
  className?: string;
  fallbackSrc?: string;
}

/**
 * Optimized Image Component
 * 
 * Features:
 * - Lazy loading support with Intersection Observer
 * - Fallback image handling
 * - Proper alt text enforcement
 * - Loading state management
 * - Error handling with fallback
 * 
 * @example
 * <OptimizedImage 
 *   src={IMAGES.hero.left} 
 *   alt="Hero image showing fitness training"
 *   lazy={true}
 *   className="w-full h-auto"
 * />
 */
export function OptimizedImage({
  src,
  alt,
  lazy = true,
  className = '',
  fallbackSrc = '/images/placeholder.png',
  ...props
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(lazy ? '' : src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      setImageSrc(src);
      return;
    }

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            if (imgRef.current) {
              observer.unobserve(imgRef.current);
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, lazy]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
      alt={alt}
      className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
      {...props}
    />
  );
}

/**
 * Simple Image component (no lazy loading or optimizations)
 * Use for above-the-fold images or when lazy loading is not needed
 */
export function SimpleImage({ 
  src, 
  alt, 
  className = '', 
  ...props 
}: ImgHTMLAttributes<HTMLImageElement> & { alt: string }) {
  return <img src={src} alt={alt} className={className} {...props} />;
}
