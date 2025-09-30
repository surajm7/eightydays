'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

export default function LandingPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/home')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to
          </h1>
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Eighty Days
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            {isLogin ? 'Welcome back! Sign in to continue your journey.' : 'Create an account to get started!'}
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-md mx-auto">
          {!isLogin ? (
            <>
              {/* Sign Up Form */}
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Sign Up To Eighty Days!
                </h2>
                
                <SignupForm onToggleMode={() => setIsLogin(true)} />
              </div>
            </>
          ) : (
            <>
              {/* Login Form */}
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Welcome Back!
                </h2>
                
                <LoginForm onToggleMode={() => setIsLogin(false)} />
              </div>
            </>
          )}

          {/* Version Info */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Version 2.5.7 (59)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Login Form Component
function LoginForm({ onToggleMode }: { onToggleMode: () => void }) {
  const { login, isLoading } = useAuth()
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    const success = await login(email, password)
    
    if (success) {
      router.push('/home')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email or Username
        </label>
        <input
          name="email"
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Email or Username"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Password"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>

      <div className="text-center mt-6">
        <button
          onClick={onToggleMode}
          className="text-blue-600 hover:text-blue-700 font-medium"
          type="button"
        >
          New here? Get Started
        </button>
      </div>
    </form>
  )
}

// Signup Form Component
function SignupForm({ onToggleMode }: { onToggleMode: () => void }) {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const success = await signup({ firstName, lastName, email, username, password })
    
    if (success) {
      router.push('/home')
    } else {
      setError('Signup failed. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Email"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Username
        </label>
        <input
          name="username"
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Username"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Password"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Re-enter Password
        </label>
        <input
          name="confirmPassword"
          type="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Re-enter Password"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Creating Account...' : 'Get Started'}
      </button>

      <div className="text-center mt-6">
        <button
          onClick={onToggleMode}
          className="text-blue-600 hover:text-blue-700 font-medium"
          type="button"
        >
          Already a member? Login
        </button>
      </div>
    </form>
  )
}