"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { motion } from "framer-motion"

const endpoints = [
  {
    name: "Authentication",
    description: "Endpoints for user authentication and authorization.",
    icon: Icons.shield,
    color: IconColors.shield,
    methods: [
      { name: "POST /api/auth/login", description: "Authenticate a user" },
      { name: "POST /api/auth/register", description: "Register a new user" },
      { name: "POST /api/auth/logout", description: "Log out the current user" },
      { name: "GET /api/auth/me", description: "Get current user information" },
    ],
  },
  {
    name: "Subscriptions",
    description: "Manage user subscriptions and billing.",
    icon: Icons.creditCard,
    color: IconColors.creditCard,
    methods: [
      { name: "GET /api/subscriptions", description: "List all subscriptions" },
      { name: "POST /api/subscriptions", description: "Create a new subscription" },
      { name: "PUT /api/subscriptions/:id", description: "Update a subscription" },
      { name: "DELETE /api/subscriptions/:id", description: "Cancel a subscription" },
    ],
  },
  {
    name: "Bank Integration",
    description: "Connect and manage bank accounts.",
    icon: Icons.wallet,
    color: IconColors.wallet,
    methods: [
      { name: "POST /api/bank/connect", description: "Connect a bank account" },
      { name: "GET /api/bank/accounts", description: "List connected accounts" },
      { name: "DELETE /api/bank/accounts/:id", description: "Remove a bank account" },
      { name: "GET /api/bank/transactions", description: "Get transaction history" },
    ],
  },
  {
    name: "Analytics",
    description: "Access subscription analytics and reports.",
    icon: Icons.lineChart,
    color: IconColors.lineChart,
    methods: [
      { name: "GET /api/analytics/overview", description: "Get analytics overview" },
      { name: "GET /api/analytics/spending", description: "Get spending trends" },
      { name: "GET /api/analytics/categories", description: "Get category breakdown" },
      { name: "GET /api/analytics/export", description: "Export analytics data" },
    ],
  },
]

export default function APIPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-20 dark:from-blue-950 dark:to-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                API Documentation
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl leading-8 text-muted-foreground">
                Integrate SubTamer's powerful features into your applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Authentication Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Authentication
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
                All API requests require authentication using your API key. Include it in the Authorization header:
              </p>
              <div className="mt-6 sm:mt-8 rounded-lg bg-gray-100 p-4 sm:p-6 dark:bg-gray-800 overflow-x-auto">
                <code className="text-sm whitespace-nowrap">
                  Authorization: Bearer your_api_key_here
                </code>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Endpoints Grid */}
        <section className="bg-muted/50 py-12 sm:py-16 md:py-20 dark:bg-muted/10">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Available Endpoints
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
                Explore our comprehensive API endpoints for managing subscriptions and bank accounts.
              </p>

              <div className="mt-8 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8 md:space-y-12">
                {endpoints.map((endpoint) => (
                  <motion.div
                    key={endpoint.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-6 sm:p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-x-3 sm:gap-x-4">
                        <endpoint.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${endpoint.color}`} />
                        <h3 className="text-lg sm:text-xl font-semibold">{endpoint.name}</h3>
                      </div>
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">{endpoint.description}</p>
                      <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                        {endpoint.methods.map((method) => (
                          <div key={method.name} className="rounded-lg bg-gray-100 p-3 sm:p-4 dark:bg-gray-800 overflow-x-auto">
                            <code className="text-xs sm:text-sm font-medium whitespace-nowrap">{method.name}</code>
                            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rate Limiting Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Rate Limiting
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
                To ensure fair usage of our API, we implement rate limiting:
              </p>
              <ul className="mt-4 sm:mt-6 list-disc pl-5 sm:pl-6 text-sm sm:text-base text-muted-foreground space-y-2">
                <li>Free tier: 100 requests per minute</li>
                <li>Pro tier: 1000 requests per minute</li>
                <li>Enterprise tier: Custom limits available</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-12 sm:py-16 md:py-20 dark:bg-muted/10">
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
                Get your API key and start integrating SubTamer into your applications.
              </p>
              <div className="mt-6 sm:mt-8 md:mt-10">
                <Button size="lg" className="group w-full sm:w-auto">
                  Get API Key
                  <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 