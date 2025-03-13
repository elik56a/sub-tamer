"use client"

import { signIn, useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/shared/icons"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginPage() {
  console.log("Login page is rendering")
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()
  const router = useRouter()

  console.log("Login page session status:", status)
  console.log("Login page session data:", session)

  useEffect(() => {
    if (status === "authenticated") {
      console.log("User is authenticated, redirecting to dashboard")
      router.replace("/dashboard")
    }
  }, [status, router])

  // Show loading state while checking session or redirecting
  if (status === "loading" || status === "authenticated") {
    console.log("Login page is loading or redirecting")
    return (
      <div className="container relative h-screen flex items-center justify-center">
        <Icons.loader className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  const handleSignIn = async () => {
    console.log("Starting sign in process")
    try {
      const callbackUrl = searchParams?.get("callbackUrl") || "/dashboard"
      console.log("Sign in callback URL:", callbackUrl)
      await signIn("google", {
        callbackUrl,
      })
    } catch (error) {
      console.error("Sign in error:", error)
    }
  }

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r"
      >
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Icons.mail className="mr-2 h-6 w-6" />
          SubTamer
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "SubTamer has revolutionized how I manage my subscriptions. It's like having a personal finance assistant in my pocket."
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 lg:p-8 h-full flex items-center"
      >
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button
                variant="outline"
                onClick={handleSignIn}
                className="w-full"
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
            </CardContent>
          </Card>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  )
} 