"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                  <p className="mt-4">
                    At SubTamer, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                  <p className="mt-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Account information (name, email, password)</li>
                    <li>Subscription data</li>
                    <li>Bank account information (when you choose to connect your accounts)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
                  <p className="mt-4">
                    We use the information we collect to:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Provide and maintain our service</li>
                    <li>Process your transactions</li>
                    <li>Send you important updates and notifications</li>
                    <li>Improve our service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
                  <p className="mt-4">
                    We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">5. Contact Us</h2>
                  <p className="mt-4">
                    If you have any questions about this Privacy Policy, please contact us at:
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