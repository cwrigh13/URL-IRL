export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-4 rounded w-3/4 mb-4"></div>
      <div className="bg-gray-200 h-4 rounded w-1/2 mb-4"></div>
      <div className="bg-gray-200 h-32 rounded mb-4"></div>
      <div className="bg-gray-200 h-4 rounded w-2/3 mb-4"></div>
      <div className="bg-gray-200 h-4 rounded w-1/3"></div>
    </div>
  );
}

export function CaseStudyCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
      
      <div className="p-6">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
        
        {/* Library and location skeleton */}
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
        
        {/* Technologies skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-14"></div>
        </div>
        
        {/* Results skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      </div>
    </div>
  );
}

export function BlogPostCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
      
      <div className="p-6">
        {/* Category skeleton */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3"></div>
        
        {/* Title skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
        
        {/* Excerpt skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
        
        {/* Meta info skeleton */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
        </div>
        
        {/* Tags skeleton */}
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-14"></div>
        </div>
      </div>
    </div>
  );
}

export function PageHeaderSkeleton() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title skeleton */}
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-6"></div>
          
          {/* Subtitle skeleton */}
          <div className="space-y-3 mb-10">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mx-auto"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-4/6 mx-auto"></div>
          </div>
          
          {/* Button skeleton */}
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export function ContactFormSkeleton() {
  return (
    <div className="animate-pulse bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-6">
        {/* Title */}
        <div className="bg-gray-200 h-8 rounded w-1/3 mb-6"></div>
        
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="bg-gray-200 h-4 rounded w-1/4"></div>
            <div className="bg-gray-200 h-10 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="bg-gray-200 h-4 rounded w-1/4"></div>
            <div className="bg-gray-200 h-10 rounded"></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="bg-gray-200 h-4 rounded w-1/4"></div>
          <div className="bg-gray-200 h-10 rounded"></div>
        </div>
        
        <div className="space-y-2">
          <div className="bg-gray-200 h-4 rounded w-1/4"></div>
          <div className="bg-gray-200 h-24 rounded"></div>
        </div>
        
        {/* Button */}
        <div className="bg-gray-200 h-12 rounded w-1/3"></div>
      </div>
    </div>
  );
}
