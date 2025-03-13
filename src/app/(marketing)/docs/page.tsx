"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { motion } from "framer-motion"

const docs = [
  {
    title: "Getting Started",
    description: "Learn the basics of SubTamer and how to use our platform effectively.",
    icon: Icons.zap,
    color: IconColors.zap,
    sections: [
      "Quick Start Guide",
      "Account Setup",
      "First Steps",
      "Basic Features",
    ],
  },
  {
    title: "API Reference",
    description: "Comprehensive documentation for our REST API and webhooks.",
    icon: Icons.laptop,
    color: IconColors.laptop,
    sections: [
      "Authentication",
      "Endpoints",
      "Webhooks",
      "Rate Limits",
    ],
  },
  {
    title: "Bank Integration",
    description: "Connect your bank accounts and manage subscriptions automatically.",
    icon: Icons.creditCard,
    color: IconColors.creditCard,
    sections: [
      "Supported Banks",
      "Security",
      "Data Sync",
      "Troubleshooting",
    ],
  },
  {
    title: "Analytics",
    description: "Understand your subscription spending with powerful analytics.",
    icon: Icons.lineChart,
    color: IconColors.lineChart,
    sections: [
      "Reports",
      "Trends",
      "Export Data",
      "Custom Views",
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 dark:from-blue-950 dark:to-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Documentation
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Everything you need to know about using SubTamer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl"
            >
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-10 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800"
                />
                <Icons.mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {docs.map((doc) => (
                  <motion.div
                    key={doc.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-x-4">
                        <doc.icon className={`h-6 w-6 ${doc.color}`} />
                        <h2 className="text-xl font-semibold">{doc.title}</h2>
                      </div>
                      <p className="mt-4 text-muted-foreground">{doc.description}</p>
                      <ul className="mt-6 space-y-2">
                        {doc.sections.map((section) => (
                          <li key={section} className="flex items-center gap-x-2">
                            <Icons.chevronRight className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{section}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button variant="ghost" className="group">
                          View documentation
                          <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-20 dark:bg-muted/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Need More Help?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Our support team is here to help you with any questions.
              </p>
              <div className="mt-10">
                <Button size="lg" className="group">
                  Contact Support
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