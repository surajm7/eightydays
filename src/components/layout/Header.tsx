'use client'
import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

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
    const router = useRouter()

    // Add logo click handler
    const handleLogoClick = () => {
        router.push('/')
    }

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - Make it clickable */}
                    <button 
                        onClick={handleLogoClick}
                        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                    >
                        <img
                            src='/eightydaysai_logo.jpeg'
                            alt="EightyDays Logo"
                            className="w-8 h-8 rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <h1 className="text-3xl font-normal tracking-tight text-gray-900 transition-colors duration-300 hover:text-gray-700">
                            Eighty&nbsp;Days<span className="align-super text-xs ml-1">™</span>
                        </h1>
                    </button>

                    {/* Rest of your header component remains the same... */}
                    {/* User Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Become a Host */}
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                            Become a Host
                        </button>

                        {/* Language & Currency */}
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
                                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-600">
                                    <span className="text-white font-semibold text-sm transition-transform duration-300 hover:scale-110">
                                        {user.firstName[0]}{user.lastName[0]}
                                    </span>
                                </div>
                            </button>

                            {/* Dropdown Menu */}
                            {showUserMenu && (
                                <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in slide-in-from-top-5 duration-300">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <p className="font-medium text-gray-900 transition-colors duration-300">{user.firstName} {user.lastName}</p>
                                        <p className="text-sm text-gray-500 transition-colors duration-300">{user.email}</p>
                                    </div>

                                    <div className="py-2">
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1">
                                            Messages
                                        </button>
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1">
                                            Notifications
                                        </button>
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1">
                                            Trips
                                        </button>
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1">
                                            Wishlists
                                        </button>
                                    </div>

                                    <div className="py-2 border-t border-gray-100">
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1">
                                            Account
                                        </button>
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1">
                                            Help
                                        </button>
                                        <button
                                            onClick={logout}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1 border-t border-gray-100 mt-2"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Categories Navigation */}
                <div className="flex items-center space-x-8 py-4 border-t border-gray-100">
                    {[
                        { icon: '🏝️', label: 'Beaches' },
                        { icon: '🏔️', label: 'Mountains' },
                        { icon: '🏛️', label: 'Historical' },
                        { icon: '🎨', label: 'Art & Culture' },
                        { icon: '🍴', label: 'Food' },
                        { icon: '🚗', label: 'Road Trips' }
                    ].map((item) => (
                        <button 
                            key={item.label}
                            className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 group"
                        >
                            <span className="transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                            <span className="transition-all duration-300">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </header>
    )
}