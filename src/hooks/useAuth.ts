import { useSession, signIn, signOut } from 'next-auth/react'
import { User, LoginData, SignupData } from '@/types/auth'

export function useAuth() {
  const { data: session, status } = useSession()

  // Convert NextAuth user to our User type
  const user: User | null = session?.user ? {
    id: session.user.id,
    email: session.user.email,
    username: session.user.email.split('@')[0], // Generate username from email
    firstName: session.user.firstName || session.user.name?.split(' ')[0] || 'User',
    lastName: session.user.lastName || session.user.name?.split(' ')[1] || '',
  } : null

  return {
    user,
    isAuthenticated: !!session,
    isLoading: status === 'loading',
    login: async (email: string, password: string) => {
      try {
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false
        })
        return result?.ok ?? false
      } catch (error) {
        console.error('Login error:', error)
        return false
      }
    },
    logout: () => signOut({ callbackUrl: '/' }),
    signup: async (userData: SignupData) => {
      try {
        // For demo purposes, we'll treat signup as login
        // In a real app, you'd have a separate signup API
        const result = await signIn('credentials', {
          email: userData.email,
          password: userData.password,
          firstName: userData.firstName,
          lastName: userData.lastName,
          redirect: false
        })
        return result?.ok ?? false
      } catch (error) {
        console.error('Signup error:', error)
        return false
      }
    },
    forgotPassword: async (email: string) => {
      try {
        // Mock implementation - in a real app, this would call your API
        console.log('Password reset requested for:', email)
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Show success message (as per assignment requirements, no backend needed)
        alert(`Password reset link sent to ${email}\n\nFor this demo, you can use any credentials:\nEmail: demo@example.com\nPassword: password`)
        return true
      } catch (error) {
        console.error('Password reset error:', error)
        return false
      }
    }
  }
}