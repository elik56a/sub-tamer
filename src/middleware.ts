import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // If the user is logged in and trying to access login page
    if (req.nextauth.token && req.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
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
        if (publicRoutes.includes(req.nextUrl.pathname)) {
          return true
        }

        // Require authentication for all other routes
        return !!token
      },
    },
    pages: {
      signIn: "/login",
    },
  }
)

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
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
} 