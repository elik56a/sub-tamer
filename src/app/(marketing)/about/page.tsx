"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { motion } from "framer-motion"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/team/sarah.jpg",
    bio: "Former fintech executive with 10+ years of experience in subscription management.",
    icon: Icons.users,
    color: IconColors.users,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/team/michael.jpg",
    bio: "Tech leader with expertise in building scalable financial applications.",
    icon: Icons.laptop,
    color: IconColors.laptop,
  },
  {
    name: "Emma Davis",
    role: "Head of Product",
    image: "/team/emma.jpg",
    bio: "Product strategist focused on creating intuitive financial tools.",
    icon: Icons.sparkles,
    color: IconColors.sparkles,
  },
]

const values = [
  {
    name: "Transparency",
    description: "We believe in being open and honest about our practices and pricing.",
    icon: Icons.globe,
    color: IconColors.globe,
  },
  {
    name: "Security",
    description: "Your data security is our top priority. We use industry-standard encryption.",
    icon: Icons.shield,
    color: IconColors.shield,
  },
  {
    name: "Innovation",
    description: "We're constantly improving our platform with the latest technology.",
    icon: Icons.zap,
    color: IconColors.zap,
  },
]

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description: "SubTamer was founded with a mission to simplify subscription management.",
    icon: Icons.sparkles,
    color: IconColors.sparkles,
  },
  {
    year: "2021",
    title: "First Funding",
    description: "Raised seed funding to accelerate product development.",
    icon: Icons.trendingUp,
    color: IconColors.trendingUp,
  },
  {
    year: "2022",
    title: "Bank Integration",
    description: "Launched automatic bank integration for seamless tracking.",
    icon: Icons.creditCard,
    color: IconColors.creditCard,
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded our services to users worldwide.",
    icon: Icons.globe,
    color: IconColors.globe,
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

export default function AboutPage() {
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
                Our Story
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We're on a mission to help people take control of their subscriptions and save money.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                At SubTamer, we believe that managing subscriptions shouldn't be complicated. Our mission is to provide a simple, powerful tool that helps people track, manage, and optimize their subscription spending.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/50 py-20 dark:bg-muted/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {values.map((value) => (
                <motion.div
                  key={value.name}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                    <h3 className="mt-6 text-lg font-semibold">{value.name}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                The people behind SubTamer.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center gap-x-4">
                      <member.icon className={`h-6 w-6 ${member.color}`} />
                      <div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-muted-foreground">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-muted/50 py-20 dark:bg-muted/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Journey
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Key milestones in our story.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            >
              {milestones.map((milestone) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center gap-x-4">
                      <milestone.icon className={`h-6 w-6 ${milestone.color}`} />
                      <div>
                        <h3 className="text-lg font-semibold">{milestone.year}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.title}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
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
                Join Us on Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Be part of the future of subscription management.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg">
                  <a href="/careers">View Open Positions</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 