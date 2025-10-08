export type AffiliateProduct = {
  slug: string
  name: string
  description: string
  image: string
  affiliateUrl: string
  price?: string
}

export const affiliateProducts: AffiliateProduct[] = [
  {
    slug: "super-headphones",
    name: "Super Headphones",
    description: "Wireless, noise-cancelling headphones with 30h battery life.",
    image: "/wireless-noise-cancelling-headphones.jpg",
    affiliateUrl: "https://example.com/your-affiliate-link-headphones",
    price: "$199",
  },
  {
    slug: "smart-watch-pro",
    name: "Smart Watch Pro",
    description: "Fitness tracking, notifications, and 5-day battery.",
    image: "/smartwatch-on-wrist.png",
    affiliateUrl: "https://example.com/your-affiliate-link-smartwatch",
    price: "$149",
  },
  {
    slug: "ergonomic-chair",
    name: "Ergonomic Chair",
    description: "Lumbar support and breathable mesh for long work sessions.",
    image: "/ergonomic-office-chair.png",
    affiliateUrl: "https://example.com/your-affiliate-link-chair",
    price: "$299",
  },
]
