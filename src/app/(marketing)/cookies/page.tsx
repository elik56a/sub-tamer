"use client"

import { motion } from "framer-motion"

export default function CookiesPage() {
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
                Cookie Policy
              </h1>
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">1. What Are Cookies</h2>
                  <p className="mt-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and enable certain features to function properly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">2. How We Use Cookies</h2>
                  <p className="mt-4">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Essential cookies: Required for the website to function properly</li>
                    <li>Authentication cookies: To keep you logged in</li>
                    <li>Analytics cookies: To understand how visitors use our site</li>
                    <li>Preference cookies: To remember your settings and preferences</li>
                    <li>Marketing cookies: To track your visits to our website</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">3. Types of Cookies We Use</h2>
                  <p className="mt-4">
                    We use the following types of cookies:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Session cookies: Temporary cookies that expire when you close your browser</li>
                    <li>Persistent cookies: Remain on your device until you delete them</li>
                    <li>Third-party cookies: Set by external services we use</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">4. Managing Cookies</h2>
                  <p className="mt-4">
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                    <li>Cookie consent: We provide options to manage cookie preferences</li>
                    <li>Third-party opt-out: You can opt out of third-party cookies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">5. Contact Us</h2>
                  <p className="mt-4">
                    If you have any questions about our use of cookies, please contact us at:
                  </p>
                  <p className="mt-2">
                    Email: privacy@subtamer.com
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 