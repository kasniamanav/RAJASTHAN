import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Fallback high-res image of Rajasthan in case of rare network drop
  const fallbackSrc =
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&auto=format&fit=crop&q=80';

  return (
    <div className={`relative overflow-hidden bg-[#C65D3B]/10 ${containerClassName}`}>
      {/* Shimmer skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-amber-600/10 to-amber-900/10 animate-pulse" />
      )}

      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!hasError) setHasError(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105'
        } ${className}`}
      />
    </div>
  );
};
