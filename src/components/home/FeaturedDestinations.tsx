'use client'

import { Place } from '@/data/mockData'

interface FeaturedDestinationsProps {
  destinations: Place[]
  title?: string
}

export default function FeaturedDestinations({ destinations, title = "Featured Destinations" }: FeaturedDestinationsProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
          See all
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.place_id}
            className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            <img
              src={destination.cover_media.medium}
              alt={destination.name}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {destination.name}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                {destination.description}
              </p>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-gray-900">
                    {destination.rating}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    ({destination.review_count})
                  </span>
                </div>
                
                {destination.categories[0] && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {destination.categories[0].name}
                  </span>
                )}
              </div>
              
              {destination.open_hours_text && (
                <p className="text-xs text-gray-500">
                  {destination.open_hours_text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}