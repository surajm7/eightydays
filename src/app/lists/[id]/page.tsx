'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { mockLists, featuredPlaces, type List, type Place } from '@/data/mockData'
import Image from 'next/image'

import Header from '@/components/layout/Header'
import Footer from '@/components/home/Footer'
import ImageCarousel from '@/components/gallery/ImageCarousel'
import MapSection from '@/components/map/MapSection'

export default function ListDetailPage() {
    const { user, isAuthenticated, isLoading } = useAuth()
    const router = useRouter()
    const params = useParams()
    const listId = params.id as string

    const [list, setList] = useState<List | null>(null)
    const [listPlaces, setListPlaces] = useState<Place[]>([])
    const [isLoadingData, setIsLoadingData] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated, isLoading, router])

    useEffect(() => {
        const fetchListData = async () => {
            setIsLoadingData(true)

            const foundList = mockLists.find(l => l._id === listId)

            if (foundList) {
                setList(foundList)
                const places = featuredPlaces.slice(0, foundList.stats.place_count)
                setListPlaces(places)
            } else {
                router.push('/')
            }

            setIsLoadingData(false)
        }

        if (listId && isAuthenticated) {
            fetchListData()
        }
    }, [listId, isAuthenticated, router])

    if (isLoading || isLoadingData) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </div>
        )
    }

    if (!isAuthenticated || !user || !list) {
        return null
    }

    const handlePlaceClick = (placeId: string) => {
        router.push(`/places/${placeId}`)
    }

    const handleShareList = () => {
        if (navigator.share) {
            navigator.share({
                title: list.title,
                text: list.short_description,
                url: window.location.href,
            })
        } else {
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
    }

    const handleSaveList = () => {
        alert('List saved to your profile!')
    }

    const handleAddToList = (placeId: string) => {
        alert(`Place ${placeId} added to your list!`)
    }

    const categories = ['All', 'Culture', 'Outdoors', 'Food', 'Adventure']

    return (
        <div className="min-h-screen bg-white">
            <Header user={user} />

            <main className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">

                {/* Image Carousel */}
                <div className="mb-6 sm:mb-8">
                    <ImageCarousel images={list.gallery_images} />
                </div>

                {/* List Header Section */}
                <div className="mb-6 sm:mb-8">
                    {/* User Info and List Title */}
                    <div className="mb-4 sm:mb-6">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            {list.creator.first_name} {list.creator.last_name}
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            {list.title}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 space-y-1 sm:space-y-0">
                            <span className="mr-0 sm:mr-2">{list.countries[0]?.name}</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="ml-0 sm:ml-2">Updated {list.updated_date.replace('Updated ', '')}</span>
                        </div>

                        {/* Places Count and Stats */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
                            <div className="flex items-center space-x-1">
                                <span className="font-semibold text-gray-900">{list.stats.place_count}</span>
                                <span className="text-gray-600 text-sm sm:text-base">Places</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="font-semibold text-gray-900">{list.stats.saved_count}</span>
                                <span className="text-gray-600 text-sm sm:text-base">Saves</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="font-semibold text-gray-900">{list.stats.comment_count}</span>
                                <span className="text-gray-600 text-sm sm:text-base">Comments</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Map Section */}
                    <div className="mb-6">
                        <MapSection />
                    </div>

                    {/* Action Buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
                        <button
                            onClick={handleShareList}
                            className="flex items-center justify-center space-x-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-4 sm:px-6 py-3 rounded-2xl transition-colors font-medium text-sm sm:text-base"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                            </svg>
                            <span>Share List</span>
                        </button>

                        <button
                            onClick={handleSaveList}
                            className="flex items-center justify-center space-x-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-4 sm:px-6 py-3 rounded-2xl transition-colors font-medium text-sm sm:text-base"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                            </svg>
                            <span>Save List</span>
                        </button>
                    </div>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Search Places</h3>
                    
                    {/* Search Input */}
                    <div className="mb-4 sm:mb-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search places..."
                                className="w-full pl-10 pr-4 py-3 sm:py-4 border-0 bg-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-gray-300 focus:outline-none transition-all placeholder-gray-500 text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Category Filters - Horizontal scroll on mobile */}
                    <div className="flex space-x-2 sm:space-x-4 mb-6 overflow-x-auto pb-2 -mx-2 px-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                                    selectedCategory === category
                                        ? 'bg-black text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Places List - Improved mobile layout */}
                    <div className="space-y-4 sm:space-y-6">
                        {listPlaces.map((place) => (
                            <div
                                key={place.place_id}
                                className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                    {/* Image - Smaller on mobile */}
                                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                                        <Image
                                            src={place.cover_media.medium}
                                            alt={place.name}
                                            width={80}
                                            height={80}
                                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl object-cover"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <div className="mb-3">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                                {place.name}
                                            </h3>

                                            {/* Rating and Status */}
                                            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
                                                <div className="flex items-center justify-center sm:justify-start space-x-1">
                                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="font-medium text-gray-900">{place.rating}</span>
                                                </div>
                                                {place.open_hours_text && (
                                                    <span className={`text-xs sm:text-sm ${place.open_hours_text.includes('Closed')
                                                        ? 'text-red-600'
                                                        : 'text-green-600'
                                                    }`}>
                                                        {place.open_hours_text}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Description - Truncate on mobile */}
                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                                                {place.description}
                                            </p>
                                        </div>

                                        {/* Buttons - Stack on mobile */}
                                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                            <button 
                                                onClick={() => handlePlaceClick(place.place_id)}
                                                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                                </svg>
                                                <span>Directions</span>
                                            </button>
                                            <button
                                                onClick={() => handleAddToList(place.place_id)}
                                                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center space-x-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                                <span>Add to list</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Share Section */}
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 text-center">
                    <button
                        onClick={handleShareList}
                        className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2 mx-auto text-sm sm:text-base"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                        </svg>
                        <span>Share list with friends</span>
                    </button>
                </div>

                {/* Comments Section */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Comments</h3>
                    <div className="text-center py-6 sm:py-8">
                        <p className="text-gray-500 text-base sm:text-lg mb-4">Be the first one to comment</p>
                        <button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-lg transition-colors font-medium text-sm sm:text-base">
                            Add Comment
                        </button>
                    </div>
                </div>

                {/* Create List Button */}
                <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
                    <button className="bg-black text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors font-semibold flex items-center space-x-2 text-sm sm:text-base">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="hidden sm:inline">Create List</span>
                        <span className="sm:hidden">Create</span>
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    )
}