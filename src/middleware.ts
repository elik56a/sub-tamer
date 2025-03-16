import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const { pathname, origin } = req.nextUrl

    // If user is authenticated and trying to access login page
    if (req.nextauth.token && pathname === "/login") {
      return NextResponse.redirect(`${origin}/dashboard`)
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Allow access to public routes without authentication
        const publicRoutes = [
          "/",
          "/login",
          "/terms",
          "/privacy",
          "/cookies",
          "/gdpr",
          "/about",
          "/blog",
          "/careers",
          "/contact",
          "/docs",
          "/faq",
          "/features",
          "/help",
          "/pricing",
          "/status",
          "/api/auth/callback/google"
        ]

        // Always allow access to public routes
        if (publicRoutes.includes(pathname)) {
          return true
        }

        // For protected routes, require authentication
        return !!token
      },
    },
    pages: {
      signIn: "/login",
      error: "/auth/error",
    },
  }
)

// Update matcher to include auth-related paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)",
  ],
} 