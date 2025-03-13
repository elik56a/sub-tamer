"use client"

import { Button } from "@/components/ui/button"
import { Icons, IconColors } from "@/components/shared/icons"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    href: "/login",
    price: { monthly: "$0" },
    description: "Perfect for getting started with subscription management.",
    features: [
      "Track up to 5 subscriptions",
      "Basic subscription analytics",
      "Email notifications",
      "Manual subscription entry",
    ],
    featured: false,
    icon: Icons.creditCard,
    color: IconColors.creditCard,
  },
  {
    name: "Basic",
    id: "tier-basic",
    href: "/login?plan=basic",
    price: { monthly: "$9" },
    description: "Everything you need to manage your subscriptions effectively.",
    features: [
      "Unlimited subscription tracking",
      "Advanced analytics",
      "Smart notifications",
      "Bank integration",
      "Custom categories",
      "Export data",
    ],
    featured: true,
    icon: Icons.lineChart,
    color: IconColors.lineChart,
  },
  {
    name: "Premium",
    id: "tier-premium",
    href: "/login?plan=premium",
    price: { monthly: "$19" },
    description: "The most powerful subscription management solution.",
    features: [
      "Everything in Basic",
      "API access",
      "Team collaboration",
      "Priority support",
      "Advanced integrations",
      "Custom reports",
    ],
    featured: false,
    icon: Icons.sparkles,
    color: IconColors.sparkles,
  },
]

export default function PricingPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.featured ? "bg-primary/5 ring-primary" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <tier.icon className={`h-6 w-6 ${tier.color}`} />
                    <h2
                      className={`text-lg font-semibold leading-8 ${
                        tier.featured ? "text-primary" : ""
                      }`}
                    >
                      {tier.name}
                    </h2>
                  </div>
                  {tier.featured && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">
                    /month
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3">
                      <Icons.checkCircle className={`h-5 w-5 flex-none ${IconColors.checkCircle}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                className={`mt-8 ${
                  tier.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white text-primary ring-1 ring-inset ring-primary hover:bg-primary/5"
                }`}
              >
                <a href={tier.href}>Get started</a>
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? We're here to help.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/faq"
              className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
            >
              View FAQ <span aria-hidden="true">→</span>
            </a>
            <a
              href="mailto:support@subtamer.com"
              className="text-sm font-semibold leading-6 text-muted-foreground hover:text-primary"
            >
              Contact Support <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 