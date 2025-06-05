import Image from 'next/image';
import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AppleImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  fill?: boolean;
}

/**
 * AppleImage component for displaying images with Next.js Image optimization
 * 
 * @param src - Image source (filename from the public/images directory)
 * @param alt - Alternative text for the image
 * @param width - Optional width of the image
 * @param height - Optional height of the image
 * @param priority - If true, the image will be considered high priority and preloaded
 * @param quality - The quality of the optimized image, defaults to 75
 * @param sizes - Sizes attribute for responsive images
 * @param className - Optional class name for the container div
 * @param imgClassName - Optional class name for the image itself
 * @param fill - If true, the image will fill its container using layout="fill"
 */
export function AppleImage({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  sizes,
  className,
  imgClassName,
  fill = false,
  ...props
}: AppleImageProps) {
  // Ensure the src has the correct path prefix
  const imageSrc = src.startsWith('/') 
    ? src 
    : `/images/${src}`;
  return (
    <div 
      className={cn('relative', fill ? 'w-full h-full' : '', className)} 
      style={fill ? { minHeight: '500px', ...props.style } : props.style} 
      {...props}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={cn(
          'object-cover',
          fill ? 'object-center' : '',
          imgClassName
        )}
        fill={fill}
      />
    </div>
  );
}

// Export the component as default as well for backward compatibility
export default AppleImage;