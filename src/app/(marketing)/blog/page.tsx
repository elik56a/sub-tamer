"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "How to Save Money on Subscriptions",
    description: "Learn practical tips and strategies to reduce your subscription spending without sacrificing the services you love.",
    date: "March 15, 2024",
    readTime: "5 min read",
    icon: Icons.wallet,
    color: IconColors.wallet,
  },
  {
    title: "The Future of Subscription Management",
    description: "Explore how AI and automation are revolutionizing the way we manage and optimize our digital subscriptions.",
    date: "March 10, 2024",
    readTime: "7 min read",
    icon: Icons.sparkles,
    color: IconColors.sparkles,
  },
  {
    title: "Understanding Your Subscription Analytics",
    description: "A comprehensive guide to interpreting your subscription spending patterns and making data-driven decisions.",
    date: "March 5, 2024",
    readTime: "6 min read",
    icon: Icons.lineChart,
    color: IconColors.lineChart,
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Blog
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Insights, tips, and updates about subscription management and personal finance.
              </p>

              <div className="mt-16 space-y-12">
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-x-4">
                        <post.icon className={`h-6 w-6 ${post.color}`} />
                        <div>
                          <h2 className="text-2xl font-semibold">{post.title}</h2>
                          <div className="mt-2 flex items-center gap-x-4 text-sm text-muted-foreground">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">{post.description}</p>
                      <div className="mt-6">
                        <Button variant="ghost" className="group">
                          Read more
                          <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-16 text-center">
                <Button size="lg">
                  View all posts
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 