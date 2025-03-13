"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { motion } from "framer-motion"

const services = [
  {
    name: "API",
    status: "operational",
    description: "Our REST API and webhooks are functioning normally.",
    icon: Icons.laptop,
    color: IconColors.laptop,
  },
  {
    name: "Bank Integration",
    status: "operational",
    description: "Bank account connections and data sync are working as expected.",
    icon: Icons.creditCard,
    color: IconColors.creditCard,
  },
  {
    name: "Authentication",
    status: "operational",
    description: "User authentication and authorization systems are functioning normally.",
    icon: Icons.shield,
    color: IconColors.shield,
  },
  {
    name: "Analytics",
    status: "operational",
    description: "Subscription analytics and reporting features are available.",
    icon: Icons.lineChart,
    color: IconColors.lineChart,
  },
]

const incidents = [
  {
    title: "Scheduled Maintenance",
    status: "scheduled",
    description: "We will be performing system maintenance on March 20th, 2024, from 2:00 AM to 4:00 AM PST.",
    date: "March 15, 2024",
    icon: Icons.zap,
    color: IconColors.zap,
  },
]

export default function StatusPage() {
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
                System Status
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Real-time status of SubTamer's services and systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    All Systems Operational
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    Last updated: {new Date().toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-x-2 rounded-full bg-green-100 px-4 py-2 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <Icons.checkCircle className="h-5 w-5" />
                  <span>100% Uptime</span>
                </div>
              </div>

              {/* Services Grid */}
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {services.map((service) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-x-4">
                        <service.icon className={`h-6 w-6 ${service.color}`} />
                        <div>
                          <h3 className="text-xl font-semibold">{service.name}</h3>
                          <div className="mt-1 flex items-center gap-x-2">
                            <span className="inline-flex items-center gap-x-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                              <Icons.checkCircle className="h-3 w-3" />
                              Operational
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Incidents Section */}
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
                Recent Incidents
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Information about recent and upcoming maintenance or issues.
              </p>

              <div className="mt-16 space-y-8">
                {incidents.map((incident) => (
                  <motion.div
                    key={incident.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center gap-x-4">
                        <incident.icon className={`h-6 w-6 ${incident.color}`} />
                        <div>
                          <h3 className="text-xl font-semibold">{incident.title}</h3>
                          <div className="mt-1 flex items-center gap-x-2">
                            <span className="inline-flex items-center gap-x-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                              <Icons.bell className="h-3 w-3" />
                              Scheduled
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">{incident.description}</p>
                      <p className="mt-2 text-sm text-muted-foreground">Posted on {incident.date}</p>
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
                Stay Updated
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Subscribe to our status updates to be notified of any incidents or maintenance.
              </p>
              <div className="mt-10">
                <Button size="lg" className="group">
                  Subscribe to Updates
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