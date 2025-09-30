'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

interface LoginData {
  email: string
  password: string
}

interface LoginFormProps {
  onToggleMode: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onToggleMode }) => {
  const { login, isLoading, forgotPassword } = useAuth()
  const router = useRouter()
  const [error, setError] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmailSent, setResetEmailSent] = useState(false)
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<LoginData>()

  const onSubmit = async (data: LoginData) => {
    setError('')
    const success = await login(data.email, data.password)
    
    if (success) {
      router.push('/home')
    } else {
      setError('Invalid email or password. Try: demo@example.com / password')
    }
  }

  const handleForgotPassword = async () => {
    const email = watch('email')
    
    if (!email) {
      setError('Please enter your email address to reset password')
      return
    }

    setForgotPasswordLoading(true)
    setError('')

    const success = await forgotPassword(email)
    
    if (success) {
      setResetEmailSent(true)
      setTimeout(() => {
        setShowForgotPassword(false)
        setResetEmailSent(false)
      }, 5000)
    } else {
      setError('Failed to send reset email. Please try again.')
    }
    
    setForgotPasswordLoading(false)
  }

  // Forgot Password View
  if (showForgotPassword) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Reset Your Password
        </h2>
        
        {resetEmailSent ? (
          <div className="text-center space-y-4">
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Password reset link sent!
            </div>
            <p className="text-gray-600 text-sm">
              Check your email and follow the instructions to reset your password.
            </p>
            <button
              onClick={() => {
                setShowForgotPassword(false)
                setResetEmailSent(false)
              }}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <p className="text-gray-600 text-sm text-center">
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleForgotPassword}
                  disabled={forgotPasswordLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {forgotPasswordLoading ? 'Sending...' : 'Send Reset Link'}
                </button>

                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="w-full text-gray-600 hover:text-gray-700 font-medium py-2 text-sm"
                >
                  ← Back to Login
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  // Normal Login View
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Welcome Back!
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email or Username
          </label>
          <input
            type="text"
            {...register('email', { required: 'Email or username is required' })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Email or Username"
            defaultValue="demo@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
            placeholder="Password"
            defaultValue="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <div className="text-center mt-6">
        <button
          onClick={onToggleMode}
          className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          type="button"
        >
          New here? Get Started
        </button>
      </div>
    </div>
  )
}