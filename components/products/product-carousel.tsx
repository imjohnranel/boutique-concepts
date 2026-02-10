"use client"

import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductCard } from "@/components/products/product-card"
import { Product } from "@/types/product"

interface ProductCarouselProps {
    title: string
    products: Product[]
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="font-serif text-3xl font-bold tracking-tight">{title}</h2>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                            <ProductCard product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block">
                    <CarouselPrevious className="-left-12" />
                    <CarouselNext className="-right-12" />
                </div>
            </Carousel>
        </section>
    )
}
