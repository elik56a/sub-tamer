import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    console.log("Middleware executing for path:", req.nextUrl.pathname)
    console.log("Auth token exists:", !!req.nextauth.token)

    // If the user is logged in and trying to access login page
    if (req.nextauth.token && req.nextUrl.pathname === "/login") {
      console.log("User is logged in and trying to access login page")
      const callbackUrl = req.nextUrl.searchParams.get("callbackUrl") || "/dashboard"
      console.log("Redirecting to:", callbackUrl)
      return NextResponse.redirect(new URL(callbackUrl, req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        console.log("Authorization check for path:", req.nextUrl.pathname)
        console.log("Token exists:", !!token)
        console.log("Token details:", token)

        // Allow access to public routes without authentication
        const publicRoutes = ["/", "/login", "/terms", "/privacy"]
        if (publicRoutes.includes(req.nextUrl.pathname)) {
          console.log("Path is public, allowing access")
          return true
        }

        // Require authentication for all other routes
        if (!token) {
          console.log("No token found, redirecting to login")
          return false
        }

        console.log("Token found, allowing access")
        return true
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