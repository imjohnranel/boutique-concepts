import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Product } from "@/types/product"
import { cn } from "@/lib/utils"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="group overflow-hidden rounded-lg border-0 bg-card ring-1 ring-border transition-all hover:shadow-md">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                {product.images[0] ? (
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        No Image
                    </div>
                )}

                <div className="absolute top-2 left-2 flex gap-2">
                    <Badge
                        variant={product.status === 'AVAILABLE' ? 'default' : 'secondary'}
                        className={cn(
                            "uppercase tracking-wider",
                            product.status === 'RENTED' && "bg-muted text-muted-foreground hover:bg-muted/80"
                        )}
                    >
                        {product.status}
                    </Badge>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-background/90"
                >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                </Button>
            </div>

            <CardContent className="p-4">
                <div className="mb-2 text-xs text-muted-foreground uppercase tracking-wide">
                    {product.theme}
                </div>
                <h3 className="line-clamp-1 font-serif text-lg font-medium text-foreground">
                    <Link href={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold">
                        ${product.price}
                    </span>
                    {product.type === 'RENTAL' && (
                        <span className="text-xs text-muted-foreground">
                            / 3 days
                        </span>
                    )}
                </div>
                {product.type === 'RENTAL' && product.securityDeposit && (
                    <p className="mt-1 text-xs text-muted-foreground">
                        +${product.securityDeposit} deposit
                    </p>
                )}
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="outline">
                    View Details
                </Button>
            </CardFooter>
        </Card>
    )
}
