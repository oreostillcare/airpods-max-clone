interface LoadingSkeletonProps {
  className?: string;
  variant?: "image" | "text" | "card";
  height?: string;
  width?: string;
}

export function LoadingSkeleton({ 
  className = "", 
  variant = "image",
  height = "h-48",
  width = "w-full"
}: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg";
  
  switch (variant) {
    case "text":
      return (
        <div className={`${baseClasses} h-4 ${width} ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>
      );
    
    case "card":
      return (
        <div className={`${baseClasses} ${height} ${width} ${className} p-6`}>
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-24 bg-gray-300 rounded"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      );
    
    default: // image
      return (
        <div className={`${baseClasses} ${height} ${width} ${className} flex items-center justify-center`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      );
  }
}
