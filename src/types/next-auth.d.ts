import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      firstName?: string
      lastName?: string
    }
  }

  interface User {
    id: string
    email: string
    name?: string | null
    firstName?: string
    lastName?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    firstName?: string
    lastName?: string
  }
}