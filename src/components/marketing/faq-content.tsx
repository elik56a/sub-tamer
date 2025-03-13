"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail } from "lucide-react"

const faqs = [
  {
    question: "What is SubTamer?",
    answer: "SubTamer is a subscription management platform that helps you track, manage, and optimize all your subscriptions in one place. It connects with your bank accounts to automatically identify and track subscription payments, helping you save money and avoid missed renewals.",
  },
  {
    question: "How does SubTamer work?",
    answer: "SubTamer connects to your bank accounts securely through Plaid integration. It automatically identifies subscription payments from your transactions, categorizes them, and provides insights about your subscription spending. You can also manually add subscriptions that aren't automatically detected.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we take security seriously. We use bank-level encryption and security measures to protect your data. We never store your bank credentials, and all connections are made through secure, encrypted channels. We also comply with international data protection regulations.",
  },
  {
    question: "What banks do you support?",
    answer: "We support thousands of banks and financial institutions worldwide through our Plaid integration. This includes major banks in the US, Canada, UK, and many other countries. You can check if your bank is supported during the connection process.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your SubTamer subscription at any time. We offer a 30-day money-back guarantee if you're not satisfied with our service. Your data will be securely deleted upon cancellation.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial of our Premium plan. You can start your trial without entering any payment information, and you'll have full access to all features during the trial period.",
  },
]

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 dark:from-blue-950 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find answers to common questions about SubTamer. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                >
                  <button
                    className="flex w-full items-center justify-between p-6 text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 dark:from-teal-950 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our support team is here to help. Contact us and we'll get back to you as soon as possible.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <a href="mailto:support@subtamer.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/docs">View Documentation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 