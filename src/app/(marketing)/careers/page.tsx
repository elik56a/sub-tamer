"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { motion } from "framer-motion"

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    icon: Icons.laptop,
    color: IconColors.laptop,
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    icon: Icons.sparkles,
    color: IconColors.sparkles,
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    icon: Icons.trendingUp,
    color: IconColors.trendingUp,
  },
]

const benefits = [
  {
    title: "Competitive Salary",
    description: "We offer market-competitive salaries and equity compensation.",
    icon: Icons.wallet,
    color: IconColors.wallet,
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs.",
    icon: Icons.shield,
    color: IconColors.shield,
  },
  {
    title: "Remote Work",
    description: "Flexible remote work options and modern office spaces.",
    icon: Icons.globe,
    color: IconColors.globe,
  },
  {
    title: "Learning & Development",
    description: "Continuous learning opportunities and professional growth.",
    icon: Icons.zap,
    color: IconColors.zap,
  },
]

export default function CareersPage() {
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
                Join Our Team
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Help us build the future of subscription management.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
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
                Open Positions
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We're always looking for talented individuals to join our team.
              </p>

              <div className="mt-16 space-y-8">
                {jobOpenings.map((job) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-x-4">
                        <job.icon className={`h-6 w-6 ${job.color}`} />
                        <div>
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <div className="mt-2 flex items-center gap-x-4 text-sm text-muted-foreground">
                            <span>{job.department}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button variant="outline" className="group">
                          Apply now
                          <Icons.arrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
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
                Why Join Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We offer a comprehensive benefits package to support your health, wealth, and work-life balance.
              </p>

              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                      <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
                      <p className="mt-2 text-muted-foreground">{benefit.description}</p>
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
                Ready to Join?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Don't see a position that matches your skills? We're always interested in hearing from talented individuals.
              </p>
              <div className="mt-10">
                <Button size="lg" className="group">
                  Contact us
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