"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { FEATURED_PRODUCTS } from "@/lib/placeholder-data"
import { ProductCard } from "@/components/products/product-card"

function ProductsContent() {
    const searchParams = useSearchParams()
    const category = searchParams.get("category")

    const filteredProducts = category
        ? FEATURED_PRODUCTS.filter(
            p => p.theme?.toLowerCase() === category.toLowerCase()
        )
        : FEATURED_PRODUCTS

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4">
                <h1 className="font-serif text-4xl font-bold tracking-tight">
                    {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection` : "All Collections"}
                </h1>
                <p className="text-muted-foreground max-w-[600px]">
                    Discover our curated selection of high-fidelity rental items for your next grand event or production.
                </p>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed text-center">
                    <h2 className="text-xl font-semibold">No products found</h2>
                    <p className="text-muted-foreground">Try adjusting your filters or browsing another collection.</p>
                </div>
            )}
        </div>
    )
}

export default function ProductsPage() {
    return (
        <React.Suspense fallback={<div className="container mx-auto py-20 text-center">Loading collections...</div>}>
            <ProductsContent />
        </React.Suspense>
    )
}

