import { Metadata } from "next"
import { FAQContent } from "@/components/marketing/faq-content"

export const metadata: Metadata = {
  title: "FAQ - SubTamer",
  description: "Frequently asked questions about SubTamer and subscription management.",
}

export default function FAQPage() {
  return <FAQContent />
} 