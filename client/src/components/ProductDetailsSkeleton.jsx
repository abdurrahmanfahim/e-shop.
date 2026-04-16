const ProductDetailsSkeleton = () => {
  return (
    <div className="mt-8 lg:mt-16 animate-pulse">
      {/* breadcrumb */}
      <div className="flex gap-2 items-center">
        <div className="h-4 w-10 bg-gray-200 rounded" />
        <div className="h-4 w-2 bg-gray-200 rounded" />
        <div className="h-4 w-24 bg-gray-200 rounded" />
        <div className="h-4 w-2 bg-gray-200 rounded" />
        <div className="h-4 w-48 bg-gray-200 rounded" />
      </div>

      {/* top section */}
      <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
        {/* slider */}
        <div className="w-full lg:w-1/2 xl:w-auto">
          <div className="w-full h-64 sm:h-80 lg:h-[542px] bg-gray-200 rounded-lg" />
          <div className="flex gap-6 mt-4 lg:mt-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-16 h-14 sm:w-20 sm:h-16 lg:w-[94px] lg:h-[82px] bg-gray-200 rounded-10p" />
            ))}
          </div>
        </div>

        {/* info */}
        <div className="w-full lg:w-1/2 xl:w-[632px] flex flex-col gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
            ))}
            <div className="w-10 h-4 bg-gray-200 rounded ml-2" />
          </div>
          <div className="h-8 lg:h-12 bg-gray-200 rounded w-full" />
          <div className="h-10 lg:h-16 bg-gray-200 rounded w-40" />
          <div className="flex flex-col gap-3 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-32 h-5 bg-gray-200 rounded" />
                <div className="flex-1 h-5 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* shipping badges */}
      <div className="flex flex-wrap gap-6 mt-8 lg:mt-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="flex flex-col gap-1">
              <div className="w-24 h-4 bg-gray-200 rounded" />
              <div className="w-32 h-3 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* accordion */}
      <div className="mt-12 lg:mt-[100px] flex gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-24 h-6 bg-gray-200 rounded" />
        ))}
      </div>
      <div className="mt-6 h-40 bg-gray-200 rounded-lg" />
    </div>
  );
};

export default ProductDetailsSkeleton;
