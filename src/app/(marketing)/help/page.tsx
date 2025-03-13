"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "How do I connect my bank account?",
    answer: "To connect your bank account, go to the 'Bank Integration' section in your dashboard and follow the secure connection process. We use Plaid to ensure your data is safe and encrypted.",
    icon: Icons.creditCard,
    color: IconColors.creditCard,
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
    icon: Icons.wallet,
    color: IconColors.wallet,
  },
  {
    question: "How secure is my data?",
    answer: "We use industry-standard encryption and security measures to protect your data. All sensitive information is encrypted in transit and at rest.",
    icon: Icons.shield,
    color: IconColors.shield,
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe.",
    icon: Icons.creditCard,
    color: IconColors.creditCard,
  },
]

const supportResources = [
  {
    title: "Video Tutorials",
    description: "Watch step-by-step guides on using SubTamer's features.",
    icon: Icons.zap,
    color: IconColors.zap,
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share tips and tricks.",
    icon: Icons.users,
    color: IconColors.users,
  },
  {
    title: "Email Support",
    description: "Get help from our support team via email.",
    icon: Icons.mail,
    color: IconColors.mail,
  },
  {
    title: "Status Page",
    description: "Check the current status of our services.",
    icon: Icons.lineChart,
    color: IconColors.lineChart,
  },
]

export default function HelpPage() {
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
                Help Center
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Find answers to common questions and get support.
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
                  placeholder="Search for help..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-10 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800"
                />
                <Icons.mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Find answers to common questions about SubTamer.
              </p>

              <div className="mt-16 space-y-8">
                {faqs.map((faq) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-x-4">
                        <faq.icon className={`h-6 w-6 ${faq.color}`} />
                        <h3 className="text-xl font-semibold">{faq.question}</h3>
                      </div>
                      <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="bg-muted/50 py-20 dark:bg-muted/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Support Resources
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Additional resources to help you get the most out of SubTamer.
              </p>

              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {supportResources.map((resource) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <resource.icon className={`h-8 w-8 ${resource.color}`} />
                      <h3 className="mt-6 text-xl font-semibold">{resource.title}</h3>
                      <p className="mt-2 text-muted-foreground">{resource.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Still Need Help?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Our support team is available 24/7 to assist you.
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