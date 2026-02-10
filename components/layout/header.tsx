import Link from "next/link"
import { Menu, Search, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center px-4">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader className="text-left">
                            <SheetTitle className="font-serif text-xl font-bold">Boutique Concepts</SheetTitle>
                            <SheetDescription>
                                Explore our collection
                            </SheetDescription>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-4 mt-8">
                            <Link href="/products?category=wedding" className="text-lg font-medium hover:text-primary transition-colors">
                                Wedding
                            </Link>
                            <Link href="/products?category=cosplay" className="text-lg font-medium hover:text-primary transition-colors">
                                Cosplay
                            </Link>
                            <Link href="/products?category=accessories" className="text-lg font-medium hover:text-primary transition-colors">
                                Accessories
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

                {/* Logo */}
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-serif text-xl font-bold tracking-tight">
                            Boutique Concepts
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation (Placeholder for now) */}
                <nav className="mx-6 hidden items-center space-x-6 text-sm font-medium md:flex">
                    <Link
                        href="/products?category=wedding"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Wedding
                    </Link>
                    <Link
                        href="/products?category=cosplay"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Cosplay
                    </Link>
                    <Link
                        href="/products?category=accessories"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Accessories
                    </Link>
                </nav>

                {/* Search Bar - Hidden on small mobile, visible on larger */}
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="h-9 pl-9 md:w-[300px] lg:w-[400px]"
                            />
                        </div>
                    </div>

                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="sr-only">Cart</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
