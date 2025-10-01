'use client'
import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface HeaderProps {
    user: {
        firstName: string
        lastName: string
        email: string
    }
}

export default function Header({ user }: HeaderProps) {
    const { logout } = useAuth()
    const [showUserMenu, setShowUserMenu] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const router = useRouter()

    const handleLogoClick = () => {
        router.push('/')
    }

    const handleLogout = () => {
        logout()
        setShowUserMenu(false)
    }

    const handleNavigation = (path: string) => {
        router.push(path)
        setShowUserMenu(false)
        setShowMobileMenu(false)
    }

    const categories = [
        { icon: '🏝️', label: 'Beaches' },
        { icon: '🏔️', label: 'Mountains' },
        { icon: '🏛️', label: 'Historical' },
        { icon: '🎨', label: 'Art & Culture' },
        { icon: '🍴', label: 'Food' },
        { icon: '🚗', label: 'Road Trips' }
    ]

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo */}
                    <button 
                        onClick={handleLogoClick}
                        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src='/eightydaysai_logo.jpeg'
                            alt="EightyDays Logo"
                            width={32}
                            height={32}
                            className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-gray-900 transition-colors duration-300 hover:text-gray-700">
                            Eighty&nbsp;Days<span className="align-super text-xs ml-1">™</span>
                        </h1>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                            Become a Host
                        </button>

                        <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                            <svg className="w-5 h-5 text-gray-600 transition-colors duration-300 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                        </button>

                        {/* User Profile Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center space-x-2 border border-gray-300 rounded-full p-1 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                            >
                                <svg className="w-5 h-5 text-gray-600 ml-1 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-500 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-600">
                                    <span className="text-white font-semibold text-xs sm:text-sm transition-transform duration-300 hover:scale-110">
                                        {user.firstName[0]}{user.lastName[0]}
                                    </span>
                                </div>
                            </button>

                            {/* User Dropdown Menu */}
                            {showUserMenu && (
                                <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in slide-in-from-top-5 duration-200">
                                    {/* User Info */}
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="font-medium text-gray-900 text-sm">{user.firstName} {user.lastName}</p>
                                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                    </div>

                                    {/* Navigation Links */}
                                    <div className="py-2">
                                        <button 
                                            onClick={() => handleNavigation('/profile')}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 group"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <span>Profile</span>
                                        </button>
                                        
                                        <button 
                                            onClick={() => handleNavigation('/my-lists')}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 group"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                            <span>My Lists</span>
                                        </button>
                                        
                                        <button 
                                            onClick={() => handleNavigation('/saved')}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 group"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5-7 3.5V5z" />
                                            </svg>
                                            <span>Saved Items</span>
                                        </button>
                                        
                                        <button 
                                            onClick={() => handleNavigation('/trips')}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 group"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>My Trips</span>
                                        </button>
                                    </div>

                                    {/* Settings & Support */}
                                    <div className="py-2 border-t border-gray-100">
                                        <button 
                                            onClick={() => handleNavigation('/settings')}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 group"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>Settings</span>
                                        </button>
                                        
                                        <button 
                                            onClick={() => handleNavigation('/help')}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 group"
                                        >
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Help & Support</span>
                                        </button>
                                    </div>

                                    {/* Logout */}
                                    <div className="py-2 border-t border-gray-100">
                                        <button 
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-all duration-200 flex items-center space-x-3 group"
                                        >
                                            <svg className="w-4 h-4 text-red-500 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <span>Log out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Categories Navigation - Hidden on mobile */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8 py-3 sm:py-4 border-t border-gray-100">
                    {categories.map((item) => (
                        <button 
                            key={item.label}
                            className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 group"
                        >
                            <span className="transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                            <span className="transition-all duration-300">{item.label}</span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu */}
                {showMobileMenu && (
                    <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
                        <div className="space-y-4">
                            {/* User Info in Mobile Menu */}
                            <div className="px-2 pb-3 border-b border-gray-100">
                                <p className="font-medium text-gray-900 text-sm">{user.firstName} {user.lastName}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>

                            <button className="w-full text-left text-sm font-medium text-gray-600 hover:text-gray-900 py-2">
                                Become a Host
                            </button>
                            
                            {/* Mobile Navigation Links */}
                            <div className="space-y-2">
                                <button onClick={() => handleNavigation('/profile')} className="w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2">
                                    Profile
                                </button>
                                <button onClick={() => handleNavigation('/my-lists')} className="w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2">
                                    My Lists
                                </button>
                                <button onClick={() => handleNavigation('/saved')} className="w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2">
                                    Saved Items
                                </button>
                                <button onClick={() => handleNavigation('/trips')} className="w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2">
                                    My Trips
                                </button>
                            </div>

                            {/* Mobile Categories */}
                            <div className="pt-3 border-t border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-500 mb-2">Categories</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {categories.map((item) => (
                                        <button 
                                            key={item.label}
                                            className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 py-2"
                                        >
                                            <span>{item.icon}</span>
                                            <span>{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Logout */}
                            <div className="pt-3 border-t border-gray-100">
                                <button 
                                    onClick={handleLogout}
                                    className="w-full text-left text-sm text-red-600 hover:text-red-700 py-2 flex items-center space-x-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <span>Log out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay to close menus when clicking outside */}
            {(showUserMenu || showMobileMenu) && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-10 z-40 md:hidden"
                    onClick={() => {
                        setShowUserMenu(false)
                        setShowMobileMenu(false)
                    }}
                />
            )}
        </header>
    )
}