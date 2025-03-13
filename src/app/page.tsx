"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { ArrowRight, CheckCircle2, CreditCard, LineChart, Bell, Shield, Zap, Sparkles, TrendingUp, Wallet, Users, Lock, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MarketingNav } from "@/components/marketing/navbar"
import { MarketingFooter } from "@/components/marketing/footer"

const features = [
  {
    name: "Track All Subscriptions",
    description: "Keep all your subscriptions in one place. Never miss a renewal or overpay again.",
    icon: Icons.creditCard,
    color: IconColors.creditCard,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Bank Integration",
    description: "Connect your bank account to automatically track subscription payments and identify new subscriptions.",
    icon: Icons.lineChart,
    color: IconColors.lineChart,
    gradient: "from-teal-500 to-teal-600",
  },
  {
    name: "Smart Notifications",
    description: "Get notified about upcoming payments, price changes, and potential savings opportunities.",
    icon: Icons.bell,
    color: IconColors.bell,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    name: "Analytics & Insights",
    description: "Understand your subscription spending with detailed analytics and personalized recommendations.",
    icon: Icons.lineChart,
    color: IconColors.lineChart,
    gradient: "from-blue-500 to-blue-600",
  },
]

const testimonials = [
  {
    content: "SubTamer has completely transformed how I manage my subscriptions. I've saved over $200 monthly by identifying unused services.",
    author: "Sarah Johnson",
    role: "Freelance Designer",
    image: "/testimonials/sarah.jpg",
  },
  {
    content: "The bank integration feature is a game-changer. It automatically tracks all my subscription payments without any manual work.",
    author: "Michael Chen",
    role: "Software Engineer",
    image: "/testimonials/michael.jpg",
  },
  {
    content: "I love the smart notifications. They help me stay on top of my subscriptions and avoid late payments.",
    author: "Emma Davis",
    role: "Marketing Manager",
    image: "/testimonials/emma.jpg",
  },
]

const stats = [
  { name: "Active Users", value: "10,000+", icon: Users },
  { name: "Subscriptions Tracked", value: "1M+", icon: CreditCard },
  { name: "Money Saved", value: "$2M+", icon: Wallet },
  { name: "Customer Satisfaction", value: "98%", icon: Sparkles },
]

const benefits = [
  "Track unlimited subscriptions",
  "Automatic bank integration",
  "Smart renewal reminders",
  "Detailed analytics",
  "Custom categories",
  "Export data",
  "Mobile app access",
  "24/7 support",
]

const securityFeatures = [
  {
    name: "Bank-Level Security",
    description: "Your data is protected with industry-standard encryption and security measures.",
    icon: Lock,
  },
  {
    name: "Global Compliance",
    description: "We comply with international data protection regulations and standards.",
    icon: Globe,
  },
  {
    name: "Regular Audits",
    description: "Our security practices are regularly audited by independent third parties.",
    icon: Shield,
  },
]

const integrations = [
  {
    name: "Banking Apps",
    description: "Connect with major banks and financial institutions worldwide.",
    icon: CreditCard,
  },
  {
    name: "Accounting Software",
    description: "Sync with popular accounting tools for seamless financial management.",
    icon: LineChart,
  },
  {
    name: "Personal Finance Apps",
    description: "Integrate with your favorite personal finance applications.",
    icon: Wallet,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10" />
          <div className="container relative py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mb-8 inline-flex items-center rounded-full border bg-background px-4 py-1 text-sm font-medium text-muted-foreground">
                <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
                New: AI-powered subscription recommendations
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Take Control of Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Subscriptions
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Track, manage, and optimize all your subscriptions in one place. Save money and never miss a renewal again.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/login">
                    Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16">
          <div className="container">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-8 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.name}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <stat.icon className="h-8 w-8 text-blue-500" />
                    <div className="mt-4 text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">{stat.name}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to manage subscriptions
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Powerful features to help you track, manage, and optimize your subscription spending.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            >
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    variants={fadeInUp}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-20 dark:from-teal-950 dark:to-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose SubTamer?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Join thousands of users who are already saving money and time with SubTamer.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={fadeInUp}
                  className="group flex items-center gap-x-3 rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md dark:bg-gray-800"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-teal-500" />
                  <span className="text-base text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Loved by thousands of users
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                See what our users have to say about SubTamer.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.author}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center gap-x-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500" />
                      <div>
                        <h3 className="text-base font-semibold">{testimonial.author}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                      {testimonial.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your Security is Our Priority
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We take security seriously. Your data is protected with industry-standard encryption and security measures.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {securityFeatures.map((feature) => (
                <motion.div
                  key={feature.name}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <feature.icon className="h-8 w-8 text-blue-500" />
                    <h3 className="mt-6 text-lg font-semibold">{feature.name}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-20 dark:from-teal-950 dark:to-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Seamless Integrations
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Connect with your favorite tools and services for a complete financial management experience.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {integrations.map((integration) => (
                <motion.div
                  key={integration.name}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <integration.icon className="h-8 w-8 text-teal-500" />
                    <h3 className="mt-6 text-lg font-semibold">{integration.name}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{integration.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 dark:from-blue-950 dark:to-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to take control of your subscriptions?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Join thousands of users who are already saving money and time with SubTamer.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/login">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
} 