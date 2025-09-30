'use client'

import { useState } from 'react'

interface List {
  id: string
  title: string
  description: string
  owner: string
  country: string
  placeCount: number
  coverImage: string
}

interface ListsCarouselProps {
  lists: List[]
}

export default function ListsCarousel({ lists }: ListsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % lists.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + lists.length) % lists.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm border">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {lists.map((list, index) => (
            <div
              key={list.id}
              className="w-full flex-shrink-0 p-6"
            >
              <div className="flex items-start space-x-6">
                <img
                  src={list.coverImage}
                  alt={list.title}
                  className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                    {list.title}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {list.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      in {list.country} by {list.owner}
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      {list.placeCount} places
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 p-2 rounded-full shadow-lg transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 p-2 rounded-full shadow-lg transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {lists.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}