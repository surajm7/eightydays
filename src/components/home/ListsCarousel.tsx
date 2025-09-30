'use client'

import { useRef, useState } from 'react'
import { List } from '@/data/mockData'

interface ListsCarouselProps {
  lists: List[]
  title?: string
}

export default function ListsCarousel({ lists, title = "Try Smart Search" }: ListsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [savedLists, setSavedLists] = useState<Set<string>>(new Set())

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 256
      const scrollAmount = cardWidth
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const toggleSaveList = (listId: string) => {
    setSavedLists(prev => {
      const newSet = new Set(prev)
      if (newSet.has(listId)) {
        newSet.delete(listId)
      } else {
        newSet.add(listId)
      }
      return newSet
    })
  }

  // Function to determine if a list should show "Guest favourite" badge
  const isGuestFavorite = (list: List) => {
    return list.stats.saved_count > 20 || list.stats.view_count > 500
  }

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth px-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {lists.map((list) => (
            <div
              key={list._id}
              className="flex-shrink-0 w-64 cursor-pointer group"
            >
              {/* Card Container */}
              <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-md cursor-pointer h-full">
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={list.cover_photo.medium}
                    alt={list.title}
                    className="w-full h-36 object-cover rounded-t-xl group-hover:brightness-95 transition-all duration-300"
                  />
                  
                  {/* Guest Favorite Badge */}
                  {isGuestFavorite(list) && (
                    <div className="absolute top-3 left-3">
                      <div className="bg-white px-2 py-1 rounded-full text-xs font-semibold text-gray-900 shadow-sm flex items-center space-x-1">
                        <svg className="w-3 h-3 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span>Guest favourite</span>
                      </div>
                    </div>
                  )}

                  {/* Heart Save Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSaveList(list._id)
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      savedLists.has(list._id) 
                        ? 'bg-rose-500 text-white' 
                        : 'bg-white/90 text-gray-600 hover:bg-white'
                    }`}
                  >
                    <svg 
                      className={`w-4 h-4 transition-all duration-200 ${
                        savedLists.has(list._id) ? 'scale-110' : 'scale-100'
                      }`}
                      fill={savedLists.has(list._id) ? "currentColor" : "none"}
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={savedLists.has(list._id) ? 0 : 2} 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Location and Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-gray-900 truncate flex-1 mr-2">
                      {list.countries[0]?.name}
                    </div>
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-sm text-gray-900 font-medium">4.8</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-500 text-sm mb-2 line-clamp-2">
                    {list.title}
                  </h3>

                  {/* Dates (Optional - you can add this if you have date data) */}
                  <p className="text-gray-500 text-sm mb-2">
                    Oct 15-20
                  </p>

                  {/* Price and Creator */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-900 font-semibold">₹12,456</span>
                      <span className="text-gray-500 text-sm ml-1">night</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      by {list.creator.username}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add extra spacing at the end for better scrolling */}
          <div className="flex-shrink-0 w-4" />
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}