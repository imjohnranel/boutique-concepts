"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { FEATURED_PRODUCTS } from "@/lib/placeholder-data"
import { Button } from "@/components/ui/button"

export function HeroCarousel() {
    const heroProducts = FEATURED_PRODUCTS.filter(p => p.featured).slice(0, 3)

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full h-full overflow-hidden"
        >
            <CarouselContent className="h-full ml-0">
                {heroProducts.map((product) => (
                    <CarouselItem key={product.id} className="relative h-full pl-0">
                        <div className="relative h-full w-full min-h-[400px]">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover transition-scale duration-700 hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-8 md:px-12">
                                <div className="max-w-md space-y-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                                        Featured Collection / {product.theme}
                                    </span>
                                    <h2 className="font-serif text-3xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                                        {product.name}
                                    </h2>
                                    <p className="text-sm md:text-base text-gray-200 line-clamp-2 md:line-clamp-none">
                                        {product.description}
                                    </p>
                                    <div className="flex gap-4 pt-2">
                                        <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                                            Reserve Now
                                        </Button>
                                        <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
