const SkeletonCard = () => (
  <div className="flex items-center p-4 gap-9 bg-gray-100 rounded-lg shadow-sm">
    <div className="w-12 text-center">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
    <div className="w-48 flex items-center space-x-4">
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-3 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
    {[...Array(6)].map((_, i) => (
      <div key={i} className="w-24 text-right">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    ))}
  </div>
);


export default SkeletonCard