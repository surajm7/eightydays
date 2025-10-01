// components/places/PlaceCard.tsx
'use client'

import { Place } from '@/data/mockData'

interface PlaceCardProps {
  place: Place
  onClick: () => void
  showDescription?: boolean
}

export default function PlaceCard({ place, onClick, showDescription = true }: PlaceCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      <img
        src={place.cover_media.medium}
        alt={place.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {place.name}
        </h3>
        
        {showDescription && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {place.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-sm font-medium text-gray-900">
              {place.rating}
            </span>
            <span className="text-sm text-gray-500">
              ({place.review_count})
            </span>
          </div>
          
          {place.categories[0] && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {place.categories[0].name}
            </span>
          )}
        </div>
        
        {place.open_hours_text && (
          <p className="text-xs text-gray-500">
            {place.open_hours_text}
          </p>
        )}
        
        {/* Action buttons */}
        <div className="flex space-x-2 mt-3 pt-3 border-t border-gray-100">
          <button 
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 px-3 rounded transition-colors text-center"
            onClick={(e) => {
              e.stopPropagation()
              // Add to list functionality
            }}
          >
            Add to list
          </button>
          <button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded transition-colors text-center"
            onClick={(e) => {
              e.stopPropagation()
              // Get directions functionality
            }}
          >
            Directions
          </button>
        </div>
      </div>
    </div>
  )
}