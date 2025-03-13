"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  CreditCard,
  Bell,
  Building2,
  BarChart3,
  Tags,
  Code,
  Check,
  X,
  Zap,
  Shield,
  Clock,
  Wallet,
  PieChart,
  Settings,
  Users,
  Globe,
  Lock,
  Mail,
  Calendar,
  AlertCircle,
  ChevronRight,
} from "lucide-react"

const features = [
  {
    name: "Subscription Tracking",
    description: "Keep all your subscriptions in one place. Track renewal dates, costs, and payment methods with ease.",
    icon: CreditCard,
    color: "text-blue-500",
    details: [
      "Manual subscription entry",
      "Automatic bank integration",
      "Renewal date tracking",
      "Payment method management",
    ],
    premium: false,
  },
  {
    name: "Smart Notifications",
    description: "Never miss a renewal or overpay again. Get notified about upcoming payments and price changes.",
    icon: Bell,
    color: "text-purple-500",
    details: [
      "Renewal reminders",
      "Price change alerts",
      "Payment confirmations",
      "Custom notification preferences",
    ],
    premium: false,
  },
  {
    name: "Bank Integration",
    description: "Connect your bank account to automatically track subscription payments and identify new subscriptions.",
    icon: Building2,
    color: "text-green-500",
    details: [
      "Secure bank connections",
      "Automatic transaction matching",
      "Subscription discovery",
      "Payment verification",
    ],
    premium: true,
  },
  {
    name: "Analytics & Insights",
    description: "Understand your subscription spending with detailed analytics and personalized recommendations.",
    icon: BarChart3,
    color: "text-orange-500",
    details: [
      "Spending trends",
      "Cost optimization suggestions",
      "Subscription usage analytics",
      "Budget tracking",
    ],
    premium: true,
  },
  {
    name: "Custom Categories",
    description: "Organize your subscriptions with custom categories and tags for better management.",
    icon: Tags,
    color: "text-pink-500",
    details: [
      "Custom categories",
      "Subscription grouping",
      "Tag-based filtering",
      "Flexible organization",
    ],
    premium: false,
  },
  {
    name: "API Access",
    description: "Integrate SubTamer with your favorite tools and automate your subscription management.",
    icon: Code,
    color: "text-indigo-500",
    details: [
      "RESTful API",
      "Webhook support",
      "Custom integrations",
      "Developer documentation",
    ],
    premium: true,
  },
]

const featureTable = [
  {
    feature: "Subscription Management",
    basic: true,
    premium: true,
    icon: CreditCard,
    color: "text-blue-500",
  },
  {
    feature: "Smart Notifications",
    basic: true,
    premium: true,
    icon: Bell,
    color: "text-purple-500",
  },
  {
    feature: "Bank Integration",
    basic: false,
    premium: true,
    icon: Building2,
    color: "text-green-500",
  },
  {
    feature: "Advanced Analytics",
    basic: false,
    premium: true,
    icon: BarChart3,
    color: "text-orange-500",
  },
  {
    feature: "Custom Categories",
    basic: true,
    premium: true,
    icon: Tags,
    color: "text-pink-500",
  },
  {
    feature: "API Access",
    basic: false,
    premium: true,
    icon: Code,
    color: "text-indigo-500",
  },
  {
    feature: "Priority Support",
    basic: false,
    premium: true,
    icon: Users,
    color: "text-teal-500",
  },
  {
    feature: "Multi-Currency Support",
    basic: false,
    premium: true,
    icon: Globe,
    color: "text-cyan-500",
  },
  {
    feature: "Advanced Security",
    basic: true,
    premium: true,
    icon: Shield,
    color: "text-red-500",
  },
  {
    feature: "Automated Reports",
    basic: false,
    premium: true,
    icon: PieChart,
    color: "text-yellow-500",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeaturesContent() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  return (
    <>
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
              Powerful Features for Subscription Management
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Everything you need to take control of your subscriptions and save money.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <div>
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                    {feature.premium && (
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        Premium
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-muted/50 py-20 dark:bg-muted/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Compare Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See what's included in each plan and choose the one that's right for you.
            </p>
          </motion.div>

          <div className="mt-12 overflow-hidden rounded-lg border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Feature</TableHead>
                  <TableHead className="text-center">Basic</TableHead>
                  <TableHead className="text-center">Premium</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featureTable.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <row.icon className={`h-4 w-4 ${row.color}`} />
                        {row.feature}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {row.basic ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-red-500" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join thousands of users who are already saving money and time with SubTamer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <a href="/login">
                  Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/pricing">
                  View Pricing <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 