import { useSession, signIn, signOut } from 'next-auth/react'

export function useAuth() {
  const { data: session, status } = useSession()

  return {
    user: session?.user,
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
    signup: async (userData: any) => {
      try {
        // For demo, we'll use the same credentials provider
        const result = await signIn('credentials', {
          email: userData.email,
          password: userData.password,
          redirect: false
        })
        return result?.ok ?? false
      } catch (error) {
        console.error('Signup error:', error)
        return false
      }
    }
  }
}