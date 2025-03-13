"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
                  <p className="mt-4">
                    By accessing or using SubTamer, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">2. Use License</h2>
                  <p className="mt-4">
                    Permission is granted to temporarily access SubTamer for personal, non-commercial use only. This license does not include:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Modifying or copying the materials</li>
                    <li>Using the materials for any commercial purpose</li>
                    <li>Attempting to decompile or reverse engineer any software</li>
                    <li>Removing any copyright or other proprietary notations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">3. User Responsibilities</h2>
                  <p className="mt-4">
                    As a user of SubTamer, you agree to:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account</li>
                    <li>Not use the service for any illegal purposes</li>
                    <li>Not interfere with the proper working of the service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">4. Service Modifications</h2>
                  <p className="mt-4">
                    We reserve the right to modify or discontinue the service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">5. Contact Information</h2>
                  <p className="mt-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="mt-2">
                    Email: legal@subtamer.com
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