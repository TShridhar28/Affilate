"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { AffiliateProduct } from "@/lib/affiliate-products"

export function AffiliateCard({
  product,
  className,
}: {
  product: AffiliateProduct
  className?: string
}) {
  return (
    <Card className={cn("overflow-hidden bg-card text-card-foreground", className)}>
      <Link
        href={`/go/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="block group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            crossOrigin="anonymous"
          />
          <span className="absolute left-2 top-2 rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
            Sponsored
          </span>
        </div>
        <CardHeader className="space-y-1">
          <CardTitle className="text-balance text-base">{product.name}</CardTitle>
          {product.price ? <p className="text-sm text-muted-foreground">{product.price}</p> : null}
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
          <div className="mt-3 text-sm text-primary">Learn more →</div>
        </CardContent>
      </Link>
    </Card>
  )
}
