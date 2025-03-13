"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { motion } from "framer-motion"

export default function ContactPage() {
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
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold">Get in Touch</h2>
                    <p className="mt-4 text-muted-foreground">
                      We're here to help with any questions you might have.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-x-4">
                      <Icons.mail className={`h-6 w-6 ${IconColors.mail}`} />
                      <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-muted-foreground">support@subtamer.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-4">
                      <Icons.globe className={`h-6 w-6 ${IconColors.globe}`} />
                      <div>
                        <h3 className="text-lg font-semibold">Office</h3>
                        <p className="text-muted-foreground">
                          123 Tech Street<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-4">
                      <Icons.bell className={`h-6 w-6 ${IconColors.bell}`} />
                      <div>
                        <h3 className="text-lg font-semibold">Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9am - 5pm PST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                      >
                        <option value="">Select a subject</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700"
                        placeholder="Your message"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 