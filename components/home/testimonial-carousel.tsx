"use client"

import * as React from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { REVIEWS } from "@/lib/placeholder-data"

export function TestimonialCarousel() {
    return (
        <div className="flex flex-col h-full justify-between p-6">
            <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold">Trusted by the Community</h3>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent>
                        {REVIEWS.map((review) => (
                            <CarouselItem key={review.id}>
                                <div className="space-y-4">
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={i < review.rating ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-muted border-muted"}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm italic leading-relaxed text-muted-foreground">
                                        &ldquo;{review.content}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <Image // Replaced <img> with <Image>
                                            src={review.avatar}
                                            alt={review.author}
                                            width={40} // Added width
                                            height={40} // Added height
                                            className="h-10 w-10 rounded-full border bg-muted"
                                        />
                                        <div>
                                            <p className="text-sm font-bold">{review.author}</p>
                                            <p className="text-xs text-muted-foreground">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="pt-4 mt-auto border-t text-center">
                <p className="text-xs font-medium text-primary uppercase tracking-widest">
                    Join 500+ Enthusiasts
                </p>
            </div>
        </div>
    )
}
