'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { AuthForm } from '@/components/auth/AuthForm'

const backgroundImages = [
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80', // Road trip
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Mountains
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Beach
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2120&q=80', // Adventure road
]

export default function LandingPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [currentBg, setCurrentBg] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/home')
    }
  }, [isAuthenticated, isLoading, router])

  // Rotate background every 8 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
        setIsTransitioning(false)
      }, 500) // Transition duration
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    )
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Background Images with Transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat transition-opacity duration-1000 ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${image}")`,
            zIndex: index === currentBg ? 0 : -1
          }}
        />
      ))}
      
      {/* Dark Overlay for better readability */}
      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-1000 ${
        isTransitioning ? 'opacity-70' : 'opacity-50'
      }`} />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-indigo-400 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">
            Welcome to
          </h1>
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
            Eighty Days
          </h1>
          <p className="text-xl text-white/95 max-w-md mx-auto drop-shadow-lg font-medium">
            {isLogin ? 'Welcome back! Sign in to continue your journey.' : 'Create an account to get started!'}
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/30">
            <AuthForm isLogin={isLogin} onToggleMode={() => setIsLogin(!isLogin)} />
          </div>


        </div>
      </div>
    </div>
  )
}