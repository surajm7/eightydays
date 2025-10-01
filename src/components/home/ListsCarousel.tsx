'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { List } from '@/data/mockData'

interface ListsCarouselProps {
  lists: List[]
  title?: string
}

export default function ListsCarousel({ lists, title = "Try Smart Search" }: ListsCarouselProps) {
  const router = useRouter()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [savedLists, setSavedLists] = useState<Set<string>>(new Set())
  const [showScrollButtons, setShowScrollButtons] = useState(false)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 // Adjusted for mobile
      const scrollAmount = cardWidth
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const toggleSaveList = (listId: string, e: React.MouseEvent) => {
    e.stopPropagation()
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

  const handleListClick = (listId: string) => {
    router.push(`/lists/${listId}`)
  }

  const isGuestFavorite = (list: List) => {
    return list.stats.saved_count > 20 || list.stats.view_count > 500
  }

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current
      setShowScrollButtons(scrollWidth > clientWidth)
    }
  }

  return (
    <div className="mb-8 sm:mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
        {showScrollButtons && (
          <div className="hidden sm:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors bg-white shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors bg-white shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 pb-4"
          onLoad={checkScrollButtons}
          onScroll={checkScrollButtons}
        >
          {lists.map((list) => (
            <div
              key={list._id}
              onClick={() => handleListClick(list._id)}
              className="flex-shrink-0 w-64 sm:w-80 cursor-pointer group transition-transform duration-200 hover:scale-[1.02]"
            >
              {/* Card Container */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg cursor-pointer h-full flex flex-col overflow-hidden">
                {/* Image Container */}
                <div className="relative flex-shrink-0">
                  <img
                    src={list.cover_photo.medium}
                    alt={list.title}
                    className="w-full h-36 sm:h-48 object-cover group-hover:brightness-95 transition-all duration-300"
                  />
                  
                  {/* Guest Favorite Badge */}
                  {isGuestFavorite(list) && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <div className="bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-gray-900 shadow-sm flex items-center space-x-1 sm:space-x-1.5 border border-gray-100">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="text-xs">Guest favourite</span>
                      </div>
                    </div>
                  )}

                  {/* Heart Save Button */}
                  <button
                    onClick={(e) => toggleSaveList(list._id, e)}
                    className={`absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                      savedLists.has(list._id) 
                        ? 'bg-rose-500 text-white shadow-lg transform scale-110' 
                        : 'bg-white/90 text-gray-600 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <svg 
                      className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5"
                      fill={savedLists.has(list._id) ? "currentColor" : "none"}
                      stroke="currentColor" 
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>

                  {/* Places Count Badge */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                    <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {list.stats.place_count} places
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 sm:p-5 flex-1 flex flex-col">
                  {/* Location and Rating */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate flex-1 mr-2">
                      {list.countries[0]?.name}
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-1.5 flex-shrink-0 bg-gray-50 px-2 py-1 rounded-full">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-900 font-medium">4.8</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {list.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 flex-1">
                    {list.short_description}
                  </p>

                  {/* Stats and Creator */}
                  <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{list.stats.view_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        <span>{list.stats.saved_count}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <img
                        src={list.creator.profile_photo}
                        alt={list.creator.username}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-200"
                      />
                      <span className="text-xs text-gray-500 font-medium">
                        {list.creator.first_name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add extra spacing at the end for better scrolling */}
          <div className="flex-shrink-0 w-4" />
        </div>

        {/* Gradient overlays - only show when scrollable */}
        {showScrollButtons && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
          </>
        )}
      </div>
    </div>
  )
}