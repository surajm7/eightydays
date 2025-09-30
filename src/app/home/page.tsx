'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { mockLists, featuredPlaces, type List, type Place } from '@/data/mockData'
import Header from '../../components/layout/Header'
import ListsCarousel from '../../components/home/ListsCarousel'
import FeaturedDestinations from '../../components/home/FeaturedDestinations'
import Footer from '../../components/home/Footer'


export default function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredLists, setFilteredLists] = useState<List[]>(mockLists)
  const [filteredDestinations, setFilteredDestinations] = useState<Place[]>(featuredPlaces)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredLists(mockLists)
      setFilteredDestinations(featuredPlaces)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = mockLists.filter(list => 
        list.title.toLowerCase().includes(query) ||
        list.short_description.toLowerCase().includes(query) ||
        list.countries.some(country => country.name.toLowerCase().includes(query)) ||
        list.creator.username.toLowerCase().includes(query)
      )
      setFilteredLists(filtered)

      const filteredDests = featuredPlaces.filter(dest =>
        dest.name.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query) ||
        dest.categories.some(cat => cat.name.toLowerCase().includes(query))
      )
      setFilteredDestinations(filteredDests)
    }
  }, [searchQuery])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  const handleCreateList = () => {
    router.push('/create-list')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Eighty Days
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover amazing travel experiences
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, lists, or users..."
                  className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Try Smart Search Section */}
        <ListsCarousel lists={filteredLists} title="Try Smart Search" />

        {/* Featured Destinations Section */}
        <FeaturedDestinations destinations={filteredDestinations} title="Popular Destinations" />

{/* Create List Button */}
<div className="fixed bottom-6 right-6 z-10">
  <button
    onClick={handleCreateList}
    className="bg-black text-white px-6 py-5 rounded-full shadow-md hover:bg-black transition-colors font-semibold flex items-center space-x-2"
  >
    {/* Plus Icon */}
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
    <span>Create List</span>
  </button>
</div>


        <Footer />
      </main>
    </div>
  )
}