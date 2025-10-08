import { NextResponse } from "next/server"
import { affiliateProducts } from "@/lib/affiliate-products"

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const product = affiliateProducts.find((p) => p.slug === params.slug)

  if (!product) {
    // Fallback: send back to home with a query param
    return NextResponse.redirect(new URL("/?notfound=1", _req.url), { status: 302 })
  }

  // Temporary redirect to the affiliate URL
  return NextResponse.redirect(product.affiliateUrl, { status: 302 })
}
