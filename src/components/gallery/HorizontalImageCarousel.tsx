// components/gallery/HorizontalImageCarousel.tsx
'use client'

import { useRef } from 'react'

interface GalleryImage {
  id: string
  small: string
  medium: string
  large: string
  caption?: string
}

interface HorizontalImageCarouselProps {
  images: GalleryImage[]
}

export default function HorizontalImageCarousel({ images }: HorizontalImageCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      {images.length > 3 && (
        <>
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 transition-all duration-200 hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 transition-all duration-200 hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="relative w-full h-full">
              <img
                src={image.medium}
                alt={image.caption || `Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Custom scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}