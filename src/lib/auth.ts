import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        return true
      }
      return false
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
      }
      return session
    },
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    async redirect({ url, baseUrl }) {
      // Allow relative URLs
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }
      // Allow URLs of the same origin
      else if (url.startsWith(baseUrl)) {
        return url
      }
      // Default redirect to dashboard
      return `${baseUrl}/dashboard`
    }
  },
  debug: process.env.NODE_ENV === "development",
} 