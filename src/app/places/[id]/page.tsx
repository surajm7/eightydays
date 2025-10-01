'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { featuredPlaces, type Place } from '@/data/mockData'
import Header from '@/components/layout/Header'
import Footer from '@/components/home/Footer'

export default function PlaceDetailPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const params = useParams()
  const placeId = params.id as string
  
  const [place, setPlace] = useState<Place | null>(null)
  const [isLoadingData, setIsLoadingData] = useState(true)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    const foundPlace = featuredPlaces.find(p => p.place_id === placeId)
    setPlace(foundPlace || null)
    setIsLoadingData(false)
  }, [placeId])

  if (isLoading || isLoadingData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated || !user || !place) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          {/* Place Image */}
          <img
            src={place.cover_media.large}
            alt={place.name}
            className="w-full h-64 md:h-96 object-cover"
          />
          
          {/* Place Details */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {place.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-lg font-medium text-gray-900">
                      {place.rating}
                    </span>
                    <span className="text-gray-500">
                      ({place.review_count} reviews)
                    </span>
                  </div>
                  
                  {place.categories[0] && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {place.categories[0].name}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 text-lg mb-6">
                  {place.description}
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3 border-t border-gray-200 pt-6">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                Get Directions
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg transition-colors font-medium">
                Add to List
              </button>
            </div>
            
            {/* Hours */}
            {place.open_hours_text && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">{place.open_hours_text}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}