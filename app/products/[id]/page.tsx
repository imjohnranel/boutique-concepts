"use client"

import * as React from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { format, addDays } from "date-fns"
import { Calendar as CalendarIcon, Check, Shield } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { FEATURED_PRODUCTS } from "@/lib/placeholder-data"
import { Product } from "@/types/product"

export default function ProductPage() {
    const params = useParams()
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [product, setProduct] = React.useState<Product | undefined>(undefined)

    React.useEffect(() => {
        // Simulate Fetch
        const found = FEATURED_PRODUCTS.find((p) => p.id === params.id)
        setProduct(found)
    }, [params.id])

    if (!product) {
        return <div className="container mx-auto py-20 text-center">Loading product...</div>
    }

    const isRented = product.status === 'RENTED'

    return (
        <div className="container mx-auto px-4 py-8 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Image Gallery */}
                <div className="flex flex-col gap-4">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {product.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted lg:aspect-square shadow-inner">
                                        <Image
                                            src={image}
                                            alt={`${product.name} image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {product.images.length > 1 && (
                            <div className="hidden lg:block">
                                <CarouselPrevious className="left-4" />
                                <CarouselNext className="right-4" />
                            </div>
                        )}
                    </Carousel>
                    {/* Thumbnail Strip (Simplified for now) */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {product.images.map((image, index) => (
                            <div key={index} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border bg-muted cursor-pointer hover:ring-2 ring-primary transition-all">
                                <Image src={image} alt="thumbnail" fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-6">
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <Badge
                                variant={product.status === 'AVAILABLE' ? 'default' : 'secondary'}
                                className={cn(
                                    "text-sm uppercase tracking-wider",
                                    isRented && "bg-muted text-muted-foreground"
                                )}
                            >
                                {product.status}
                            </Badge>
                            {product.theme && (
                                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                                    {product.theme} Collection
                                </span>
                            )}
                        </div>
                        <h1 className="font-serif text-3xl font-bold tracking-tight lg:text-4xl text-foreground">
                            {product.name}
                        </h1>
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-primary">
                                ${product.price}
                            </span>
                            <span className="text-muted-foreground">
                                / 3 days
                            </span>
                        </div>
                        {product.securityDeposit && (
                            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                <Shield className="h-4 w-4" />
                                <span>+${product.securityDeposit} refundable security deposit</span>
                            </div>
                        )}
                    </div>

                    <div className="prose prose-stone dark:prose-invert">
                        <p>{product.description}</p>
                    </div>

                    <div className="space-y-4 rounded-lg border p-6 shadow-sm">
                        <h3 className="font-medium mb-4">Rental Configuration</h3>

                        {/* Date Picker */}
                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Start Date</label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                        disabled={isRented}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        disabled={(date) => date < new Date()}
                                    />
                                </PopoverContent>
                            </Popover>
                            {isRented && (
                                <p className="text-xs text-destructive">
                                    This item is currently rented and unavailable for new bookings.
                                </p>
                            )}
                        </div>

                        {/* Size Selector (Placeholder) */}
                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Size</label>
                            <div className="flex gap-2">
                                {product.sizes.map((size) => (
                                    <Button key={size} variant="outline" size="sm" className="w-12" disabled={isRented}>
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <Button size="lg" className="w-full mt-4" disabled={isRented}>
                            {isRented ? 'Currently Unavailable' : 'Book Dates'}
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Professionally cleaned and sanitized</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
