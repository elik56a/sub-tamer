import { Metadata } from "next"
import { FeaturesContent } from "@/components/marketing/features-content"

export const metadata: Metadata = {
  title: "Features - SubTamer",
  description: "Discover all the powerful features of SubTamer for managing your subscriptions.",
}

export default function FeaturesPage() {
  return <FeaturesContent />
} 