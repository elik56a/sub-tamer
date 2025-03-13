"use client"

import { motion } from "framer-motion"

export default function GDPRPage() {
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
                GDPR Compliance
              </h1>
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                  <p className="mt-4">
                    The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives you more control over your personal data. This page explains how SubTamer complies with GDPR requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">2. Your Rights Under GDPR</h2>
                  <p className="mt-4">
                    Under GDPR, you have the following rights:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">3. Data We Collect</h2>
                  <p className="mt-4">
                    We collect and process the following types of personal data:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Account information (name, email, password)</li>
                    <li>Subscription data</li>
                    <li>Bank account information (when you choose to connect your accounts)</li>
                    <li>Usage data and analytics</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">4. How We Use Your Data</h2>
                  <p className="mt-4">
                    We process your personal data for the following purposes:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Providing and improving our services</li>
                    <li>Processing your transactions</li>
                    <li>Sending important updates and notifications</li>
                    <li>Analyzing and optimizing our platform</li>
                    <li>Ensuring security and preventing fraud</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
                  <p className="mt-4">
                    We implement appropriate technical and organizational measures to protect your personal data:
                  </p>
                  <ul className="mt-4 list-disc pl-6">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Data backup and recovery procedures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">6. Data Transfers</h2>
                  <p className="mt-4">
                    We may transfer your personal data to third parties or countries outside the EU. When we do so, we ensure appropriate safeguards are in place to protect your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground">7. Contact Us</h2>
                  <p className="mt-4">
                    If you have any questions about our GDPR compliance or wish to exercise your rights, please contact us at:
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