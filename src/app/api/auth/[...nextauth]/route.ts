import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

interface User {
  id: string
  email: string
  name: string
  firstName: string
  lastName: string
}

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Mock authentication - replace with real database check
        if (credentials?.email && credentials?.password) {
          const userEmail = credentials.email as string
          return {
            id: '1',
            email: userEmail,
            name: userEmail.split('@')[0],
            firstName: 'John',
            lastName: 'Doe'
          } as User
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userData = user as User
        token.id = userData.id
        token.firstName = userData.firstName
        token.lastName = userData.lastName
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.firstName = token.firstName as string
        session.user.lastName = token.lastName as string
      }
      return session
    }
  },
  pages: {
    signIn: '/'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }