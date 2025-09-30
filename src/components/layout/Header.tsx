'use client'

import { useAuth } from '@/hooks/useAuth'

interface HeaderProps {
  user: {
    firstName: string
    lastName: string
    email: string
    name: string
  }
}

export default function Header({ user }: HeaderProps) {
  const { logout } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">Eighty Days</h1>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-medium text-gray-900">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {user.firstName[0]}{user.lastName[0]}
              </span>
            </div>

            <button
              onClick={logout}
              className="text-gray-500 hover:text-gray-700 text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}