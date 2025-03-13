"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/shared/icons"
import { motion } from "framer-motion"

function LoginContent() {
  const searchParams = useSearchParams()
  const plan = searchParams?.get("plan") || null

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
                Choose your preferred sign in method
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button
                variant="outline"
                onClick={() => signIn("google", { callbackUrl: plan ? `/dashboard?plan=${plan}` : "/dashboard" })}
                className="w-full"
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="flex items-center justify-center">
          <Icons.loader className="h-8 w-8 animate-spin" />
        </div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
} 